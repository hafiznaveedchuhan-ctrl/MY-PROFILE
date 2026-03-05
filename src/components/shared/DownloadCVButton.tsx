'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  cvPath: string;
  className?: string;
}

export const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ cvPath, className = '' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'hafiz-naveed-uddin-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`flex items-center gap-2 px-6 py-3 bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-200 rounded-lg transition-all duration-300 ${className}`}
    >
      <Download size={20} />
      <span>Download CV</span>
    </button>
  );
};
