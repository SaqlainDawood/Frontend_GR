import React from 'react';
import headerLogo from '../assets/header-logo.png';
import uaeEmblem from '../assets/uae-emblem.png';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', active: true },
    { label: 'Public Services', active: false },
    { label: 'Golden Residency Services', active: false },
    { label: 'Blue Residency Services', active: false },
    { label: 'Public Visa Services', active: false },
    { label: 'Help', active: false },
  ];

  return (
    <header className="header">
      {/* Logo Row */}
      <div className="header-logo-row">
        <div className="header-logo-left">
          <img
            src={headerLogo}
            alt="Federal Authority for Identity, Citizenship, Customs & Port Security"
          />
        </div>

        <div className="header-title">
          <div className="header-title-ar">
            الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ
          </div>
          <div className="header-title-en">
            FEDERAL AUTHORITY FOR IDENTITY, CITIZENSHIP,<br />
            CUSTOMS &amp; PORT SECURITY
          </div>
        </div>

        <div className="header-logo-right">
          <img src={uaeEmblem} alt="UAE Emblem" />
        </div>
      </div>

      {/* Navigation Row */}
      <div>
        <div className="header-nav-row">
          <nav className="header-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`header-nav-link ${item.active ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-icons">
            <button className="header-icon-btn" onClick={() => navigate('/register')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <button className="header-icon-btn" onClick={() => navigate('/register')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button className="header-icon-btn" onClick={() => navigate('/register')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
            <button className="header-login-btn" onClick={() => navigate('/register')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </div>

        <div className="header-scrollbar">
          <div className="header-scrollbar-thumb" />
          <div className="header-scrollbar-arrow left">‹</div>
          <div className="header-scrollbar-arrow right">›</div>
        </div>
      </div>
    </header>
  );
}