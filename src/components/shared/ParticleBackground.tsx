'use client';

import React from 'react';

export const ParticleBackground: React.FC = () => {
  // Simple CSS-based particle background using SVG
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <style>{`
            @keyframes float1 { 0%, 100% { cy: 100%; opacity: 0; } 10% { opacity: 0.3; } 90% { opacity: 0.3; } 100% { cy: -10%; opacity: 0; } }
            @keyframes float2 { 0%, 100% { cy: 100%; opacity: 0; } 10% { opacity: 0.2; } 90% { opacity: 0.2; } 100% { cy: -10%; opacity: 0; } }
            .particle { fill: #00f0ff; }
          `}</style>
        </defs>
        {/* Ambient particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r={Math.random() * 1.5 + 0.5}
            className="particle"
            style={{
              opacity: Math.random() * 0.3,
              animation: `float${i % 2 === 0 ? '1' : '2'} ${8 + i * 0.5}s linear infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
