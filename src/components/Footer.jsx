import React from 'react';
import tawasulLogo from '../assets/tawasul-logo.png';

// Social icon button
function SocialBtn({ children }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '32px', height: '32px',
        background: hovered ? '#9A7B4F' : '#f0f0f0',
        color: hovered ? '#fff' : '#666',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '4px', textDecoration: 'none',
        transition: 'background 0.2s, color 0.2s',
        fontSize: '13px', fontWeight: '700',
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '2px solid #000000ff', paddingTop: '40px', paddingBottom: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* Main footer row */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '36px', justifyContent: 'space-between' }}>

          {/* 4 link columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '32px', flex: 1 }}>

            {/* The Authority */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111', marginBottom: '16px' }}>The Authority</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['ICP Terminology', 'Archive', 'ICP Email', "Suppliers' Inquiries"].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#9A7B4F'}
                    onMouseLeave={e => e.target.style.color = '#555'}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Using the website */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111', marginBottom: '16px' }}>Using the website</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Sitemap', 'Accessibility', 'HappinessFormula'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#9A7B4F'}
                    onMouseLeave={e => e.target.style.color = '#555'}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Information and Support */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111', marginBottom: '16px' }}>Information and Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Contact Us', 'Help', 'FAQ'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#9A7B4F'}
                    onMouseLeave={e => e.target.style.color = '#555'}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* References */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#111', marginBottom: '16px' }}>References</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Disclaimer', 'Terms & Conditions', 'Privacy Policy', 'Copyright'].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#9A7B4F'}
                    onMouseLeave={e => e.target.style.color = '#555'}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - contact info */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '220px' }}>
            {/* Tawasul logo */}
            <img src={tawasulLogo} alt="171 Tawasul" style={{ height: '60px', objectFit: 'contain', marginBottom: '16px' }} />

            {/* Phone numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div style={{ fontSize: '11px', color: '#777' }}>Inside UAE</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#8B1A1A' }}>600522222</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div style={{ fontSize: '11px', color: '#777' }}>Outside UAE</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#8B1A1A' }}>+971600522222</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '16px',
          paddingBottom: '8px',
          paddingRight: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Copyright */}
          <span style={{ fontSize: '12px', color: '#777' }}>&copy; Copyright 2026</span>

          {/* Social icons + Follow us */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#555', fontWeight: '600', marginRight: '4px' }}>Follow us on:</span>

            {/* Facebook */}
            <a href="#" style={{
              width: '30px', height: '30px', background: '#e8e8e8', color: '#555',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '4px', textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" style={{
              width: '30px', height: '30px', background: '#e8e8e8', color: '#555',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '4px', textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" style={{
              width: '30px', height: '30px', background: '#e8e8e8', color: '#555',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '4px', textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" style={{
              width: '30px', height: '30px', background: '#e8e8e8', color: '#555',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '4px', textDecoration: 'none',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
