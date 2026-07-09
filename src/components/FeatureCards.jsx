import React from 'react';

export default function FeatureCards() {
  return (
    <section style={{ background: '#f7f7f7', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>

          {/* Open Data - dark gray */}
          <div style={{
            background: '#2d2d2d',
            borderRadius: '8px',
            padding: '28px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            {/* Icon top left */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" style={{ marginBottom: '14px' }}>
              <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>Open Data</h3>
            <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.5', maxWidth: '80%' }}>Comprehensive and simple data</p>
            {/* Background watermark icon */}
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5"
              style={{ position: 'absolute', right: '-16px', bottom: '-16px' }}>
              <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>

          {/* Service Card - gold */}
          <div style={{
            background: '#c5a23bff',
            borderRadius: '8px',
            padding: '28px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" style={{ marginBottom: '14px' }}>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>Service Card</h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5', maxWidth: '80%' }}>
              Knowledge database of provided services and its channels
            </p>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"
              style={{ position: 'absolute', right: '-16px', bottom: '-16px' }}>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>

          {/* Customer Happiness Centers - darker gold */}
          <div style={{
            background: '#c5a23bff',
            borderRadius: '4px',
            padding: '28px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" style={{ marginBottom: '14px' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>Customer Happiness Centers</h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5', maxWidth: '80%' }}>
              Customer Happiness Centers map along the country
            </p>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"
              style={{ position: 'absolute', right: '-16px', bottom: '-16px' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
