import React, { useContext } from 'react';
import { SongsContext } from '../Context/SongsContext';
import { Items } from './Items';
export const List = () => {
    const { songs } = useContext(SongsContext);

    return (
        <>
            <ul className='list-group'>
                {songs && songs.length > 0 ? (
                    songs.map((song) => (
                        <Items key={song.id} song={song.name} position={song.id} />
                    ))
                ) : (
                    <p>No songs available</p>
                )}
            </ul>

        </>
    );
}

