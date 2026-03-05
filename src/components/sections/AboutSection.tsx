'use client';

import React from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { profile } from '@/data';

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Who I Am"
        subtitle="Passionate builder of intelligent systems and digital security solutions"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">{profile.bio}</p>
          </div>

          {/* Domain highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlowCard glowColor="cyan">
              <div className="text-cyan-400 font-semibold mb-2">🤖 Agentic AI</div>
              <p className="text-sm text-gray-300">Building intelligent agents with Claude API, MCP, and prompt engineering</p>
            </GlowCard>
            <GlowCard glowColor="amber">
              <div className="text-amber-400 font-semibold mb-2">🛡️ Cybersecurity</div>
              <p className="text-sm text-gray-300">SOC analysis, threat hunting, and incident response expertise</p>
            </GlowCard>
            <GlowCard glowColor="violet">
              <div className="text-violet-400 font-semibold mb-2">⚡ Full-Stack</div>
              <p className="text-sm text-gray-300">Modern web development with Next.js, React, and TypeScript</p>
            </GlowCard>
          </div>
        </div>

        {/* Availability Card */}
        <div className="flex items-start">
          <GlowCard glowColor="cyan" className="w-full">
            <div className="text-center py-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Open to Opportunities</h3>
              <p className="text-gray-400 mb-4">Looking for roles in:</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• AI/ML Engineering</p>
                <p>• Cybersecurity (SOC/Analyst)</p>
                <p>• Full-Stack Development</p>
                <p>• Contract/Freelance Work</p>
              </div>
              <a
                href="mailto:HNAVEED264@gmail.com"
                className="mt-6 inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 rounded text-sm transition"
              >
                Let's Talk
              </a>
            </div>
          </GlowCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
