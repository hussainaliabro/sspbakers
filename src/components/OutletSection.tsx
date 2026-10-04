import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { DISPLAY_PHONE, STORE_EMAIL, STORE_LOCATION, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const OutletSection: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=Lucky+One+Mall+Karachi';

  return (
    <section id="outlet" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E1] text-[#8C4E1A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#EADBCC]">
            <MapPin className="w-3.5 h-3.5 text-[#B36826]" />
            <span>Store Location & Pickups</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1408]">
            Visit Our Lucky One Outlet #45
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6C5340]">
            Drop by for freshly fried samosas, hot cheese rolls, and display cakes, or place a WhatsApp pickup order ready in 15 minutes!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Outlet Info Card */}
          <div className="lg:col-span-6 bg-[#FAF4EB] rounded-3xl border border-[#EADBCC] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              
              <div className="border-b border-[#E0D0BE] pb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#8C4E1A]">
                  Primary Retail Counter
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B1408] mt-1">
                  Lucky One Mall Outlet #45
                </h3>
                <p className="text-xs text-[#7C5535] mt-1">
                  Food Court & Bakery Pavilion, Main Rashid Minhas Road, Karachi, Pakistan
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-4">
                
                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3E2415] text-[#E5A93C] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B1408] uppercase tracking-wider">
                      Opening Hours
                    </h4>
                    <p className="text-sm font-semibold text-[#3D2516]">
                      9:00 AM – 12:00 Midnight
                    </p>
                    <span className="text-xs text-[#8C4E1A] font-medium">
                      Open 7 Days a week (including public holidays)
                    </span>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3E2415] text-[#E5A93C] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B1408] uppercase tracking-wider">
                      Phone & WhatsApp
                    </h4>
                    <a
                      href={`tel:${WHATSAPP_PHONE_RAW}`}
                      className="text-sm font-bold text-[#2B1408] hover:text-[#C85A32] transition-colors block"
                    >
                      {DISPLAY_PHONE}
                    </a>
                    <span className="text-xs text-[#7C5535]">
                      Direct line to store manager & order fulfillment desk
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3E2415] text-[#E5A93C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B1408] uppercase tracking-wider">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${STORE_EMAIL}`}
                      className="text-sm font-semibold text-[#2B1408] hover:text-[#C85A32] transition-colors block break-all"
                    >
                      {STORE_EMAIL}
                    </a>
                    <span className="text-xs text-[#7C5535]">
                      For corporate inquiries, events, and feedback
                    </span>
                  </div>
                </div>

              </div>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#4A3222]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Ample Mall Parking</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Rapid 10-Min Takeaway</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Chilled Display Cases</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Cash / Card / Raast</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#E0D0BE] mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#3E2415] hover:bg-[#251208] text-white font-bold text-xs shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#E5A93C]" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href={`https://wa.me/923107796560?text=${encodeURIComponent('Hello SSP Bakers! I am heading to Lucky One Outlet #45. Can I place an advance pickup order?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Pre-Order for Pickup</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6 bg-[#2B1408] rounded-3xl overflow-hidden border-2 border-[#D49A3D]/40 p-4 sm:p-6 flex flex-col justify-between shadow-xl text-white relative">
            {/* Visual Storefront Mockup / Mall Graphic */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner group">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="SSP Bakers Bakery Counter"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Map pin pin-point badge */}
              <div className="absolute top-4 left-4 bg-[#251208]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D49A3D]/50 text-xs font-bold text-[#F5D89F] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Karachi, Sindh • Lucky One Mall</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5A93C]">
                  Live Store Status: Open Now
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                  SSP Bakers Showcase Counter #45
                </h4>
                <p className="text-xs text-[#E3D1BE] mt-1">
                  Located near the main food atrium. Easy escalators from lower ground parking.
                </p>
              </div>
            </div>

            {/* Bottom Quick Callout */}
            <div className="mt-4 pt-4 border-t border-[#4A2612] flex items-center justify-between text-xs">
              <span className="text-[#C4A076]">WhatsApp Hotline: <strong className="text-white">+92 310 7796560</strong></span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A93C] hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
