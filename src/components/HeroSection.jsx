import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import deviceMockup from '../assets/device-mockup.png';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <img src={heroBg} alt="Dubai skyline" className="hero-bg-img" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Golden Residency Services</h1>

          <p className="hero-desc">
            for Federal Authority For Identity, Citizenship, Customs &amp; Port Security
          </p>

          <button className="hero-btn" onClick={() => navigate('/register')}>
            Click Here
          </button>
        </div>

        <div className="hero-image-wrap">
          <img
            src={deviceMockup}
            alt="Golden Visa app on laptop and mobile"
            className="hero-device-img"
          />
        </div>
      </div>
    </section>
  );
}
