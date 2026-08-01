import React from 'react';

interface TechIllustrationProps {
  type: 'software' | 'app' | 'ai' | 'cloud' | 'blockchain' | 'design' | 'security' | 'globe';
  className?: string;
}

export const TechIllustration: React.FC<TechIllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/3 flex items-center justify-center p-6 rounded-2xl glass-card overflow-hidden group ${className}`}>
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#326080]/30 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#805232]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

      {type === 'software' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Code IDE Window */}
          <rect x="20" y="20" width="260" height="160" rx="12" fill="#0f1d2a" stroke="#326080" strokeWidth="2" />
          <circle cx="40" cy="36" r="4" fill="#805232" />
          <circle cx="52" cy="36" r="4" fill="#B5D2E6" />
          <circle cx="64" cy="36" r="4" fill="#326080" />
          <line x1="20" y1="50" x2="280" y2="50" stroke="#326080" strokeWidth="1" opacity="0.4" />
          
          {/* Animated Lines */}
          <path d="M40 70 H120" stroke="#B5D2E6" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 90 H180" stroke="#326080" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 110 H140" stroke="#805232" strokeWidth="3" strokeLinecap="round" />
          <path d="M55 130 H220" stroke="#B5D2E6" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 150 H100" stroke="#326080" strokeWidth="3" strokeLinecap="round" />

          {/* Microservice Nodes */}
          <rect x="190" y="70" width="70" height="40" rx="8" fill="#132536" stroke="#B5D2E6" strokeWidth="1.5" />
          <text x="225" y="94" textAnchor="middle" fill="#FFF1E7" fontSize="10" fontFamily="sans-serif">API GATEWAY</text>
        </svg>
      )}

      {type === 'app' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Mobile Phone Mockup */}
          <rect x="105" y="15" width="90" height="170" rx="16" fill="#0f1d2a" stroke="#B5D2E6" strokeWidth="2" />
          <rect x="135" y="22" width="30" height="4" rx="2" fill="#326080" />
          {/* App Card Mockup */}
          <rect x="115" y="35" width="70" height="45" rx="8" fill="#132536" stroke="#805232" strokeWidth="1" />
          <circle cx="130" cy="50" r="8" fill="#805232" />
          <rect x="145" y="46" width="30" height="3" rx="1.5" fill="#B5D2E6" />
          <rect x="145" y="52" width="20" height="3" rx="1.5" fill="#FFF1E7" opacity="0.6" />
          {/* Action List */}
          <rect x="115" y="90" width="70" height="12" rx="4" fill="#326080" opacity="0.5" />
          <rect x="115" y="108" width="70" height="12" rx="4" fill="#326080" opacity="0.3" />
          <rect x="115" y="126" width="70" height="12" rx="4" fill="#805232" opacity="0.5" />
          {/* Floating UI Elements */}
          <circle cx="65" cy="80" r="24" fill="#132536" stroke="#326080" strokeWidth="1.5" />
          <path d="M55 80 L63 88 L75 72" stroke="#B5D2E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {type === 'ai' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Neural AI Core Nodes */}
          <circle cx="150" cy="100" r="28" fill="#326080" fillOpacity="0.3" stroke="#B5D2E6" strokeWidth="2" className="animate-pulse" />
          <circle cx="150" cy="100" r="14" fill="#805232" />
          
          {/* Outer Connections */}
          <circle cx="80" cy="50" r="12" fill="#132536" stroke="#B5D2E6" strokeWidth="1.5" />
          <circle cx="220" cy="50" r="12" fill="#132536" stroke="#326080" strokeWidth="1.5" />
          <circle cx="70" cy="140" r="12" fill="#132536" stroke="#805232" strokeWidth="1.5" />
          <circle cx="230" cy="140" r="12" fill="#132536" stroke="#B5D2E6" strokeWidth="1.5" />
          
          {/* Connection Lines */}
          <line x1="80" y1="50" x2="150" y2="100" stroke="#B5D2E6" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="220" y1="50" x2="150" y2="100" stroke="#326080" strokeWidth="1.5" />
          <line x1="70" y1="140" x2="150" y2="100" stroke="#805232" strokeWidth="1.5" />
          <line x1="230" y1="140" x2="150" y2="100" stroke="#B5D2E6" strokeWidth="1.5" strokeDasharray="4 4" />

          <text x="150" y="104" textAnchor="middle" fill="#FFF1E7" fontSize="11" fontWeight="bold">AI</text>
        </svg>
      )}

      {type === 'cloud' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Cloud Outline */}
          <path d="M90 130 C70 130 55 115 55 95 C55 78 68 64 85 62 C92 42 112 28 135 28 C162 28 184 48 188 74 C202 75 215 88 215 103 C215 118 202 130 185 130 Z" 
            fill="#132536" stroke="#326080" strokeWidth="2" />
          
          {/* Server Stacks Inside Cloud */}
          <rect x="100" y="60" width="70" height="16" rx="4" fill="#0f1d2a" stroke="#B5D2E6" strokeWidth="1" />
          <circle cx="112" cy="68" r="2" fill="#805232" />
          <circle cx="120" cy="68" r="2" fill="#B5D2E6" />
          
          <rect x="100" y="82" width="70" height="16" rx="4" fill="#0f1d2a" stroke="#805232" strokeWidth="1" />
          <circle cx="112" cy="90" r="2" fill="#B5D2E6" />
          <circle cx="120" cy="90" r="2" fill="#805232" />

          <rect x="100" y="104" width="70" height="16" rx="4" fill="#0f1d2a" stroke="#326080" strokeWidth="1" />
          <circle cx="112" cy="112" r="2" fill="#FFF1E7" />
          <circle cx="120" cy="112" r="2" fill="#B5D2E6" />
        </svg>
      )}

      {type === 'blockchain' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* 3 Block Chain */}
          <g transform="translate(40, 60)">
            <rect x="0" y="0" width="55" height="55" rx="10" fill="#132536" stroke="#326080" strokeWidth="2" />
            <path d="M15 20 L40 20 M15 30 L32 30" stroke="#B5D2E6" strokeWidth="2" strokeLinecap="round" />
          </g>
          <line x1="95" y1="87" x2="125" y2="87" stroke="#805232" strokeWidth="3" strokeDasharray="3 3" />

          <g transform="translate(125, 60)">
            <rect x="0" y="0" width="55" height="55" rx="10" fill="#132536" stroke="#805232" strokeWidth="2" />
            <path d="M15 20 L40 20 M15 30 L32 30" stroke="#FFF1E7" strokeWidth="2" strokeLinecap="round" />
          </g>
          <line x1="180" y1="87" x2="210" y2="87" stroke="#326080" strokeWidth="3" strokeDasharray="3 3" />

          <g transform="translate(210, 60)">
            <rect x="0" y="0" width="55" height="55" rx="10" fill="#132536" stroke="#B5D2E6" strokeWidth="2" />
            <path d="M15 20 L40 20 M15 30 L32 30" stroke="#326080" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      )}

      {type === 'design' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Canvas & Palette Grid */}
          <rect x="40" y="30" width="220" height="140" rx="12" fill="#0f1d2a" stroke="#B5D2E6" strokeWidth="1.5" />
          <circle cx="80" cy="70" r="22" fill="#805232" fillOpacity="0.4" stroke="#805232" strokeWidth="2" />
          <rect x="120" y="55" width="110" height="30" rx="6" fill="#132536" stroke="#326080" strokeWidth="1" />
          <rect x="120" y="95" width="110" height="50" rx="6" fill="#132536" stroke="#B5D2E6" strokeWidth="1" />
          
          {/* Color Swatches */}
          <circle cx="135" cy="120" r="8" fill="#326080" />
          <circle cx="155" cy="120" r="8" fill="#805232" />
          <circle cx="175" cy="120" r="8" fill="#B5D2E6" />
          <circle cx="195" cy="120" r="8" fill="#FFF1E7" />
        </svg>
      )}

      {type === 'security' && (
        <svg className="w-full h-full max-h-56 relative z-10" viewBox="0 0 300 200" fill="none">
          {/* Shield & Key */}
          <path d="M150 30 L210 55 V110 C210 150 150 180 150 180 C150 180 90 150 90 110 V55 L150 30 Z" 
            fill="#132536" stroke="#326080" strokeWidth="2.5" />
          <circle cx="150" cy="95" r="16" stroke="#805232" strokeWidth="2" fill="none" />
          <path d="M150 111 V135 M145 125 H155" stroke="#B5D2E6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};
