import React from 'react';

interface GradientTextProps {
  children: string | React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
