import React from 'react';

export default function QuickSearch() {
  return (
    <div style={{
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      padding: '10px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        {/* Quick Search label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontWeight: '700', fontSize: '14px', color: '#111',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Quick Search
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Request Number / PRAN / Id Number"
          style={{
            flex: 1,
            border: '1px solid #ddd',
            borderRadius: '7px',
            boxShadow: "0 0 5px rgba(71, 68, 68, 0.5)",
            padding: '10px 14px',
            fontSize: '13px',
            outline: 'none',
            color: '#555',
            background: '#fafafa',
          }}
        />

        {/* Inquiry button */}
        <button style={{
          background: '#8B1A1A',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 32px',
          fontWeight: '700',
          fontSize: '14px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Inquiry
        </button>
      </div>
    </div>
  );
}
