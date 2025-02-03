import React, { useState, useEffect } from 'react';
import Video_new from './Video';
import './App.css';
import Frontpage from './frontpage';

import zKZGaPtq4ek from './videos/zKZGaPtq4ek.mp4';
import zKZGaPtq4ek_meta from './videos/zKZGaPtq4ek_meta.json';

import i1UY3JoI9zg from './videos/i1UY3JoI9zg.mp4';
import i1UY3JoI9zg_meta from './videos/i1UY3JoI9zg_meta.json';

import _L9D7CRN1LY from './videos/_L9D7CRN1LY.mp4';
import _L9D7CRN1LY_meta from './videos/_L9D7CRN1LY_meta.json';

import CgVNySpEgHc from './videos/CgVNySpEgHc.mp4';
import CgVNySpEgHc_meta from './videos/CgVNySpEgHc_meta.json';

import d2aAs_eoK4Q from './videos/d2aAs_eoK4Q.mp4';
import d2aAs_eoK4Q_meta from './videos/d2aAs_eoK4Q_meta.json';

function App() {
  return (
    <div className="app">
      <Frontpage />

      <div className="app__videos">
        {zKZGaPtq4ek_meta.map((video) => (
          <Video_new 
            vidSrc = {zKZGaPtq4ek}
            channel = {video.channelName}
            description = {video.title}
            music = "Original"
            likes = {video.likes}
            comments = {video.comments}
            shares = {0}
          />
        ))}

        {i1UY3JoI9zg_meta.map((video) => (
          <Video_new 
            vidSrc = {i1UY3JoI9zg}
            channel = {video.channelName}
            description = {video.title}
            music = "Original"
            likes = {video.likes}
            comments = {video.comments}
            shares = {0}
          />
        ))}

        {_L9D7CRN1LY_meta.map((video) => (
          <Video_new 
            vidSrc = {_L9D7CRN1LY}
            channel = {video.channelName}
            description = {video.title}
            music = "Original"
            likes = {video.likes}
            comments = {video.comments}
            shares = {0}
          />
        ))}

        {CgVNySpEgHc_meta.map((video) => (
          <Video_new 
            vidSrc = {CgVNySpEgHc}
            channel = {video.channelName}
            description = {video.title}
            music = "Original"
            likes = {video.likes}
            comments = {video.comments}
            shares = {0}
          />
        ))}
        <Video_new />

        {d2aAs_eoK4Q_meta.map((video) => (
          <Video_new 
            vidSrc = {d2aAs_eoK4Q}
            channel = {video.channelName}
            description = {video.title}
            music = "Original"
            likes = {video.likes}
            comments = {video.comments}
            shares = {0}
          />
        ))}
        <Video_new />

        
      </div>
    </div>
  );
}

export default App;
