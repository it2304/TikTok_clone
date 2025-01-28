import React from 'react';
import './VideoFooter.css';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Marquee from "react-fast-marquee";

function VideoFooter({ channel, description, music }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p> {description} </p>
                <div className="videoFooter__ticker">
                    <LibraryMusicIcon className="musicicon" />
                    <Marquee gradient={false} speed={50} className="ticker">
                        <p>{music}</p>
                    </Marquee>
                </div>
            </div>
            <img className="recordLogo"
                src="https://static.thenounproject.com/png/934821-200.png" 
                alt=""
            />

        </div>
    );
}

export default VideoFooter