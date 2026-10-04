import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADBCC] text-[#8C4E1A] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#C85A32] text-[#C85A32]" />
            <span>Customer Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1408]">
            Loved Across Generations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6C5340]">
            Hear what our wonderful patrons say about our warm bakery aromas, signature cakes, and crisp evening samosas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#EADBCC] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A93C] text-[#E5A93C]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#DAC5AC] stroke-1" />
                </div>

                <p className="text-sm text-[#4A3222] leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Item */}
              <div className="mt-6 pt-4 border-t border-[#F0E4D5] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D49A3D]"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-[#2B1408] flex items-center gap-1">
                    <span className="truncate">{t.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-[#25D366] shrink-0" />
                  </div>
                  <div className="text-[11px] text-[#7C5535] truncate">{t.location}</div>
                  <div className="text-[10px] text-[#8C4E1A] font-medium mt-0.5">
                    Ordered: {t.favoriteItem}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary callout */}
        <div className="mt-12 text-center text-xs font-semibold text-[#8C4E1A] bg-[#FFFDF9] py-3.5 px-6 rounded-2xl border border-[#EADBCC] max-w-md mx-auto shadow-sm">
          ★ Rated 4.9/5 by 12,000+ Happy Karachi Customers • Lucky One Outlet #45
        </div>

      </div>
    </section>
  );
};
