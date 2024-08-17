import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { SongsContext } from '../Context/SongsContext';


export const BarSong = () => {
    const { currentUrl, nextSong, previousSong } = useContext(SongsContext)
    const audioRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause()
    }, [playing, currentUrl]);

    const handlePlay = () => {
        setPlaying(!playing)
    }

    return (
        <div className="media-controls d-flex justify-content-center align-items-center">
            <button className="btn btn-light text-dark" aria-label="Previous" onClick={previousSong}>
                <FontAwesomeIcon icon={faCaretLeft} size="lg" />
            </button>

            {playing && audioRef ?
                <button className="btn btn-light text-dark mx-2" onClick={handlePlay}>
                    <FontAwesomeIcon icon={faPause} size="lg" />
                </button>
                :
                <button className="btn btn-light text-dark mx-2" onClick={handlePlay}>
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                </button>
            }

            <button className="btn btn-light text-dark" aria-label="Next" onClick={nextSong}>
                <FontAwesomeIcon icon={faCaretRight} size="lg" />
            </button>

            <audio ref={audioRef} src={`https://playground.4geeks.com${currentUrl}`} type="audio/mp3" />
        </div>
    );
};
