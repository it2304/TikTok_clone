import React from 'react';
import Video_new from './Video';
import './App.css';
import Frontpage from './frontpage';

function App() {
  return (
    <div className="app">
      <Frontpage />

      <div className="app__videos">
        <Video_new 
          channel = "IrfanTamim"
          description = "This is a description"
          music = "The Lazy Song"
          likes = {123}
          comments = {223}
          shares = {333}
        />

        <Video_new />
        <Video_new />
        <Video_new />
      </div>
    </div>
  );
}

export default App;
