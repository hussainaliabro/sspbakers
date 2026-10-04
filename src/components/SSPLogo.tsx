import React from 'react';
import { STORE_LOGO_URL } from '../utils/whatsapp';

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
    xl: 'w-28 h-28'
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className={`${sizeMap[size]} shrink-0 drop-shadow-md rounded-full border border-[#D49A3D]/60 overflow-hidden bg-[#2B1408]`}>
        <img
          src={STORE_LOGO_URL}
          alt="SSP Bakers logo"
          className="w-full h-full object-cover"
          loading="lazy"
        />
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
