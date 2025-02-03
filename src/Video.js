import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video_new({ vidSrc, channel, description, music, likes, shares, comments }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={vidSrc}
            > </video>
            <VideoFooter 
                channel={channel} 
                description={description}
                music={music}
            />
            <VideoSidebar
                likes={likes}
                shares={shares}
                comments={comments}
            />

        </div>
    );
}

export default Video_new