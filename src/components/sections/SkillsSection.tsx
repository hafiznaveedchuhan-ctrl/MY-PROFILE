'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SkillBadge } from '@/components/shared/SkillBadge';
import { skills } from '@/data';
import { SKILL_CATEGORIES } from '@/lib/constants';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Agentic AI');

  const filteredSkills = skills.filter((s) => s.category === activeTab);

  return (
    <SectionWrapper id="skills">
      <SectionHeading label="Expertise" title="Skills & Tools" subtitle="Technologies I work with daily" />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-white/5 border border-white/10 p-1 mb-8">
          {SKILL_CATEGORIES.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-cyan-400/60"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {SKILL_CATEGORIES.map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <SkillBadge key={skill.id} name={skill.name} level={skill.level} year={skill.year} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
};
