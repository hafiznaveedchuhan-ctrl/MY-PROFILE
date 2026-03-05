'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';
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
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-400/30 rounded-lg">
            <p className="text-amber-300 text-sm mb-3">
              📋 <strong>Prefer a structured form?</strong> Fill out my Google Form for detailed inquiries:
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_e6bVuU6Qo3Y3eO_hSHQrHzmOyMhdcMMmr6nlyo1uF8qpFw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-400/60 text-amber-300 hover:bg-amber-500/30 rounded transition-all duration-300"
            >
              Open Google Form →
            </a>
          </div>
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
                  <SocialLink
                    href="https://wa.me/923002385209?text=Hi%20Hafiz%2C%20I'm%20interested%20in%20your%20work"
                    icon={<MessageCircle size={20} />}
                    label="WhatsApp"
                  />
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
