import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
  newTab?: boolean;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  className = '',
  newTab = true,
}) => {
  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : ''}
        aria-label={label}
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300',
          className
        )}
      >
        {icon}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300',
        className
      )}
    >
      {icon}
    </Link>
  );
};
