import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServicesGrid.css';

// Person icon
function PersonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Building icon
function BuildingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

// Keyboard icon for Typing Centers
function KeyboardIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
    </svg>
  );
}

// Shield icon for Start Verification
function ShieldIcon({ color = '#8B1A1A' }) {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate("/register")}
      width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"
      style={{ cursor: 'pointer' }}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

// Globe icon
function GlobeIcon() {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate('/register')}
      width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4"
      style={{ cursor: 'pointer' }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Star icon for Golden Services
function StarIcon() {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate('/register')}
      width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4"
      style={{ cursor: 'pointer' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <div className="services-grid-wrapper">
      <div className="services-grid-container">

        {/* Left column: service cards + quick access */}
        <div className="services-left-column">

          {/* Row 1: 3 service cards */}
          <div className="services-row">

            {/* Individuals Services */}
            <div className="service-card">
              <div className="service-card-header">
                <PersonIcon />
                <span className="service-card-title">
                  Individuals<br />Services
                </span>
              </div>
              <div className="service-card-buttons">
                <button className="gold-btn">Individuals Registration</button>
                <button className="gold-btn">Forgot Username / Password</button>
              </div>
            </div>

            {/* Establishments Services */}
            <div className="service-card">
              <div className="service-card-header">
                <BuildingIcon />
                <span className="service-card-title">
                  Establishments<br />Services
                </span>
              </div>
              <div className="service-card-buttons">
                <button className="gold-btn">Establishments Registration</button>
                <button className="gold-btn">Change Username</button>
              </div>
            </div>

            {/* Typing Centers Services */}
            <div className="service-card">
              <div className="service-card-header">
                <KeyboardIcon />
                <span className="service-card-title">
                  Typing Centers<br />Services
                </span>
              </div>
              <div className="service-card-buttons">
                <button className="gold-btn">Typing Centers Registration</button>
                <button className="gold-btn">Change Username</button>
              </div>
            </div>
          </div>

          {/* Row 2: 4 quick access cards */}
          <div className="quick-access-row">
            {[
              { label: 'Start Verification', icon: <ShieldIcon />, bg: '#f1cccbff' },
              { label: 'Public Services', icon: <GlobeIcon />, bg: '#f5f5f5' },
              { label: 'Golden Services', icon: <StarIcon />, bg: '#f5f5f5' },
              { label: 'Public Visa Services', icon: <GlobeIcon />, bg: '#f5f5f5' },
            ].map((item) => (
              <div key={item.label} className="quick-card">
                <div className="quick-card-icon" style={{ background: item.bg }}>
                  {item.icon}
                </div>
                <span className="quick-card-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Login Panel */}
        <div className="login-panel">
          <h2 className="login-panel-title">Login</h2>
          <p className="login-panel-subtitle">
            Choose a login method that suites your needs
          </p>

          <button
            onClick={() => navigate('/register')}
            className="uae-pass-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Sign in with UAE PASS
          </button>

          <p className="uae-pass-text">
            A single trusted digital identity for all citizens, residents and visitors.
          </p>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <Link to='/register' className="other-login-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Use Other Login Option
          </Link>
        </div>

      </div>
    </div>
  );
}