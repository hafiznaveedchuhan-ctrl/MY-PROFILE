'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-cyan-400/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="relative group"
          >
            <div className="text-3xl font-orbitron font-bold">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />

              {/* Main text with gradient */}
              <div className="relative px-3 py-1 bg-black rounded-lg">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-violet-300 group-hover:to-cyan-200 transition-all duration-300">
                  HN
                </span>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                activeSection === link.href.substring(1)
                  ? 'text-cyan-300'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Right side: WhatsApp + CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/923002385209?text=Hi%20Hafiz%2C%20I'm%20interested%20in%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/60 text-green-300 hover:bg-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] rounded-lg transition-all duration-300 group"
            aria-label="Contact on WhatsApp"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div whileHover={{ rotate: 20, scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
              <MessageCircle size={18} />
            </motion.div>
            <span className="text-sm font-medium">WhatsApp</span>
          </motion.a>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            className="px-6 py-2 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 border border-cyan-400/60 text-cyan-300 hover:from-cyan-500/50 hover:to-violet-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] rounded-lg transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-cyan-400 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden glass border-t border-cyan-400/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 8, backgroundColor: "rgba(0,240,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/923002385209?text=Hi%20Hafiz%2C%20I'm%20interested%20in%20your%20work"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/60 text-green-300 hover:bg-green-500/30 rounded transition"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="block px-4 py-2 bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 rounded transition font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
