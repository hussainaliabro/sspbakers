import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE_DIGITS } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(
    'Hello SSP Bakers! I would like to inquire about fresh items at Lucky One Outlet #45.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Small popover notice */}
      {showTooltip && (
        <div className="relative bg-[#201107] text-[#FFFDF9] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#D49A3D]/40 flex items-center gap-2 max-w-xs animate-in slide-in-from-bottom duration-300">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
          <div>
            <div className="font-bold text-[#E5A93C]">Chat with SSP Bakers</div>
            <div className="text-[10px] text-[#D8C2AC]">Online • Instant WhatsApp Reply</div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#A68A72] hover:text-white p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp with SSP Bakers"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1EBE5D] border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
