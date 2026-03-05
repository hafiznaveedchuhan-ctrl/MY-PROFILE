'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@/lib/animations';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};
