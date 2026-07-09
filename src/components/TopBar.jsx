import React from 'react';

export default function TopBar() {
  return (
    <div style={{
      background: '#f9f9f9',
      borderBottom: '1px solid #000000ff',
      padding: '6px 0',
      fontSize: '12px',
      color: '#555',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span className='small' style={{ color: '#000000ff', fontSize: '12px', letterSpacing: "1px" }}>
          Federal Authority for Identity, Citizenship, Customs &amp; Port Security
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#080808ff', textDecoration: 'none', fontSize: '12px' }}
            onMouseEnter={e => e.target.style.color = '#111'}
            onMouseLeave={e => e.target.style.color = '#000000ff'}>FAQ</a>
          <a href="#" style={{ color: '#000000ff', textDecoration: 'none', fontSize: '12px' }}
            onMouseEnter={e => e.target.style.color = '#111'}
            onMouseLeave={e => e.target.style.color = '#000000ff'}>Contact Us</a>
          <a href="#" style={{ color: '#000000ff', textDecoration: 'none', fontSize: '12px' }}
            onMouseEnter={e => e.target.style.color = '#111'}
            onMouseLeave={e => e.target.style.color = '#000000ff'}>Help</a>
        </div>
      </div>
    </div>
  );
}
