'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-violet-900/30" />

      {/* Particle background */}
      <ParticleBackground />

      {/* Grid overlay */}
      <GridBackground />

      {/* Multiple gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

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
              className="text-cyan-300 text-xs md:text-sm font-mono uppercase tracking-widest mb-6 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
              Welcome to my digital universe
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-3"
            >
              <h1 className="text-6xl md:text-7xl font-orbitron font-black leading-tight">
                <motion.span
                  className="block mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  HAFIZ
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  NAVEED
                </motion.span>
              </h1>

              {/* UDDIN - Super Stylish */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="relative text-3xl md:text-4xl font-orbitron font-black bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                  UDDIN
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-xl md:text-3xl font-bold mb-6 h-16 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="inline-block text-gray-300">I'm a </span>
              <TypedHeadline
                sequence={[
                  'Creative AI Engineer 🤖',
                  2500,
                  'Security Guardian 🛡️',
                  2500,
                  'Full-Stack Architect 🏗️',
                  2500,
                  'Innovation Seeker 🚀',
                  2500,
                ]}
              />
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Turning ideas into intelligent systems while securing digital frontiers.
            </motion.p>

            <motion.p
              className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              Specialized in Agentic AI, Cybersecurity, and Modern Web Development with 4+ years of experience
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 py-8 border-y border-cyan-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {profile.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-4 rounded-lg glass border border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    {typeof stat.value === 'number' ? stat.value : stat.value.match(/\d+/)?.[0] || stat.value}
                    {stat.value.toString().includes('+') ? '+' : ''}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-3 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <motion.a
                href={profile.cvPDF}
                download
                className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-500/30 to-cyan-500/20 border-2 border-cyan-400/80 text-cyan-200 hover:from-cyan-500/50 hover:to-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] rounded-lg transition-all duration-300 font-semibold group"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ y: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </motion.svg>
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 border-2 border-violet-400/80 text-violet-200 hover:from-violet-500/50 hover:to-pink-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] rounded-lg transition-all duration-300 font-semibold group"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <motion.a
                href="https://wa.me/923002385209?text=Hi%20Hafiz%2C%20I'm%20interested%20in%20your%20work"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-green-500/20 border-2 border-green-400/60 text-green-300 hover:bg-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-blue-500/20 border-2 border-blue-400/60 text-blue-300 hover:bg-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>

              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-purple-500/20 border-2 border-purple-400/60 text-purple-300 hover:bg-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={22} />
              </motion.a>

              <motion.a
                href={`mailto:${profile.email}`}
                className="w-12 h-12 rounded-lg bg-cyan-500/20 border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={22} />
              </motion.a>
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
              <div className="relative w-full h-full rounded-3xl border-2 border-cyan-400/50 overflow-hidden bg-gradient-to-br from-cyan-900/40 via-violet-900/40 to-black/80">
                <img
                  src={profile.profileImage}
                  alt="Hafiz Naveed Uddin"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
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
