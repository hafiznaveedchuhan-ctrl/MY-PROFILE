'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowCard } from '@/components/shared/GlowCard';
import { SocialLink } from '@/components/shared/SocialLink';
import { ContactForm } from '@/components/sections/ContactForm';
import { profile } from '@/data';

export const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Get In Touch"
        title="Contact Me"
        subtitle="Let's discuss opportunities and collaborate on exciting projects"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Info Panel */}
        <div className="flex flex-col gap-6">
          <GlowCard glowColor="cyan">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-cyan-400" size={20} />
                  <h4 className="font-semibold text-white">Email</h4>
                </div>
                <a href={`mailto:${profile.email}`} className="text-gray-300 hover:text-cyan-400 transition break-all">
                  {profile.email}
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="text-cyan-400" size={20} />
                  <h4 className="font-semibold text-white">Phone</h4>
                </div>
                <a href={`tel:${profile.phone}`} className="text-gray-300 hover:text-cyan-400 transition">
                  {profile.phone}
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-3">Connect</h4>
                <div className="flex gap-3">
                  <SocialLink href={profile.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialLink href={profile.github} icon={<Github size={20} />} label="GitHub" />
                </div>
              </div>

              {/* Availability Badge */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-300">Available for opportunities</span>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
