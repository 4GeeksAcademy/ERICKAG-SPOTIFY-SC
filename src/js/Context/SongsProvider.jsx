import React, { useState, useEffect } from 'react';
import { SongsContext } from './SongsContext';

export const SongsProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState('');
    const [currentUrl, setCurrentUrl] = useState('');

    const findSong = () => {
        const filteredSong = songs.find(song => song.name.toLowerCase().includes(currentSong.toLowerCase()));
        if (filteredSong) {
            setCurrentUrl(filteredSong.url);
        } else {
            setCurrentUrl('');
        }
    };

    const getSongs = async () => {
        const request = await fetch('https://playground.4geeks.com/sound/songs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const response = await request.json();
        
        const uniqueSongs = response.songs.filter((song, index, self) =>
            index === self.findIndex((s) => s.name === song.name)
        );
        
        setSongs(uniqueSongs);
    };
    

    const nextSong = () => {
        if (songs.length > 0 && currentUrl) {
            const index = songs.findIndex(song => song.url === currentUrl);
                const nextIndex = index + 1;
                const nextSong = songs[nextIndex];
                setCurrentUrl(nextSong.url);
                setCurrentSong(nextSong.name);
        }
    };
    
    const previuSong = () => {
        if (songs.length > 0 && currentUrl) {
            const index = songs.findIndex(song => song.url === currentUrl);
                const prevIndex = index - 1;
                const prevSong = songs[prevIndex];
                setCurrentUrl(prevSong.url);
                setCurrentSong(prevSong.name);
        }
    };
    
    
    
    
    useEffect(() => {
        getSongs();
    }, []);

    useEffect(() => {
        findSong();
    }, [currentSong]);

    return (
        <SongsContext.Provider value={{ songs, setSongs, setCurrentSong, currentSong, currentUrl,nextSong,previuSong }}>
            {children}
        </SongsContext.Provider>
    );
};
