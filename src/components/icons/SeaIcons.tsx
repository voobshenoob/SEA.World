import React from 'react';

interface IconProps {
  className?: string;
}

export const SeaLogoMark: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="1.5" y="1.5" width="37" height="37" rx="8" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
    <path
      d="M8 16.5C11.5 13 16.5 13 20 16.5C23.5 20 28.5 20 32 16.5"
      stroke="#2DD4BF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 22.5C11.5 19 16.5 19 20 22.5C23.5 26 28.5 26 32 22.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8 28.5C11.5 25 16.5 25 20 28.5C23.5 32 28.5 32 32 28.5"
      stroke="currentColor"
      strokeOpacity="0.45"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="10" r="1.75" fill="#2DD4BF" />
  </svg>
);

export const DirectionIcon: React.FC<{ id: string; className?: string }> = ({
  id,
  className = 'w-6 h-6',
}) => {
  switch (id) {
    case 'social-engineering':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#2DD4BF" strokeWidth="1.5" />
          <path d="M10 6.5H17.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 10V17.5H14" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'opportunity-economy':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 15.5L15.5 8.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 8.5H15.5V14" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'human-development':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="7" r="3" stroke="#2DD4BF" strokeWidth="1.5" />
          <path d="M5.5 19.5C5.5 15.9 8.4 13 12 13C15.6 13 18.5 15.9 18.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 13V19.5" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'collective-projects':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="17" r="2.5" stroke="#2DD4BF" strokeWidth="1.5" />
          <path d="M9.3 8.2L14.7 8.2M8.3 9.2L10.8 14.8M15.7 9.2L13.2 14.8" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'technology-web3':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="6" y="10" width="4" height="9" stroke="currentColor" strokeWidth="1.5" />
          <rect x="10" y="5" width="5" height="14" stroke="#2DD4BF" strokeWidth="1.5" />
          <rect x="15" y="12" width="3" height="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
};

export const SocialPlatformIcon: React.FC<{
  platform: 'telegram' | 'vk' | 'youtube' | 'instagram';
  className?: string;
}> = ({ platform, className = 'w-5 h-5' }) => {
  switch (platform) {
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M20.5 4.8L3.4 11.4C2.6 11.7 2.6 12.8 3.4 13.1L7.7 14.5L17.4 8.3C17.8 8 18.2 8.5 17.9 8.8L10.1 16L9.8 19.8C10.3 19.8 10.5 19.6 10.8 19.3L13.1 17.1L17.8 20.5C18.6 21 19.2 20.6 19.4 19.6L21.9 6.1C22.1 5.1 21.4 4.4 20.5 4.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'vk':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 9.5C7.2 13.2 9.1 15.5 12.4 15.5H12.8V13.4C14 13.5 15 14.4 15.5 15.5H17.5C16.9 13.9 15.7 12.8 14.9 12.4C15.7 11.9 16.6 10.8 17 9.5H15.2C14.7 10.7 13.8 11.8 12.8 11.9V9.5H11V13.6C9.9 13.3 9 11.8 8.9 9.5H7Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.2 9.5L15.4 12L10.2 14.5V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
        </svg>
      );
  }
};
