'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypedHeadlineProps {
  sequence: (string | number)[];
  className?: string;
}

export const TypedHeadline: React.FC<TypedHeadlineProps> = ({ sequence, className = '' }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className={`text-3xl md:text-4xl font-orbitron font-bold text-cyan-400 ${className}`}
    />
  );
};
