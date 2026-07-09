import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

// Globe icon
function GlobeIcon() {
   const navigate = useNavigate();
  return (
    <svg 
    onClick={()=>navigate('/register')}
    width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4">
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
    onClick={()=>navigate('/register')}
    width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.4">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Gold button style
const goldBtn = {
  width: '100%',
  background: '#c5a23bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  padding: '9px 8px',
  fontSize: '12px',
  fontWeight: '600',
  cursor: 'pointer',
  textAlign: 'center',
};

export default function ServicesGrid() {
  return (
    <div style={{ background: '#f7f7f7', padding: '24px 0' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
      }}>

        {/* Left column: service cards + quick access */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Row 1: 3 service cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>

            {/* Individuals Services */}
            <div style={{
              background: '#ffffff', border: '1px solid #e5e7eb',
              borderRadius: '7px', padding: '18px 16px',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <PersonIcon />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#222', lineHeight: '1.3' }}>
                  Individuals<br />Services
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={goldBtn}>Individuals Registration</button>
                <button style={goldBtn}>Forgot Username / Password</button>
              </div>
            </div>

            {/* Establishments Services */}
            <div style={{
              background: '#ffffff', border: '1px solid #e5e7eb',
              borderRadius: '7px', padding: '18px 16px',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <BuildingIcon />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#222', lineHeight: '1.3' }}>
                  Establishments<br />Services
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={goldBtn}>Establishments Registration</button>
                <button style={goldBtn}>Change Username</button>
              </div>
            </div>

            {/* Typing Centers Services */}
            <div style={{
              background: '#ffffff', border: '1px solid #e5e7eb',
              borderRadius: '7px', padding: '18px 16px',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <KeyboardIcon />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#222', lineHeight: '1.3' }}>
                  Typing Centers<br />Services
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={goldBtn}>Typing Centers Registration</button>
                <button style={goldBtn}>Change Username</button>
              </div>
            </div>
          </div>

          {/* Row 2: 4 quick access cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Start Verification', icon: <ShieldIcon />, },
              { label: 'Public Services', icon: <GlobeIcon /> },
              { label: 'Golden Services', icon: <StarIcon /> },
              { label: 'Public Visa Services', icon: <GlobeIcon /> },
            ].map((item) => (
              <div key={item.label} style={{
                background: '#ffffff', border: '1px solid #e5e7eb',
                borderRadius: '7px', padding: '20px 12px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', cursor: 'pointer', gap: '10px',
                minHeight: '100px',
              }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: item.label === 'Start Verification' ? '#f1cccbff' : '#f5f5f5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#000000ff', lineHeight: '1.3' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
              
        {/* Right - Login Panel */}
        <div style={{
          width: '240px', flexShrink: 0, height: "auto",
          background: '#fff', border: '1px solid #000000ff',
          borderRadius: '9px', padding: '22px 20px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', textAlign: "center", color: '#111', marginBottom: '4px' }}>Login</h2>
          <p style={{ fontSize: '12px', textAlign: "center", color: '#000000ff', marginBottom: '20px', lineHeight: '1.4' }}>
            Choose a login method that suites your needs
          </p>

          {/* UAE PASS button */}
          <button
          onClick={()=>navigate('/register')}
          style={{
            width: '100%',
            background: '#1b2b4d',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: "12px 30px",

            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            marginBottom: '12px',
          }}>
            <svg
            onClick={()=>navigate('/register')}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Sign in with UAE PASS
          </button>

          <p style={{ fontSize: '11px', color: '#777', textAlign: 'center', marginBottom: '18px', lineHeight: '1.5' }}>
            A single trusted digital identity for all citizens, residents and visitors.
          </p>

          {/* OR divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#999' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
          </div>

          {/* Other login */}
          <Link to='/register' style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            fontSize: '12px', color: '#444', fontWeight: '600', textDecoration: 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Use Other Login Option
          </Link>
        </div>

      </div>
    </div>
  );
}
