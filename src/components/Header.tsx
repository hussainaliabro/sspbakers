import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  Cake, 
  UtensilsCrossed, 
  FileText
} from 'lucide-react';
import { SSPLogo } from './SSPLogo';
import { createWhatsAppLink, DISPLAY_PHONE, STORE_LOCATION, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOriginalMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenOriginalMenu
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu', icon: UtensilsCrossed },
    { label: 'Custom Cakes', href: '#custom-cakes', icon: Cake },
    { label: 'Our Story', href: '#heritage' },
    { label: 'Location', href: '#outlet', icon: MapPin },
    { label: 'Testimonials', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#24130A] text-[#F3E7D3] text-xs py-2 px-4 border-b border-[#3D2516]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>{STORE_LOCATION}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Open Daily: 9:00 AM – 12:00 Midnight</span>
            </span>
            <a 
              href={`tel:${WHATSAPP_PHONE_RAW}`}
              className="flex items-center gap-1.5 hover:text-[#E5A93C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="font-semibold">{DISPLAY_PHONE}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOriginalMenu}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E5A93C] hover:text-[#F3E7D3] transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>View Official Menu Card</span>
            </button>
            <span className="text-[#593922]">|</span>
            <span className="text-[11px] text-[#C4A076] font-medium">
              100% Halal & Fresh Daily
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E8DACB]' 
            : 'bg-[#FFFDF9] py-4 border-b border-[#F0E4D5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none">
            <SSPLogo size="md" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#3D2516] hover:text-[#C85A32] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C85A32] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* View Original Menu Button (Desktop) */}
            <button
              onClick={onOpenOriginalMenu}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#3D2516] bg-[#F7EFE2] hover:bg-[#EEDEC7] rounded-lg border border-[#DAC5AC] transition-all"
              title="View SSP Bakers Menu Board"
            >
              <FileText className="w-4 h-4 text-[#8C4E1A]" />
              <span>Menu Board</span>
            </button>

            {/* Cart / Order Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold bg-[#3E2415] hover:bg-[#28150B] text-white rounded-lg transition-all shadow-sm active:scale-95"
              aria-label="View Order Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#E5A93C]" />
              <span className="hidden sm:inline">Order Bag</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-extrabold text-[#24130A] bg-[#E5A93C] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Direct Order CTA */}
            <a
              href={createWhatsAppLink('Hello SSP Bakers! I would like to place an order from Lucky One Outlet #45.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg shadow-sm transition-all hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3D2516] hover:bg-[#F2E8DC] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDF9] border-t border-[#E8DACB] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#3D2516] hover:bg-[#F7EFE2] transition-colors"
                >
                  <span>{link.label}</span>
                  {link.icon && <link.icon className="w-4 h-4 text-[#8C4E1A]" />}
                </a>
              ))}
              
              <div className="pt-3 border-t border-[#E8DACB] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOriginalMenu();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#3D2516] bg-[#F7EFE2] rounded-lg border border-[#DAC5AC]"
                >
                  <FileText className="w-4 h-4 text-[#8C4E1A]" />
                  <span>View Original Menu Poster</span>
                </button>

                <a
                  href={createWhatsAppLink('Hello SSP Bakers! I would like to place an order from Lucky One Outlet #45.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold bg-[#25D366] text-white rounded-lg shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+92 310 7796560)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
