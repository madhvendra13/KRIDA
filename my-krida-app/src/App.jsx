import React from 'react';
import Navbar from './components/Navbar';
import AssetPanel from './components/AssetPanel';
import GameWindow from './components/GameWindow';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="main-content">
        <AssetPanel />
        <GameWindow />
      </div>
    </div>
  );
}

export default App;
