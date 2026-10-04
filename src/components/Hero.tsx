import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Cake, 
  Award, 
  ShieldCheck, 
  Clock, 
  MapPin,
  Star
} from 'lucide-react';
import { SSPLogo } from './SSPLogo';
import { createWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onExploreMenu: () => void;
  onCustomCake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onCustomCake }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#25130A] via-[#351B0D] to-[#25130A] text-[#FFFDF9] py-12 sm:py-14 lg:py-24">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#D49A3D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[32rem] h-[32rem] bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grain / Flour Ring Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5D89F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#4A2814]/80 border border-[#D49A3D]/40 text-[#F5D89F] shadow-inner text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#E5A93C] animate-pulse" />
              <span>Celebrating 70+ Years of Artisan Heritage • Since 1952</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFDF9] leading-[1.15]">
              Freshly Baked Goods,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBE8B5] via-[#E5A93C] to-[#DF9336]">
                The Best In Town.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#E3D1BE] max-w-2xl font-light leading-relaxed">
              Welcome to <span className="font-bold text-white">SSP Bakers</span> at <span className="text-[#F5D89F] font-medium">Lucky One Outlet #45</span>. 
              Savor piping-hot crunchy samosas, savory paratha rolls, buttery tea-time biscuits, and handcrafted celebration cakes baked with pure dairy butter and heirloom recipes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D49A3D] to-[#BA7925] hover:from-[#E5A93C] hover:to-[#C8852B] text-[#241208] font-bold text-sm sm:text-base shadow-lg shadow-[#D49A3D]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCustomCake}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#4A2814] hover:bg-[#5C3219] text-[#FBE8B5] border border-[#D49A3D]/50 font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Cake className="w-4 h-4 text-[#E5A93C]" />
                <span>Custom Cake Designer</span>
              </button>

              <a
                href={createWhatsAppLink('Hello SSP Bakers! I would like to place an order from Lucky One Outlet #45.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quick WhatsApp Order</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#4A2814] w-full">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#4A2814] flex items-center justify-center text-[#E5A93C] shrink-0 border border-[#D49A3D]/30">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Since 1952</div>
                  <div className="text-[11px] text-[#C4A076]">Generations of trust</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#4A2814] flex items-center justify-center text-[#E5A93C] shrink-0 border border-[#D49A3D]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Outlet #45</div>
                  <div className="text-[11px] text-[#C4A076]">Lucky One Mall</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#4A2814] flex items-center justify-center text-[#E5A93C] shrink-0 border border-[#D49A3D]/30">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">9 AM - 12 AM</div>
                  <div className="text-[11px] text-[#C4A076]">Open 7 Days a week</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#4A2814] flex items-center justify-center text-[#E5A93C] shrink-0 border border-[#D49A3D]/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Halal</div>
                  <div className="text-[11px] text-[#C4A076]">Fresh Pure Ingredients</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Centerpiece Hero Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#3D2213] to-[#25130A] border-2 border-[#D49A3D]/40 p-4 shadow-2xl">
                
                {/* Main Hero Cake Image */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
                    alt="SSP Bakers Chocolate Fudge Cake"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-[#2B1408]/90 backdrop-blur-md border border-[#D49A3D]/60 text-[#F5D89F] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#E5A93C] text-[#E5A93C]" />
                    <span>Signature Belgian Chocolate • Rs. 850</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-[#F4DE9C]">SSP Bakers Handcrafted Specialty</p>
                    <h3 className="font-serif text-lg font-bold text-white">Rich Chocolate Fudge Cake</h3>
                  </div>
                </div>

                {/* Sub-grid of 3 popular treats */}
                <div className="grid grid-cols-3 gap-2.5 mt-3">
                  {/* Item 1 */}
                  <div className="relative rounded-xl overflow-hidden bg-[#2D170C] border border-[#593218] p-1.5 flex flex-col group">
                    <div className="h-16 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80"
                        alt="Chicken Samosa"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="mt-1 px-1">
                      <div className="text-[11px] font-bold text-white truncate">Chicken Samosa</div>
                      <div className="text-[10px] text-[#E5A93C] font-extrabold">Rs. 40 <span className="text-[9px] text-[#A6886A] font-normal">(6/plate)</span></div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative rounded-xl overflow-hidden bg-[#2D170C] border border-[#593218] p-1.5 flex flex-col group">
                    <div className="h-16 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=300&q=80"
                        alt="Red Velvet Cake"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="mt-1 px-1">
                      <div className="text-[11px] font-bold text-white truncate">Red Velvet</div>
                      <div className="text-[10px] text-[#E5A93C] font-extrabold">Rs. 1100</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative rounded-xl overflow-hidden bg-[#2D170C] border border-[#593218] p-1.5 flex flex-col group">
                    <div className="h-16 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=300&q=80"
                        alt="Zinger Roll"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="mt-1 px-1">
                      <div className="text-[11px] font-bold text-white truncate">Zinger Roll</div>
                      <div className="text-[10px] text-[#E5A93C] font-extrabold">Rs. 150</div>
                    </div>
                  </div>
                </div>

                {/* Floating Medallion Stamp */}
                <div className="absolute -bottom-6 -right-6 hidden sm:block p-2 rounded-full bg-[#1F0F08] border-2 border-[#D49A3D] shadow-2xl">
                  <SSPLogo size="sm" showSubtitle={false} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
