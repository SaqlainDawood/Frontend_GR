import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <span className="topbar-title">
          Federal Authority for Identity, Citizenship, Customs &amp; Port Security
        </span>
        <div className="topbar-links">
          <Link to='/register' className="topbar-link">FAQ</Link>
          <Link to='/register' className="topbar-link">Contact Us</Link>
          <Link to='/register' className="topbar-link">Help</Link>
        </div>
      </div>
    </div>
  );
}