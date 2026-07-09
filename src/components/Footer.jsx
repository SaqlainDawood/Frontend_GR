import React from 'react';
import tawasulLogo from '../assets/tawasul-logo.png';
import './Footer.css';

// Social icon button
function SocialBtn({ children }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`social-btn ${hovered ? 'hovered' : ''}`}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Main footer row */}
        <div className="footer-main">

          {/* 4 link columns */}
          <div className="footer-links">

            {/* The Authority */}
            <div className="footer-column">
              <h4 className="footer-column-title">The Authority</h4>
              <ul className="footer-column-list">
                {['ICP Terminology', 'Archive', 'ICP Email', "Suppliers' Inquiries"].map(l => (
                  <li key={l}><a href="#" className="footer-link">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Using the website */}
            <div className="footer-column">
              <h4 className="footer-column-title">Using the website</h4>
              <ul className="footer-column-list">
                {['Sitemap', 'Accessibility', 'HappinessFormula'].map(l => (
                  <li key={l}><a href="#" className="footer-link">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Information and Support */}
            <div className="footer-column">
              <h4 className="footer-column-title">Information and Support</h4>
              <ul className="footer-column-list">
                {['Contact Us', 'Help', 'FAQ'].map(l => (
                  <li key={l}><a href="#" className="footer-link">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* References */}
            <div className="footer-column">
              <h4 className="footer-column-title">References</h4>
              <ul className="footer-column-list">
                {['Disclaimer', 'Terms & Conditions', 'Privacy Policy', 'Copyright'].map(l => (
                  <li key={l}><a href="#" className="footer-link">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - contact info */}
          <div className="footer-contact">
            <img src={tawasulLogo} alt="171 Tawasul" className="tawasul-logo" />

            <div className="contact-items">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div className="contact-label">Inside UAE</div>
                  <div className="contact-number">600522222</div>
                </div>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div className="contact-label">Outside UAE</div>
                  <div className="contact-number">+971600522222</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom">
          <span className="copyright">&copy; Copyright 2026</span>

          <div className="social-icons">
            <span className="follow-label">Follow us on:</span>
            <SocialBtn>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialBtn>
            <SocialBtn>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </SocialBtn>
            <SocialBtn>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </SocialBtn>
            <SocialBtn>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </SocialBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}