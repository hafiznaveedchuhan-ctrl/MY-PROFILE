import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, subtitle }) => {
  return (
    <div className="mb-12">
      <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">{label}</p>
      <h2 className="text-4xl font-orbitron font-bold mb-4 text-white">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded" />
      {subtitle && <p className="text-gray-400 mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
