'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { GridBackground } from '@/components/shared/GridBackground';
import { TypedHeadline } from '@/components/shared/TypedHeadline';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { GradientText } from '@/components/shared/GradientText';
import { DownloadCVButton } from '@/components/shared/DownloadCVButton';
import { SocialLink } from '@/components/shared/SocialLink';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gray-900 pt-20">
      {/* Particle background */}
      <ParticleBackground />

      {/* Grid overlay */}
      <GridBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {profile.name}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-bold mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <TypedHeadline
                sequence={[
                  'Agentic AI Developer',
                  2000,
                  'SOC Analyst',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'MCP Level 2 Developer',
                  2000,
                  'Prompt Engineer',
                  2000,
                ]}
              />
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {profile.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-4 gap-4 mb-8 py-8 border-y border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <AnimatedCounter
                    from={0}
                    to={typeof stat.value === 'number' ? stat.value : parseInt(stat.value.toString())}
                    suffix={stat.value.toString().replace(/\d+/g, '')}
                  />
                  <p className="text-xs text-gray-500 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <DownloadCVButton cvPath={profile.cvPDF} />
              <a
                href="#contact"
                className="px-6 py-3 bg-violet-500/20 border border-violet-400/60 text-violet-300 hover:bg-violet-500/30 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <SocialLink href={profile.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href={profile.github} icon={<Github size={20} />} label="GitHub" />
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={20} />} label="Email" />
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Glow circle */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-2xl animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl border-2 border-cyan-400/30 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-cyan-400 font-mono text-sm">Hafiz Naveed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
        <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
