import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineHero() {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
      <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* Soft gradient overlay to blend with sunset theme; pointer events disabled to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1026]/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1026]/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 text-center pb-6">
        <h1 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">Golden Tide</h1>
        <p className="text-white/80 mt-2">A calm, flowing splash animation inspired by the sea at dusk</p>
      </div>
    </div>
  );
}
