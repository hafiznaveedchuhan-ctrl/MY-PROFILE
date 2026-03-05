'use client';

import React from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { EducationCard } from '@/components/shared/EducationCard';
import { education } from '@/data';

export const EducationSection: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <SectionHeading label="Learning" title="Education" subtitle="Academic and professional development journey" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </SectionWrapper>
  );
};
