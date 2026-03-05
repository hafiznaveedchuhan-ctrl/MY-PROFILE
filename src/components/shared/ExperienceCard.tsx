'use client';

import React from 'react';
import { Experience } from '@/types';
import { GlowCard } from './GlowCard';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-8"
    >
      {/* Timeline dot */}
      <div className="absolute -left-6 top-0 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900" />

      <GlowCard className="ml-8">
        {/* Current role indicator */}
        {exp.isCurrent && (
          <div className="absolute -right-4 top-4">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 animate-pulse" />
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
          <span className="text-sm text-cyan-400 font-mono">{exp.duration}</span>
        </div>
        <p className="text-gray-400 mb-3">{exp.company}</p>
        <p className="text-gray-300 mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </GlowCard>
    </motion.div>
  );
};
