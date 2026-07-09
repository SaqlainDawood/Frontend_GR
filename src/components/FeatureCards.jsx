import React from 'react';
import './FeatureCards.css';

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        <div className="feature-cards-grid">

          {/* Open Data */}
          <div className="feature-card dark">
            <svg className="feature-card-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <h3 className="feature-card-title dark-title">Open Data</h3>
            <p className="feature-card-desc dark-desc">Comprehensive and simple data</p>
            <svg className="feature-watermark" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>

          {/* Service Card */}
          <div className="feature-card gold">
            <svg className="feature-card-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <h3 className="feature-card-title gold-title">Service Card</h3>
            <p className="feature-card-desc gold-desc">
              Knowledge database of provided services and its channels
            </p>
            <svg className="feature-watermark" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>

          {/* Customer Happiness Centers */}
          <div className="feature-card gold">
            <svg className="feature-card-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3 className="feature-card-title gold-title">Customer Happiness Centers</h3>
            <p className="feature-card-desc gold-desc">
              Customer Happiness Centers map along the country
            </p>
            <svg className="feature-watermark" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}