import React from 'react';
import { Award, Clock, Heart, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import { SSPLogo } from './SSPLogo';

export const HeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-16 sm:py-24 bg-[#23120A] text-[#FFFDF9] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D49A3D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Emblem & Craftsmanship Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#351B0E] to-[#1F0E06] border-2 border-[#D49A3D]/40 shadow-2xl text-center max-w-sm w-full">
              
              <div className="flex justify-center mb-6">
                <SSPLogo size="xl" showSubtitle={false} />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#E5A93C]">
                  Heritage Trademark
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#FFF8EB]">
                  SSP BAKERS
                </h3>
                <p className="text-xs text-[#C4A076] font-medium">
                  "Freshly Baked Goods • Best In Town"
                </p>
                <div className="pt-3 border-t border-[#4A2612] text-xs text-[#E3D1BE] italic">
                  Crafting authentic Karachi tea-time classics, samosas, and celebration cakes since 1952.
                </div>
              </div>

              {/* Gold Ribbon Seal */}
              <div className="mt-6 py-2 px-4 rounded-xl bg-[#281308] border border-[#D49A3D]/40 text-[#F5D89F] text-xs font-bold flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-[#E5A93C]" />
                <span>Over 7 Decades of Trust</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A2814] text-[#E5A93C] text-xs font-bold uppercase tracking-wider border border-[#D49A3D]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Legacy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFDF9] leading-tight">
              Baking Happiness with Pure Heart <br className="hidden sm:block" />
              <span className="text-[#E5A93C]">Since 1952</span>
            </h2>

            <p className="text-sm sm:text-base text-[#DBC5B0] leading-relaxed">
              For more than seventy years, <strong className="text-white font-semibold">SSP Bakers</strong> has been an essential chapter of family milestones in Pakistan. What began as a neighborhood passion for traditional golden crusts and authentic spices has blossomed into a beloved institution.
            </p>

            <p className="text-sm sm:text-base text-[#DBC5B0] leading-relaxed">
              At our flagship <strong className="text-[#E5A93C] font-semibold">Lucky One Outlet #45</strong>, our ovens start crackling long before dawn. Every flaky samosa sheet is rolled by hand, every chocolate ganache is slowly tempered, and every cake rusk is double-baked to that signature nostalgic crunch.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#2D160B] border border-[#4D2713] text-left">
                <div className="w-9 h-9 rounded-xl bg-[#4A2612] text-[#E5A93C] flex items-center justify-center mb-2.5">
                  <Flame className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Piping Hot & Dawn Fresh</h4>
                <p className="text-xs text-[#C4A076] leading-relaxed">
                  Baking batches fresh throughout the day so you enjoy maximum crispiness and aroma.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#2D160B] border border-[#4D2713] text-left">
                <div className="w-9 h-9 rounded-xl bg-[#4A2612] text-[#E5A93C] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">100% Halal & Pure Dairy</h4>
                <p className="text-xs text-[#C4A076] leading-relaxed">
                  Real butter, farm-fresh eggs, pure cocoa, and premium meats with zero compromises.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
