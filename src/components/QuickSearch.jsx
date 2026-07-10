import React from 'react';
import './QuickSearch.css';

export default function QuickSearch() {
  return (
    <div className="quick-search">
      <div className="quick-search-container">
        <div className="quick-search-label">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Quick Search
        </div>

        <input
          type="text"
          placeholder="Request Number / PRAN / Id Number"
          className="quick-search-input"
        />

        <button className="quick-search-btn">Inquiry</button>
      </div>
    </div>
  );
}
