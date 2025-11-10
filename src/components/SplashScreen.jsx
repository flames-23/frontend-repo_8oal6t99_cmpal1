import React, { useEffect, useState } from 'react';

// Splash screen orchestrates sunset sky on top and ocean waves below
export default function SplashScreen({ duration = 3500, onFinish }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true);
      onFinish && onFinish();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onFinish]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Top half: sunset sky with sun descending */}
      <div className="relative h-1/2">
        {/* Inject the sky gradient and sun */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #FF8A00 0%, #FF4D00 35%, #7A2E6E 70%, #0B1026 100%)',
              animation: 'skyFade 3.4s ease-in-out forwards',
            }}
          />
          <div className="absolute left-1/2 -translate-x-1/2 top-12 w-40 h-40 rounded-full"
               style={{
                 background: 'radial-gradient(circle at 50% 50%, #FFE6A6 0%, #FFC76E 40%, rgba(255,140,0,0.8) 60%, rgba(255,77,0,0.25) 100%)',
                 animation: 'sunDrop 3.4s ease-in-out forwards',
                 boxShadow: '0 0 100px 30px rgba(255, 180, 60, 0.35)'
               }}
          />
        </div>
      </div>

      {/* Bottom half: animated ocean waves */}
      <div className="relative h-1/2 bg-gradient-to-b from-sky-800 to-indigo-900 overflow-hidden">
        {/* waves */}
        <span className="absolute left-1/2 -translate-x-1/2 -top-10 w-[140%] h-24 bg-sky-600/60 rounded-[100%] blur-[2px]" style={{ animation: 'swell 8s ease-in-out infinite' }} />
        <span className="absolute left-1/2 -translate-x-1/2 top-0 w-[150%] h-28 bg-sky-500/45 rounded-[100%] blur-[3px]" style={{ animation: 'swell2 10s ease-in-out infinite' }} />
        <span className="absolute left-1/2 -translate-x-1/2 top-6 w-[160%] h-32 bg-sky-400/35 rounded-[100%] blur-[4px]" style={{ animation: 'swell3 14s ease-in-out infinite' }} />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes skyFade { 0% { filter: brightness(1) } 100% { filter: brightness(0.75) } }
        @keyframes sunDrop {
          0% { transform: translate(-50%, 0) translateY(0); opacity: 1; }
          60% { transform: translate(-50%, 0) translateY(110px); opacity: 0.6; }
          100% { transform: translate(-50%, 0) translateY(170px); opacity: 0.05; }
        }
        @keyframes swell { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-48%, 0) translateY(6px) } }
        @keyframes swell2 { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-52%, 0) translateY(10px) } }
        @keyframes swell3 { 0%, 100% { transform: translate(-50%, 0) translateY(0) } 50% { transform: translate(-49%, 0) translateY(14px) } }
      `}</style>
    </div>
  );
}
