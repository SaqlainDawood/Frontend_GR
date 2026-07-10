import React from 'react';
import './InfoSection.css';

const items = [
  'Establishments',
  'Typing Centers',
  'Citizens of the United Arab Emirates and citizens of the Gulf Cooperation Council countries',
  'Residents of the United Arab Emirates and residents of the Gulf Cooperation Council countries',
  'Individuals under the files of corporate guarantors or guarantors from the Excellencies the Sheikhs',
];

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-section-container">
        <div className="info-section-box">
          <p className="info-section-heading">
            Kindly note that registration in the Smart Services is available for the following categories:
          </p>
          <ul className="info-section-list">
            {items.map((item, i) => (
              <li key={i} className="info-section-item">
                <span className="info-section-arrow">{'>>'}</span>
                <p className="info-section-text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
