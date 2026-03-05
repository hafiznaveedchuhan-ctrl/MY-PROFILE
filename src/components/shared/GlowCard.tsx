import React from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'amber';
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
}) => {
  const glowStyles = {
    cyan: 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    violet: 'border-violet-500/30 hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    amber: 'border-amber-500/30 hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(255,156,26,0.3)]',
  };

  return (
    <div className={cn('glass transition-all duration-300', glowStyles[glowColor], className)}>
      {children}
    </div>
  );
};
