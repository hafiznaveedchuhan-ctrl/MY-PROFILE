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

  const anthropicCerts = certifications.filter((c) => c.featured && c.issuer.includes('Anthropic'));
  const otherCerts = certifications.filter((c) => !(c.featured && c.issuer.includes('Anthropic')));

  const filtered =
    selectedCategory === 'All'
      ? otherCerts
      : selectedCategory === 'AI & Agentic'
        ? otherCerts.filter((c) => c.category === selectedCategory)
        : certifications.filter((c) => c.category === selectedCategory && !(c.featured && c.issuer.includes('Anthropic')));

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        label="Credentials"
        title={`Certifications (${certifications.length})`}
        subtitle="Professional certifications across AI, Cybersecurity, Cloud, and Data Science"
      />

      {/* ── Anthropic Featured Section ──────────────────────── */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 whitespace-nowrap flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Anthropic Academy — {anthropicCerts.length} Specializations
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {anthropicCerts.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-4">
          One of the most comprehensively certified engineers on the Anthropic stack globally
        </p>
      </div>

      {/* ── Other Certifications ──────────────────────── */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 whitespace-nowrap">
          Other Certifications
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {CERT_CATEGORIES.filter((c) => c !== 'All').map((category) => {
          const count = otherCerts.filter((c) => c.category === category).length;
          if (count === 0) return null;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? 'All' : category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'bg-cyan-500/30 border border-cyan-400 text-cyan-300'
                  : 'glass text-gray-300 hover:border-cyan-400/60 hover:text-cyan-300'
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Certs Grid */}
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
