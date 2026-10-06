'use client';

import React from 'react';
import { Certification } from '@/types';
import { GlowCard } from './GlowCard';
import { motion } from 'framer-motion';

interface CertCardProps {
  cert: Certification;
}

const categoryColors: Record<string, { bg: string; border: string }> = {
  'AI & Agentic': { bg: 'from-cyan-500', border: 'border-cyan-400' },
  'Cloud & Infrastructure': { bg: 'from-violet-500', border: 'border-violet-400' },
  'Cybersecurity': { bg: 'from-amber-500', border: 'border-amber-400' },
  'Data Science': { bg: 'from-green-500', border: 'border-green-400' },
};

export const CertCard: React.FC<CertCardProps> = ({ cert }) => {
  const colors = categoryColors[cert.category];
  const isAnthropic = cert.featured && cert.issuer.includes('Anthropic');

  if (isAnthropic) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group">
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-xl opacity-60 group-hover:opacity-100 blur-[2px] transition-all duration-500 animate-pulse" />
          <div className="relative glass rounded-xl overflow-hidden border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

            <div className="p-5">
              {/* Header row: badge + Anthropic tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{cert.badge}</span>
                <span className="px-2.5 py-1 bg-orange-500/20 border border-orange-400/40 rounded-full text-[10px] font-bold uppercase tracking-wider text-orange-300">
                  Anthropic Certified
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-orange-300/80 text-sm mb-3">{cert.issuer}</p>

              {/* Skills tags */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-medium bg-white/5 border border-white/10 rounded-md text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer: date + verify link */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-gray-500">{cert.date}</span>
                <div className="flex items-center gap-3">
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-orange-400/70">
                      {cert.credentialId}
                    </span>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default card for non-Anthropic certs
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
