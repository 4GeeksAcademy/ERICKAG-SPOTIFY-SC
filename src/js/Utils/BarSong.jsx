import React, { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { SongsContext } from '../Context/SongsContext';

export const BarSong = () => {
    const { currentUrl,nextSong,previuSong } = useContext(SongsContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying && currentUrl) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentUrl]);

    const handlePlayPause = () => {
        if (currentUrl) {
            setIsPlaying(prevIsPlaying => !prevIsPlaying);
        }
    };



    return (
        <div className="media-controls d-flex justify-content-center align-items-center">
            <button
                className="btn btn-light text-dark"
                aria-label="Previous"
                onClick={previuSong}
            >
                <FontAwesomeIcon icon={faCaretLeft} size="lg" />
            </button>
            <button
                className="btn btn-light text-dark mx-2"
                aria-label={isPlaying ? "Pause" : "Play"}
                onClick={handlePlayPause}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
            </button>
            <button
                className="btn btn-light text-dark"
                aria-label="Next"
                onClick={nextSong}
            >
                <FontAwesomeIcon icon={faCaretRight} size="lg" />
            </button>
            <audio ref={audioRef} src={`https://playground.4geeks.com${currentUrl}`} type="audio/mp3" />
        </div>
    );
};
