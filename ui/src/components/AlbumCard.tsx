import React from 'react';
import { Card,} from 'react-bootstrap';
import { Album } from '../types/Album';
import AlbumDetailsButton from './AlbumDetailsButton';
interface AlbumCardProps {
    album: Album;
    setIsModalOpen: (isOpen: boolean) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, setIsModalOpen }) => (
    <Card>
        <Card.Img variant="top" src={album.imageUrl} />
        <Card.Body>
            <Card.Title>{album.name}</Card.Title>
            <Card.Text>{album.artist}</Card.Text>
            <AlbumDetailsButton buttonLabel="Details" variant="primary" setIsModalOpen={setIsModalOpen} />
        </Card.Body>                                                                                                                                     
    </Card>
);

export default AlbumCard;