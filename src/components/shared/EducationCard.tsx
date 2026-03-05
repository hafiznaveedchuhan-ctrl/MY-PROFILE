'use client';

import React from 'react';
import { Education } from '@/types';
import { GlowCard } from './GlowCard';
import { motion } from 'framer-motion';

interface EducationCardProps {
  edu: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlowCard glowColor="violet">
        <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
        <p className="text-gray-400 mb-2">{edu.institution}</p>
        <p className="text-sm text-cyan-400 font-mono mb-3">{edu.year}</p>
        {edu.description && <p className="text-gray-300">{edu.description}</p>}
      </GlowCard>
    </motion.div>
  );
};
