'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { SocialLink } from '@/components/shared/SocialLink';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text */}
          <div>
            <p className="text-gray-300 mb-2">
              Crafted with ❤️ by <span className="text-cyan-400 font-semibold">Hafiz Naveed Uddin</span>
            </p>
            <p className="text-sm text-gray-500">Building intelligent systems • Defending digital frontiers</p>
          </div>

          {/* Right side - Social & Back to top */}
          <div className="flex items-center gap-4">
            <SocialLink
              href="https://linkedin.com/in/hafiz-naveed-uddin-h-n-96072524b"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink href="https://github.com/NAVEED261" icon={<Github size={20} />} label="GitHub" />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>&copy; 2026 Hafiz Naveed Uddin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
