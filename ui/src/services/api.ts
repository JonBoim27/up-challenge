export interface Album {
    name: string;
    artist: string;
    image: string;
    releaseDate: string;
    link: string;
  }
  
  export interface ApiResponse {
    feed: {
      entry: {
        "im:name": { label: string };
        "im:artist": { label: string };
        "im:image": { label: string }[];
        "im:releaseDate": { label: string };
        link: { attributes: { href: string } };
      }[];
    };
  }
  
  export const fetchTopAlbums = async (limit: number = 100): Promise<Album[]> => {
    const url = `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch albums: ${response.statusText}`);
      }
  
      const data: ApiResponse = await response.json();
      console.log('data', data);
  
      // Transform the API response into a simpler format
      return data.feed.entry.map((entry) => ({
        name: entry["im:name"].label,
        artist: entry["im:artist"].label,
        image: entry["im:image"][2]?.label || "", // Use the largest image available
        releaseDate: entry["im:releaseDate"].label,
        link: entry.link.attributes.href,
      }));
    } catch (error) {
      console.error("Error fetching albums:", error);
      throw error;
    }
  };