import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AssetPanel from './components/AssetPanel';
import GameWindow from './components/GameWindow';
import './App.css';

function App() {
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleAssetSelected = (asset) => {
    setSelectedAsset(asset);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <AssetPanel onAssetSelected={handleAssetSelected} />
        <GameWindow selectedAsset={selectedAsset} />
      </div>
    </div>
  );
}

export default App;