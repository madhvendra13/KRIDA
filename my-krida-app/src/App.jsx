import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AssetPanel from './components/AssetPanel';
import GameWindow from './components/GameWindow';
import './App.css';
import GameWindow2 from './components/GameWindow2';

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
        <GameWindow2 selectedAsset={selectedAsset} />
        {/* <GameWindow selectedAsset={selectedAsset} /> */}

      </div>
    </div>
  );
}

export default App;