import React from 'react';

// Simple CSS-only animated waves for ocean effect
export default function OceanWaves({ className = '' }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Base ocean color */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-700 via-sky-800 to-indigo-900" />

      {/* Subtle shimmer */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen"
           style={{
             backgroundImage:
               'repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 2px, transparent 6px)',
             animation: 'shimmer 12s linear infinite',
           }}
      />

      {/* Wave layers */}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[140%] h-24 bg-sky-600/50 rounded-[100%] blur-[2px]" style={{ animation: 'swell 8s ease-in-out infinite' }} />
      <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[150%] h-28 bg-sky-500/40 rounded-[100%] blur-[3px]" style={{ animation: 'swell2 10s ease-in-out infinite' }} />
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[160%] h-32 bg-sky-400/30 rounded-[100%] blur-[4px]" style={{ animation: 'swell3 14s ease-in-out infinite' }} />

      {/* Keyframes injected locally */}
      <style>{`
        @keyframes swell { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-48%, 0) translateY(6px) } }
        @keyframes swell2 { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-52%, 0) translateY(10px) } }
        @keyframes swell3 { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-49%, 0) translateY(14px) } }
        @keyframes shimmer { 0% { background-position: 0 0 } 100% { background-position: 0 200px } }
      `}</style>
    </div>
  );
}
