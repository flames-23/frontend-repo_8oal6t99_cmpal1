import React from 'react';

// CSS-only animated sunset sky gradient from orange dusk to deep night
export default function SunsetSky({ className = '' }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Animated gradient: dusk -> twilight -> night */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FF8A00 0%, #FF4D00 30%, #7A2E6E 60%, #0B1026 100%)',
          animation: 'sunsetShift 8s ease-in-out forwards',
        }}
      />

      {/* Sun disc descending and fading */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 md:top-16 w-48 h-48 rounded-full blur-sm"
           style={{
             background: 'radial-gradient(circle at 50% 50%, #FFD37D 0%, #FFB347 40%, rgba(255,140,0,0.7) 60%, rgba(255,77,0,0.2) 100%)',
             animation: 'sunsetDrop 8s ease-in-out forwards',
             boxShadow: '0 0 120px 40px rgba(255, 166, 0, 0.35)'
           }}
      />

      {/* Light rays */}
      <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
           style={{
             background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 209, 121, 0.25) 0%, rgba(255, 209, 121, 0.08) 40%, transparent 70%)',
             mixBlendMode: 'screen'
           }}
      />

      <style>{`
        @keyframes sunsetShift {
          0% { filter: saturate(1.1) brightness(1); }
          50% { filter: saturate(0.95) brightness(0.9); }
          100% { filter: saturate(0.9) brightness(0.75); }
        }
        @keyframes sunsetDrop {
          0% { transform: translate(-50%, 0) translateY(0); opacity: 1; }
          60% { transform: translate(-50%, 0) translateY(110px); opacity: 0.6; }
          100% { transform: translate(-50%, 0) translateY(170px); opacity: 0.05; }
        }
      `}</style>
    </div>
  );
}
