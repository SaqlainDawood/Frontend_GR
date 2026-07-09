import React from 'react';

const items = [
  'Establishments',
  'Typing Centers',
  'Citizens of the United Arab Emirates and citizens of the Gulf Cooperation Council countries',
  'Residents of the United Arab Emirates and residents of the Gulf Cooperation Council countries',
  'Individuals under the files of corporate guarantors or guarantors from the Excellencies the Sheikhs',
];

export default function InfoSection() {
  return (
    <div style={{ background: '#fff', padding: '28px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '4px',
          padding: '24px 28px',
          background: '#fff',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#222',
            fontWeight: '600',
            marginBottom: '16px',
            lineHeight: '1.5',
          }}>
            Kindly note that registration in the Smart Services is available for the following categories:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {items.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                <span style={{ color: '#615f5fff', fontWeight: '700', marginTop: '1px', flexShrink: 0, fontSize: "15px" }}>{">>"}</span>
                <p className='fw-bold' style={{ color: 'gray', fontWeight: "500", lineHeight: '1.4' }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
