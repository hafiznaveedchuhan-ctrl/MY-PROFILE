'use client';

import React from 'react';
import { Certification } from '@/types';
import { GlowCard } from './GlowCard';
import { motion } from 'framer-motion';

interface CertCardProps {
  cert: Certification;
}

const categoryColors = {
  'AI & Agentic': { bg: 'from-cyan-500', border: 'border-cyan-400' },
  'Cloud & Infrastructure': { bg: 'from-violet-500', border: 'border-violet-400' },
  'Cybersecurity': { bg: 'from-amber-500', border: 'border-amber-400' },
  'Data Science': { bg: 'from-green-500', border: 'border-green-400' },
};

export const CertCard: React.FC<CertCardProps> = ({ cert }) => {
  const colors = categoryColors[cert.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <GlowCard glowColor={cert.category === 'Cybersecurity' ? 'amber' : cert.category === 'AI & Agentic' ? 'cyan' : 'violet'}>
        <div className={`h-1 bg-gradient-to-r ${colors.bg} rounded-full mb-4`} />
        <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{cert.date}</span>
          {cert.credentialId && <span className="text-xs font-mono text-cyan-400">{cert.credentialId}</span>}
        </div>
      </GlowCard>
    </motion.div>
  );
};
