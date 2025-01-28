import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import './VideoSidebar.css';

function VideoSidebar({ likes, shares, comments }) {
    const [liked, setLiked] = React.useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon onClick={e => setLiked(true)} />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <CommentIcon />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;