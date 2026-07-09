import React from 'react';

// Colorful house icon for UAE Residents (card 02)
function HouseColorIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Roof - red */}
      <polygon points="28,6 52,26 4,26" fill="#e53935" />
      {/* Chimney */}
      <rect x="38" y="12" width="6" height="12" fill="#b71c1c" />
      {/* Walls */}
      <rect x="7" y="25" width="42" height="24" fill="#f5f5f0" />
      {/* Door - green */}
      <rect x="23" y="37" width="10" height="12" rx="1" fill="#2e7d32" />
      {/* Left window - blue */}
      <rect x="10" y="30" width="10" height="8" rx="1" fill="#1565c0" />
      {/* Right window - blue */}
      <rect x="36" y="30" width="10" height="8" rx="1" fill="#1565c0" />
      {/* Ground strip - green */}
      <rect x="7" y="48" width="42" height="2" fill="#2e7d32" />
    </svg>
  );
}

// Double-house icon for GCC Residents (card 05)
function DoubleHouseIcon() {
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
      {/* Back house roof */}
      <polygon points="40,4 60,20 20,20" fill="#e57373" />
      <rect x="20" y="19" width="40" height="20" fill="#eeeeee" />
      {/* Back house door */}
      <rect x="36" y="28" width="8" height="11" rx="1" fill="#81c784" />
      {/* Front house roof */}
      <polygon points="24,12 50,30 -2,30" fill="#e53935" />
      {/* Front house walls */}
      <rect x="2" y="29" width="44" height="22" fill="#f5f5f0" />
      {/* Front door */}
      <rect x="20" y="39" width="10" height="12" rx="1" fill="#2e7d32" />
      {/* Front left window */}
      <rect x="5" y="33" width="10" height="8" rx="1" fill="#1565c0" />
      {/* Front right window */}
      <rect x="31" y="33" width="10" height="8" rx="1" fill="#1565c0" />
      {/* Ground */}
      <rect x="2" y="50" width="44" height="2" fill="#2e7d32" />
    </svg>
  );
}

// Building icon for Establishments (card 06)
function BuildingColorIcon() {
  return (
    <svg width="52" height="56" viewBox="0 0 52 56" fill="none">
      {/* Main body */}
      <rect x="6" y="10" width="40" height="40" fill="#eceff1" stroke="#b0bec5" strokeWidth="0.5" />
      {/* Top banner */}
      <rect x="6" y="10" width="40" height="7" fill="#1565c0" />
      {/* Windows row 1 */}
      <rect x="10" y="22" width="8" height="7" rx="1" fill="#1976d2" />
      <rect x="22" y="22" width="8" height="7" rx="1" fill="#1976d2" />
      <rect x="34" y="22" width="8" height="7" rx="1" fill="#1976d2" />
      {/* Windows row 2 */}
      <rect x="10" y="33" width="8" height="7" rx="1" fill="#1976d2" />
      <rect x="34" y="33" width="8" height="7" rx="1" fill="#1976d2" />
      {/* Door */}
      <rect x="21" y="33" width="10" height="17" rx="1" fill="#4caf50" />
    </svg>
  );
}

// Laptop icon for Typing Centers (card 07)
function LaptopIcon() {
  return (
    <svg width="58" height="44" viewBox="0 0 58 44" fill="none">
      {/* Screen body */}
      <rect x="7" y="2" width="44" height="30" rx="2" fill="#546e7a" />
      {/* Screen */}
      <rect x="10" y="5" width="38" height="24" rx="1" fill="#90a4ae" />
      {/* Base */}
      <rect x="0" y="34" width="58" height="6" rx="2" fill="#546e7a" />
      {/* Hinge notch */}
      <rect x="22" y="32" width="14" height="3" rx="2" fill="#607d8b" />
    </svg>
  );
}

// Suitcase/Luggage icon for Visitors (card 04)
function LuggageIcon() {
  return (
    <svg width="46" height="56" viewBox="0 0 46 56" fill="none">
      {/* Handle */}
      <rect x="14" y="2" width="18" height="10" rx="5" fill="none" stroke="#455a64" strokeWidth="3" />
      {/* Body */}
      <rect x="3" y="10" width="40" height="38" rx="3" fill="#607d8b" />
      {/* Horizontal stripes */}
      <rect x="3" y="24" width="40" height="3" fill="#546e7a" />
      <rect x="3" y="33" width="40" height="3" fill="#546e7a" />
      {/* Center vertical divider */}
      <rect x="20" y="10" width="6" height="38" fill="rgba(255,255,255,0.12)" />
      {/* Wheels */}
      <circle cx="12" cy="51" r="4" fill="#37474f" />
      <circle cx="34" cy="51" r="4" fill="#37474f" />
    </svg>
  );
}

// Shield icon for Start Verification (card 08)
function ShieldStarIcon() {
  return (
    <svg width="52" height="58" viewBox="0 0 52 58" fill="none">
      <path d="M26 3L4 13V30C4 43 14 53 26 57C38 53 48 43 48 30V13L26 3Z" fill="#8B1A1A" />
      <path d="M26 7L8 16V30C8 41 16 50 26 53C36 50 44 41 44 30V16L26 7Z" fill="#a52a2a" />
      {/* Star shape */}
      <polygon
        points="26,17 28.9,23.5 36,24.4 30.9,29.3 32.4,36.4 26,32.8 19.6,36.4 21.1,29.3 16,24.4 23.1,23.5"
        fill="white"
      />
    </svg>
  );
}

const cards = [
  {
    id: '01', title: 'UAE Citizens',
    icon: <span style={{ fontSize: '40x', fontWeight: '400', color: '#000000ff', letterSpacing: '-2px', lineHeight: 1 }}>AE</span>,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '02', title: 'UAE Residents',
    icon: <HouseColorIcon />,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '03', title: 'GCC Citizens',
    icon: <span style={{ fontSize: '40px', fontWeight: '400', color: '#000000ff', letterSpacing: '-2px', lineHeight: 1 }}>SA</span>,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '04', title: 'Visitors',
    icon: <LuggageIcon />,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '05', title: 'GCC Residents',
    icon: <DoubleHouseIcon />,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '06', title: 'Establishments',
    icon: <BuildingColorIcon />,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '07', title: 'Typing Centers',
    icon: <LaptopIcon />,
    bg: '#fff', labelColor: '#555',
  },
  {
    id: '08', title: 'Start Verification',
    icon: <ShieldStarIcon />,
    bg: '#fdf3f3', labelColor: '#8B1A1A', border: '1px solid #f0d0d0',
  },
];

export default function SmartServices() {
  return (
    <section style={{ background: '#ffffff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{
          fontSize: '22px', fontWeight: '800', textAlign: 'center',
          color: '#111', marginBottom: '28px',
        }}>
          Smart Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: card.bg,
                border: card.border || '1px solid #000000ff',
                borderRadius: '8px',
                padding: '16px',
                minHeight: '190px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: card.labelColor }}>{card.id}.</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: card.labelColor }}>{card.title}</span>
              </div>
              {/* Icon centered */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
