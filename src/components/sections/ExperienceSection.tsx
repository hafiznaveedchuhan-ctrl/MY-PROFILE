'use client';

import React from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ExperienceCard } from '@/components/shared/ExperienceCard';
import { experience } from '@/data';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading label="Career" title="Experience" subtitle="Roles and contributions across different domains" />

      <div className="relative pl-0 md:pl-8">
        {/* Timeline line */}
        <div className="hidden md:absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />

        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};
