import React, { useState } from 'react';
import './AssetPanel.css';

function AssetPanel() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="asset-panel">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search assets..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className="search-bar-icon">🔍</span> {/* Search icon */}
      </div>
      <div className="asset-container">
        <div className="asset-slot">Asset 1</div>
        <div className="asset-slot">Asset 2</div>
        <div className="asset-slot">Asset 3</div>
        <div className="asset-slot">Asset 4</div>
        <div className="asset-slot">Asset 5</div>
        <div className="asset-slot">Asset 6</div>
      </div>
    </div>
  );
}

export default AssetPanel;
