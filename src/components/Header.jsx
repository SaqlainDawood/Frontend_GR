import React from 'react';
import headerLogo from '../assets/header-logo.png';
import uaeEmblem from '../assets/uae-emblem.png';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  return (
    <header style={{ background: '#fff', borderBottom: '2px solid #000000ff', position: "sticky" }}>

      {/* Logo Row - 3 column layout like original */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      }}>

        {/* Left: ICP Logo */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={headerLogo}
            alt="Federal Authority for Identity, Citizenship, Customs & Port Security"
            style={{ height: '58px', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Center: Arabic + English title text */}
        <div style={{ flex: 1, padding: '10px 16px' }}>
          <div style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#111',
            fontFamily: "'Segoe UI', Arial, sans-serif",
            lineHeight: '1.3',


            marginBottom: '4px',
          }}>
            الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ
          </div>
          <div style={{
            fontSize: '11px',
            fontWeight: '500',

            color: '#333',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            lineHeight: '1.4',
          }}>
            FEDERAL AUTHORITY FOR IDENTITY, CITIZENSHIP,<br />
            CUSTOMS &amp; PORT SECURITY
          </div>
        </div>

        {/* Right: UAE Emblem */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={uaeEmblem}
            alt="UAE Emblem"
            style={{ height: '60px', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>

      {/* Navigation Row */}
      <div style={{}}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px',
        }}>
          {/* Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', height: '100%', overflowX: "auto", }}>
            {[
              { label: 'Home', active: true },
              { label: 'Public Services', active: false },
              { label: 'Golden Residency Services', active: false },
              { label: 'Blue Residency Services', active: false },
              { label: 'Public Visa Services', active: false },
              { label: 'Help', active: false },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  padding: '0 16px',
                  fontSize: '14px',
                  fontWeight: item.active ? '700' : '600',
                  color: item.active ? '#111' : '#000000ff',
                  textDecoration: 'none',
                  borderBottom: item.active ? '2px solid #111' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s',
                }}

              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Grid icon */}
            <button 
            onClick={() => navigate("/register")}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#555', display: 'flex', alignItems: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            {/* Search icon */}
            <button
            onClick={() => navigate("/register")}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#555', display: 'flex', alignItems: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            {/* Globe icon */}
            <button
            onClick={() => navigate("/register")}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#555', display: 'flex', alignItems: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
            {/* Login button */}
            <button
            onClick={() => navigate("/register")}
             style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              border: '1px solid #000000ff', borderRadius: '100px',
              padding: '6px 18px', background: '#fff',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#000000ff',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Login
            </button>
          </div>
        </div>

        {/* Scrollbar indicator - exactly like original */}
        <div style={{ position: 'relative', height: '4px', background: '#f0f0f0', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: '8px', top: '1px',
            width: '55%', height: '2px',
            background: '#bbb', borderRadius: '2px',
          }} />
          {/* Arrow indicators */}
          <div style={{
            position: 'absolute', left: '2px', top: '0px',
            fontSize: '10px', color: '#000000ff', lineHeight: '4px',
          }}>‹</div>
          <div style={{
            position: 'absolute', right: '2px', top: '0px',
            fontSize: '10px', color: '#000000ff', lineHeight: '4px',
          }}>›</div>
        </div>
      </div>
    </header>
  );
}
