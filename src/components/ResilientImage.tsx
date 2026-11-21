import React, { useState } from 'react';
import { SeaLogoMark } from './icons/SeaIcons';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'SEA — Social Engineering Association',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#11151B] via-[#161E27] to-[#0B0D10] p-8 text-center ${className}`}
      >
        <SeaLogoMark className="w-12 h-12 text-slate-300 mb-3" />
        <span className="text-xs font-mono tracking-wider text-slate-400">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
