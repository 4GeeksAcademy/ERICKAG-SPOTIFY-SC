import React, { useContext, useRef } from 'react';
import { SongsContext } from '../Context/SongsContext';

export const Items = ({ song, position }) => {
    const { currentSong, setCurrentSong } = useContext(SongsContext);
    const CurrentSong = useRef(null);

    const handleClick = () => {
        setCurrentSong(song);
    };

    return (
        <li
            className={`list-group-item list-group-item-action d-flex align-items-center ${currentSong === song ? 'bg-primary text-white' : 'bg-dark text-white'}`}
            ref={CurrentSong}
            onClick={handleClick}
        >
            <span className="font-weight-bold mx-2">{position}</span>
            <span className="font-weight-bold mx-2">{song}</span>
        </li>
    );
};
