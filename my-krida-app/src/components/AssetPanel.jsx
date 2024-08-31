import React, { useState } from 'react';
import './AssetPanel.css';

function AssetPanel({ onAssetSelected }) {
  const [activeAsset, setActiveAsset] = useState(null);

  const handleClick = (asset) => {
    setActiveAsset(asset === activeAsset ? null : asset);
  };

  const handleChildClick = (child) => {
    onAssetSelected(child);
    setActiveAsset(null);
  };

  return (
    <div className="asset-panel">
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search..." />
          <span className="search-bar-icon">🔍</span>
        </div>
      </div>
      <div className="asset-container">
        {/* Road Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Road' ? 'active' : ''}`}
          onClick={() => handleClick('Road')}
        >
          Road
          {activeAsset === 'Road' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Asphalt Road')}>Asphalt Road</div>
              <div className="child-component" onClick={() => handleChildClick('Dirt Road')}>Dirt Road</div>
              <div className="child-component" onClick={() => handleChildClick('Gravel Road')}>Gravel Road</div>
              <div className="child-component" onClick={() => handleChildClick('Paved Road')}>Paved Road</div>
            </div>
          )}
        </div>

        {/* Car Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Car' ? 'active' : ''}`}
          onClick={() => handleClick('Car')}
        >
          Car
          {activeAsset === 'Car' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Sports Car')}>Sports Car</div>
              <div className="child-component" onClick={() => handleChildClick('Race Car')}>Race Car</div>
              {/* Add more child components for Car */}
            </div>
          )}
        </div>

        {/* Environment Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Environment' ? 'active' : ''}`}
          onClick={() => handleClick('Environment')}
        >
          Environment
          {activeAsset === 'Environment' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Forest')}>Forest</div>
              <div className="child-component" onClick={() => handleChildClick('Desert')}>Desert</div>
              {/* Add more child components for Environment */}
            </div>
          )}
        </div>

        {/* Obstacles Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Obstacles' ? 'active' : ''}`}
          onClick={() => handleClick('Obstacles')}
        >
          Obstacles
          {activeAsset === 'Obstacles' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Cone')}>Cone</div>
              <div className="child-component" onClick={() => handleChildClick('Barrier')}>Barrier</div>
              {/* Add more child components for Obstacles */}
            </div>
          )}
        </div>

        {/* Reward Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Reward' ? 'active' : ''}`}
          onClick={() => handleClick('Reward')}
        >
          Reward
          {activeAsset === 'Reward' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Star')}>Star</div>
              <div className="child-component" onClick={() => handleChildClick('Coin')}>Coin</div>
              {/* Add more child components for Reward */}
            </div>
          )}
        </div>

        {/* Put In Asset */}
        <div
          className={`asset-slot ${activeAsset === 'Put In' ? 'active' : ''}`}
          onClick={() => handleClick('Put In')}
        >
          Put In
          {activeAsset === 'Put In' && (
            <div className="side-panel">
              <div className="child-component" onClick={() => handleChildClick('Arrow Up')}>Arrow Up</div>
              <div className="child-component" onClick={() => handleChildClick('Arrow Down')}>Arrow Down</div>
              {/* Add more child components for Put In */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssetPanel;
