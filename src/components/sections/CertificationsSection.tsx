'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CertCard } from '@/components/shared/CertCard';
import { certifications } from '@/data';
import { CERT_CATEGORIES } from '@/lib/constants';

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered =
    selectedCategory === 'All' ? certifications : certifications.filter((c) => c.category === selectedCategory);

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        label="Credentials"
        title={`Certifications (${certifications.length})`}
        subtitle="Professional certifications across AI, Cybersecurity, Cloud, and Data Science"
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {CERT_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-cyan-500/30 border border-cyan-400 text-cyan-300'
                : 'glass text-gray-300 hover:border-cyan-400/60 hover:text-cyan-300'
            }`}
          >
            {category} {category !== 'All' && `(${certifications.filter((c) => c.category === category).length})`}
          </button>
        ))}
      </div>

      {/* Certs Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((cert) => (
            <motion.div key={cert.id} layout>
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No certifications in this category</p>
        </div>
      )}
    </SectionWrapper>
  );
};
