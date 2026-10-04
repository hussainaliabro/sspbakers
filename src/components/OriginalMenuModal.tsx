import React from 'react';
import { X, MessageCircle, Download, Printer } from 'lucide-react';
import { SSPLogo } from './SSPLogo';
import { MenuItem } from '../types';
import { generateItemWhatsAppUrl } from '../utils/whatsapp';

interface OriginalMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
  items: MenuItem[];
}

export const OriginalMenuModal: React.FC<OriginalMenuModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
  items
}) => {
  if (!isOpen) return null;

  const samosas = items.filter((i) => i.category === 'samosas');
  const rolls = items.filter((i) => i.category === 'rolls');
  const cookies = items.filter((i) => i.category === 'cookies');
  const cakes = items.filter((i) => i.category === 'cakes');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#20130B] border-2 border-[#D49A3D]/50 shadow-2xl text-[#E8D4BE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#180E08]/90 backdrop-blur-md border-b border-[#3D2516]">
          <div className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
            SSP Bakers Official Menu Board
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2E1A0F] text-[#FBE8B5] hover:bg-[#3E2415] text-xs font-semibold border border-[#D49A3D]/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Menu</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#2E1A0F] hover:bg-[#3E2415] text-[#FBE8B5] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Poster Canvas Recreation */}
        <div className="p-6 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#2B170C] via-[#201007] to-[#170B04]">
          {/* Decorative swirling curves (matching uploaded menu design) */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full stroke-[#E5A93C] fill-none" strokeWidth="2">
              <circle cx="400" cy="0" r="100" />
              <circle cx="400" cy="0" r="160" />
              <circle cx="400" cy="0" r="230" />
              <circle cx="400" cy="0" r="310" />
              <circle cx="400" cy="0" r="390" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-15 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full stroke-[#E5A93C] fill-none" strokeWidth="2">
              <circle cx="400" cy="400" r="120" />
              <circle cx="400" cy="400" r="190" />
              <circle cx="400" cy="400" r="260" />
              <circle cx="400" cy="400" r="340" />
            </svg>
          </div>

          {/* Header of Poster */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#4A2C18] relative z-10">
            <div className="flex items-center gap-4">
              <SSPLogo size="lg" showSubtitle={false} />
              <div>
                <h4 className="text-sm font-semibold tracking-widest uppercase text-[#D49A3D]">SSP Bakers</h4>
                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF8EB] tracking-wide">
                  BAKERY MENU
                </h1>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs uppercase tracking-widest text-[#D49A3D] font-bold block">
                Lucky One Outlet #45
              </span>
              <span className="text-[11px] text-[#A68A72]">
                Karachi, Pakistan • WhatsApp: +92 310 7796560
              </span>
            </div>
          </div>

          {/* Two-Column Menu Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8 relative z-10">
            
            {/* Left Column: Samosas & Cookies */}
            <div className="space-y-10">
              
              {/* Samosas Section */}
              <div>
                <div className="flex items-baseline justify-between border-b border-[#4A2C18] pb-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#E5A93C]">
                    Samosas
                  </h3>
                  <span className="text-xs text-[#C4A076] font-medium tracking-wide">
                    6 per plate
                  </span>
                </div>

                <div className="space-y-3.5">
                  {samosas.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-[#FFF8EB] transition-colors"
                    >
                      <div className="font-medium text-[#F3E5D5] group-hover:text-[#E5A93C] transition-colors flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.serving === 'serves for 1' && (
                          <span className="text-[10px] text-[#A68A72] font-normal">(serves for 1)</span>
                        )}
                      </div>
                      <div className="flex-1 mx-3 border-b border-dotted border-[#6C4222] group-hover:border-[#E5A93C] transition-colors" />
                      <div className="font-serif font-bold text-[#E5A93C] shrink-0">
                        Rs. {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cookies and Biscuits Section */}
              <div>
                <div className="flex items-baseline justify-between border-b border-[#4A2C18] pb-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#E5A93C]">
                    Cookies and Biscuits
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cookies.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-[#FFF8EB] transition-colors"
                    >
                      <div className="font-medium text-[#F3E5D5] group-hover:text-[#E5A93C] transition-colors">
                        {item.name}
                      </div>
                      <div className="flex-1 mx-3 border-b border-dotted border-[#6C4222] group-hover:border-[#E5A93C] transition-colors" />
                      <div className="font-serif font-bold text-[#E5A93C] shrink-0">
                        Rs. {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Rolls & Cakes */}
            <div className="space-y-10">
              
              {/* Rolls Section */}
              <div>
                <div className="flex items-baseline justify-between border-b border-[#4A2C18] pb-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#E5A93C]">
                    Rolls
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {rolls.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-[#FFF8EB] transition-colors"
                    >
                      <div className="font-medium text-[#F3E5D5] group-hover:text-[#E5A93C] transition-colors">
                        {item.name}
                      </div>
                      <div className="flex-1 mx-3 border-b border-dotted border-[#6C4222] group-hover:border-[#E5A93C] transition-colors" />
                      <div className="font-serif font-bold text-[#E5A93C] shrink-0">
                        Rs. {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cakes Section */}
              <div>
                <div className="flex items-baseline justify-between border-b border-[#4A2C18] pb-2 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#E5A93C]">
                    Cakes
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cakes.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-[#FFF8EB] transition-colors"
                    >
                      <div className="font-medium text-[#F3E5D5] group-hover:text-[#E5A93C] transition-colors">
                        {item.name}
                      </div>
                      <div className="flex-1 mx-3 border-b border-dotted border-[#6C4222] group-hover:border-[#E5A93C] transition-colors" />
                      <div className="font-serif font-bold text-[#E5A93C] shrink-0">
                        Rs. {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer note on poster */}
          <div className="mt-12 pt-6 border-t border-[#4A2C18] text-center text-xs text-[#A68A72]">
            <p className="font-serif text-sm text-[#F3E5D5]">Lucky One Outlet #45</p>
            <p className="mt-1">Click on any item above to view details or place an instant WhatsApp order.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
