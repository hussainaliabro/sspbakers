import React from 'react';

interface SSPLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const SSPLogo: React.FC<SSPLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Medallion Badge SVG */}
      <div className={`relative ${sizeMap[size]} shrink-0 drop-shadow-md`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich golden-amber gradient */}
            <radialGradient id="badgeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DFAD5D" />
              <stop offset="65%" stopColor="#BC7D32" />
              <stop offset="90%" stopColor="#8C4E1A" />
              <stop offset="100%" stopColor="#4A260B" />
            </radialGradient>

            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DF94" />
              <stop offset="35%" stopColor="#D49A3D" />
              <stop offset="70%" stopColor="#8C4E1A" />
              <stop offset="100%" stopColor="#FBE9B6" />
            </linearGradient>

            {/* Path for upper text: SSP BAKERS */}
            <path
              id="topTextArc"
              d="M 28 100 A 72 72 0 0 1 172 100"
              fill="transparent"
            />
            {/* Path for bottom text: FRESHLY BAKED GOODS */}
            <path
              id="bottomTextArc"
              d="M 172 100 A 72 72 0 0 1 28 100"
              fill="transparent"
            />
          </defs>

          {/* Outer circle with rich bronze texture */}
          <circle cx="100" cy="100" r="96" fill="url(#goldRim)" stroke="#2B1408" strokeWidth="3" />
          <circle cx="100" cy="100" r="92" fill="url(#badgeGrad)" stroke="#522B0F" strokeWidth="1.5" />

          {/* Inner ring */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#2B1408" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="100" cy="100" r="54" fill="#E8B96D" stroke="#3D1E0B" strokeWidth="2.5" />

          {/* Left Wheat Stalk */}
          <g stroke="#3D1E0B" strokeWidth="1.2" fill="#FDF3CE" opacity="0.9">
            <path d="M 32 90 Q 30 105 34 120" fill="none" />
            <ellipse cx="30" cy="94" rx="4" ry="2" transform="rotate(-30 30 94)" />
            <ellipse cx="36" cy="99" rx="4" ry="2" transform="rotate(30 36 99)" />
            <ellipse cx="31" cy="106" rx="4" ry="2" transform="rotate(-35 31 106)" />
            <ellipse cx="36" cy="112" rx="4" ry="2" transform="rotate(35 36 112)" />
          </g>

          {/* Right Wheat Stalk */}
          <g stroke="#3D1E0B" strokeWidth="1.2" fill="#FDF3CE" opacity="0.9">
            <path d="M 168 90 Q 170 105 166 120" fill="none" />
            <ellipse cx="170" cy="94" rx="4" ry="2" transform="rotate(30 170 94)" />
            <ellipse cx="164" cy="99" rx="4" ry="2" transform="rotate(-30 164 99)" />
            <ellipse cx="169" cy="106" rx="4" ry="2" transform="rotate(35 169 106)" />
            <ellipse cx="164" cy="112" rx="4" ry="2" transform="rotate(-35 164 112)" />
          </g>

          {/* Baker Figure Illustration (vintage engraved style) */}
          <g transform="translate(100, 100) scale(0.68) translate(-100, -100)">
            {/* Baker Head & Neck */}
            <path
              d="M 85 92 Q 100 128 115 92 Z"
              fill="#F9D4A7"
              stroke="#2B1408"
              strokeWidth="2.5"
            />
            {/* White Collar & Shirt */}
            <path
              d="M 75 125 L 88 112 L 100 122 L 112 112 L 125 125 L 138 150 L 62 150 Z"
              fill="#FFFFFF"
              stroke="#2B1408"
              strokeWidth="2.5"
            />
            {/* Classic Bowtie */}
            <path
              d="M 92 115 L 85 110 L 85 122 Z M 108 115 L 115 110 L 115 122 Z"
              fill="#2B1408"
            />
            <circle cx="100" cy="116" r="3" fill="#2B1408" />

            {/* Apron Straps */}
            <line x1="72" y1="125" x2="80" y2="150" stroke="#8C4E1A" strokeWidth="4" />
            <line x1="128" y1="125" x2="120" y2="150" stroke="#8C4E1A" strokeWidth="4" />

            {/* Baker Face outline */}
            <ellipse cx="100" cy="88" rx="20" ry="24" fill="#F8CEA0" stroke="#2B1408" strokeWidth="2.5" />
            
            {/* Cheerful baker eyes */}
            <ellipse cx="94" cy="85" rx="2.5" ry="2" fill="#2B1408" />
            <ellipse cx="106" cy="85" rx="2.5" ry="2" fill="#2B1408" />
            <path d="M 91 80 Q 94 77 98 80" stroke="#2B1408" strokeWidth="1.8" fill="none" />
            <path d="M 102 80 Q 106 77 109 80" stroke="#2B1408" strokeWidth="1.8" fill="none" />

            {/* Nose & Friendly Warm Smile */}
            <path d="M 100 85 Q 102 91 99 93" stroke="#2B1408" strokeWidth="1.8" fill="none" />
            <path d="M 92 97 Q 100 106 108 97" stroke="#2B1408" strokeWidth="2.5" fill="#FFFFFF" />

            {/* Baker styled wavy hair */}
            <path
              d="M 78 85 Q 75 62 94 60 Q 108 58 118 64 Q 124 72 122 84 Q 115 76 108 76 Q 96 74 88 82 Z"
              fill="#522409"
              stroke="#2B1408"
              strokeWidth="2"
            />
            {/* Hair highlight */}
            <path
              d="M 88 64 Q 100 62 108 67"
              stroke="#99501B"
              strokeWidth="2.5"
              fill="none"
            />
          </g>

          {/* Circular Text: "SSP BAKERS" */}
          <text
            fill="#FDF8EB"
            stroke="#2B1408"
            strokeWidth="1.2"
            fontSize="18.5"
            fontWeight="900"
            fontFamily="'Cinzel', serif"
            letterSpacing="3"
          >
            <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
              SSP BAKERS
            </textPath>
          </text>

          {/* "SINCE 1952" mini banner */}
          <g transform="translate(100, 48)">
            <rect x="-35" y="-7" width="70" height="13" rx="2" fill="#2B1408" stroke="#DFAD5D" strokeWidth="0.8" />
            <text
              x="0"
              y="2.5"
              fill="#F4DE9C"
              fontSize="7"
              fontWeight="bold"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              letterSpacing="2"
              textAnchor="middle"
            >
              SINCE 1952
            </text>
          </g>

          {/* Circular Text: "FRESHLY BAKED GOODS" */}
          <text
            fill="#FDF8EB"
            stroke="#2B1408"
            strokeWidth="0.8"
            fontSize="11.5"
            fontWeight="800"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="1.8"
          >
            <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
              FRESHLY BAKED GOODS
            </textPath>
          </text>

          {/* "BEST IN TOWN" ribbon */}
          <g transform="translate(100, 185)">
            <text
              x="0"
              y="0"
              fill="#FCE9B2"
              stroke="#2B1408"
              strokeWidth="0.6"
              fontSize="8.5"
              fontWeight="900"
              fontFamily="'Cinzel', serif"
              letterSpacing="2"
              textAnchor="middle"
            >
              ★ BEST IN TOWN ★
            </text>
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showSubtitle && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-brand text-xl sm:text-2xl font-extrabold tracking-wider text-[#2B1408]">
              SSP BAKERS
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D49A3D]/20 text-[#8C4E1A] px-1.5 py-0.5 rounded border border-[#D49A3D]/40">
              1952
            </span>
          </div>
          <span className="text-[11px] font-medium tracking-wide text-[#7C5535]">
            Freshly Baked Goods • Lucky One Mall #45
          </span>
        </div>
      )}
    </div>
  );
};
