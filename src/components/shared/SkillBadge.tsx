import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  year?: string;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, year, className }) => {
  const levelColors = {
    Beginner: 'bg-blue-500/20 text-blue-300',
    Intermediate: 'bg-purple-500/20 text-purple-300',
    Advanced: 'bg-violet-500/20 text-violet-300',
    Expert: 'bg-cyan-500/20 text-cyan-300',
  };

  const dotColors = {
    Beginner: 'bg-blue-400',
    Intermediate: 'bg-purple-400',
    Advanced: 'bg-violet-400',
    Expert: 'bg-cyan-400',
  };

  return (
    <div className={cn('glass px-4 py-2 rounded-full text-sm flex items-center gap-2 flex-wrap', levelColors[level], className)}>
      <span className="font-medium">{name}</span>
      {year && <span className="text-xs opacity-75">({year})</span>}
      <div className={cn('w-2 h-2 rounded-full', dotColors[level])} />
    </div>
  );
};
