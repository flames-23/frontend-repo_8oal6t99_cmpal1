import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import SplineHero from './components/SplineHero';
import SunsetSky from './components/SunsetSky';
import OceanWaves from './components/OceanWaves';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1026] text-white">
      {!splashDone && (
        <SplashScreen duration={3500} onFinish={() => setSplashDone(true)} />
      )}

      {/* Hero section with Spline cover */}
      <section className="relative w-full min-h-[70vh]">
        <SplineHero />
      </section>

      {/* Transition to custom CSS sunset + ocean to stay on theme */}
      <section className="relative w-full h-[70vh] grid grid-rows-2">
        <div className="relative">
          <SunsetSky />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0B1026]/80" />
        </div>
        <div className="relative">
          <OceanWaves />
        </div>
      </section>

      {/* Simple footer blurb */}
      <footer className="py-10 text-center text-white/70">
        Built with CSS animations and a 3D Spline cover to evoke the sea at sunset.
      </footer>
    </div>
  );
}
