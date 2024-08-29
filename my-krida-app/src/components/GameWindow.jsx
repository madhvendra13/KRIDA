

import React from 'react';

function GameWindow() {
  return (
    <div className="game-window">
      <div className="game-area">
        {/* This is where the game will be rendered */}
      </div>
      <div className="game-controls">
        <button className="play-button">Play</button>
        <button className="stop-button">Stop</button>
        <button className="fullscreen-button">Fullscreen</button>
      </div>
    </div>
  );
}

export default GameWindow;