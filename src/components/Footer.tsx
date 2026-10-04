import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Heart, 
  Code2, 
  ArrowUp, 
  Instagram, 
  Facebook, 
  Share2
} from 'lucide-react';
import { SSPLogo } from './SSPLogo';
import { DEVELOPER_NAME, DISPLAY_PHONE, STORE_EMAIL, STORE_LOCATION, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0E06] text-[#F3E7D3] border-t-2 border-[#D49A3D]/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2213]">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <SSPLogo size="lg" className="[&_span]:text-white [&_span.text-\[11px\]]:text-[#D6B595]" />
            <p className="text-xs sm:text-sm text-[#C4A076] leading-relaxed pt-2">
              SSP Bakers has been baking Karachi's cherished celebration cakes, crunchy samosas, savory paratha rolls, and authentic tea rusks since 1952. Made with pure butter and timeless passion at Lucky One Outlet #45.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/923107796560`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#2D160B] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border border-[#4D2713]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#2D160B] hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors border border-[#4D2713]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#2D160B] hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-[#4D2713]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#2D160B] hover:bg-black text-white flex items-center justify-center transition-colors border border-[#4D2713]"
                aria-label="TikTok"
              >
                <span className="font-bold text-xs">TT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5A93C] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#C4A076]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Bakery Menu</a>
              </li>
              <li>
                <a href="#custom-cakes" className="hover:text-white transition-colors">Custom Cake Designer</a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-white transition-colors">Since 1952 Heritage</a>
              </li>
              <li>
                <a href="#outlet" className="hover:text-white transition-colors">Lucky One Outlet #45</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5A93C] uppercase tracking-wider">
              Popular Delights
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#C4A076]">
              <li className="flex justify-between">
                <span>Chicken Samosa (6/plate)</span>
                <span className="text-[#E5A93C] font-bold">Rs. 40</span>
              </li>
              <li className="flex justify-between">
                <span>Zinger Cheese Roll</span>
                <span className="text-[#E5A93C] font-bold">Rs. 200</span>
              </li>
              <li className="flex justify-between">
                <span>Chocolate Fudge Cake</span>
                <span className="text-[#E5A93C] font-bold">Rs. 850</span>
              </li>
              <li className="flex justify-between">
                <span>Red Velvet Cream Cheese</span>
                <span className="text-[#E5A93C] font-bold">Rs. 1100</span>
              </li>
              <li className="flex justify-between">
                <span>Authentic Cake Rusk</span>
                <span className="text-[#E5A93C] font-bold">Rs. 20</span>
              </li>
              <li className="flex justify-between">
                <span>KitKat Celebration Cake</span>
                <span className="text-[#E5A93C] font-bold">Rs. 1200</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E5A93C] uppercase tracking-wider">
              Store Information
            </h4>
            <div className="space-y-2.5 text-xs text-[#C4A076]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Shop #45, Food Court, Lucky One Mall, Main Rashid Minhas Rd, Karachi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>9:00 AM – Midnight (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE_RAW}`} className="hover:text-white font-semibold">
                  {DISPLAY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a href={`mailto:${STORE_EMAIL}`} className="hover:text-white break-all">
                  {STORE_EMAIL}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Developer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E7B5C]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">SSP Bakers</strong>. Freshly Baked Goods Since 1952. All Rights Reserved.
          </div>

          {/* Developer Credit Requirement */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B1408] border border-[#D49A3D]/30 text-white font-semibold">
            <Code2 className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Designed & Developed by <strong className="text-[#E5A93C]">{DEVELOPER_NAME}</strong></span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white text-[11px] font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#E5A93C]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
