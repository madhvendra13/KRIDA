import React, { useState, useEffect } from 'react';
import './AssetPanel.css';

function AssetPanel() {
  const [activeAsset, setActiveAsset] = useState(null);

  const handleClick = (asset) => {
    setActiveAsset(asset === activeAsset ? null : asset);
  };

  // Close the side panel when clicking outside of the AssetPanel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.asset-panel') === null) {
        setActiveAsset(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeAsset]);

  return (
    <div className="asset-panel">
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search..." />
          <span className="search-bar-icon">🔍</span>
        </div>
      </div>
      <div className="asset-container">
        <div
          className={`asset-slot ${activeAsset === 'Road' ? 'active' : ''}`}
          onClick={() => handleClick('Road')}
        >
          Road
          {activeAsset === 'Road' && (
            <div className="side-panel">
              <div className="child-component">Asphalt Road</div>
              <div className="child-component">Dirt Road</div>
              <div className="child-component">Gravel Road</div>
              <div className="child-component">Paved Road</div>
            </div>
          )}
        </div>
        <div
          className={`asset-slot ${activeAsset === 'Car' ? 'active' : ''}`}
          onClick={() => handleClick('Car')}
        >
          Car
          {activeAsset === 'Car' && (
            <div className="side-panel">
              <div className="child-component">Sports Car</div>
              <div className="child-component">SUV</div>
              <div className="child-component">Truck</div>
              <div className="child-component">Sedan</div>
            </div>
          )}
        </div>
        <div
          className={`asset-slot ${activeAsset === 'Obstacles' ? 'active' : ''}`}
          onClick={() => handleClick('Obstacles')}
        >
          Obstacles
          {activeAsset === 'Obstacles' && (
            <div className="side-panel">
              <div className="child-component">Traffic Cone</div>
              <div className="child-component">Barrier</div>
              <div className="child-component">Speed Bump</div>
              <div className="child-component">Pothole</div>
            </div>
          )}
        </div>
        <div
          className={`asset-slot ${activeAsset === 'Environment' ? 'active' : ''}`}
          onClick={() => handleClick('Environment')}
        >
          Environment
          {activeAsset === 'Environment' && (
            <div className="side-panel">
              <div className="child-component">Tree</div>
              <div className="child-component">Building</div>
              <div className="child-component">Street Light</div>
              <div className="child-component">Bench</div>
            </div>
          )}
        </div>
        <div
          className={`asset-slot ${activeAsset === 'Reward' ? 'active' : ''}`}
          onClick={() => handleClick('Reward')}
        >
          Reward
          {activeAsset === 'Reward' && (
            <div className="side-panel">
              <div className="child-component">Gold Coin</div>
              <div className="child-component">Star</div>
              <div className="child-component">Medal</div>
              <div className="child-component">Trophy</div>
            </div>
          )}
        </div>
        <div
          className={`asset-slot ${activeAsset === 'PutIn' ? 'active' : ''}`}
          onClick={() => handleClick('PutIn')}
        >
          Put In
          {activeAsset === 'PutIn' && (
            <div className="side-panel">
              <div className="child-component">Slot 1</div>
              <div className="child-component">Slot 2</div>
              <div className="child-component">Slot 3</div>
              <div className="child-component">Slot 4</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssetPanel;