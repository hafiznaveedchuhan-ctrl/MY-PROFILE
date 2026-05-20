'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const AffiliAISection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.06) 0%, transparent 70%), #030712'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,240,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
            style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)', color: '#67e8f9' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            FEATURED PROJECT — LIVE IN PRODUCTION
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(0,240,255,0.15)', background: 'rgba(255,255,255,0.02)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Top bar */}
          <div className="px-8 py-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(124,58,237,0.12))', borderBottom: '1px solid rgba(0,240,255,0.1)' }}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm font-mono" style={{ color: '#67e8f9' }}>affiliai-autopilot — production</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#10b981' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              LIVE
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                <span style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  AffiliAI
                </span>
                <br />
                <span style={{ color: '#f1f5f9' }}>Autopilot</span>
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                An end-to-end AI-automated affiliate marketing system. Built in 48 hours using
                Claude AI, NotebookLM, Next.js, and Python. Targeting USA, UK, Germany, Korea, and Canada
                with 14 factory-direct products — generating passive income on autopilot.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Python', 'Claude AI', 'NotebookLM', 'Vercel', 'Affiliate Marketing', '6 Markets'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono"
                    style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.15)', color: '#67e8f9' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/affiliai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
                  style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aed)', color: '#000' }}>
                  View Full Case Study →
                </Link>
                <a href="https://aliexpress-toppicks.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
                  style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)', color: '#00f0ff' }}>
                  🌐 Live Site
                </a>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '14', label: 'Products', icon: '🛍' },
                { value: '2', label: 'Live Websites', icon: '🌐' },
                { value: '17', label: 'Blog Posts', icon: '📝' },
                { value: '2', label: 'YouTube Videos', icon: '📺' },
                { value: '48h', label: 'Built In', icon: '⚡' },
                { value: '$0', label: 'Launch Cost', icon: '💰' },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className="p-5 rounded-xl text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(0,240,255,0.2)' }}
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: '#00f0ff' }}>{s.value}</div>
                  <div className="text-xs" style={{ color: '#64748b' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-8 py-4 flex items-center justify-between flex-wrap gap-3"
            style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-4">
              <a href="https://aliexpress-toppicks.vercel.app" target="_blank" rel="noopener noreferrer"
                className="text-xs font-mono transition-colors hover:text-cyan-300" style={{ color: '#64748b' }}>
                aliexpress-toppicks.vercel.app ↗
              </a>
              <a href="https://youtu.be/ZvJu6kWpQA0" target="_blank" rel="noopener noreferrer"
                className="text-xs font-mono transition-colors hover:text-red-400" style={{ color: '#64748b' }}>
                youtube/@HAFIZNAVEEDCHUHAN ↗
              </a>
            </div>
            <Link href="/affiliai"
              className="text-xs font-mono transition-colors hover:text-cyan-300" style={{ color: '#64748b' }}>
              Read full case study →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
