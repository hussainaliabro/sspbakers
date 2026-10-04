import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, UtensilsCrossed, Sparkles, FileText, Check } from 'lucide-react';
import { CATEGORIES } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';
import { ProductCard } from './ProductCard';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onViewDetails: (item: MenuItem) => void;
  onOpenOriginalMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onAddToCart,
  onViewDetails,
  onOpenOriginalMenu
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // featured default: popular items first
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      });
  }, [items, activeCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E1] text-[#8C4E1A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#EADBCC]">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#B36826]" />
            <span>Lucky One Outlet #45</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1408]">
            Explore Our Fresh Bakery Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6C5340]">
            Every listing features guaranteed freshness, pure ingredients, clear prices, and 1-tap WhatsApp direct order.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategory)}
                className={`shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#3E2415] text-[#FBE8B5] shadow-md ring-2 ring-[#D49A3D]'
                    : 'bg-[#FAF4EB] text-[#523B2A] hover:bg-[#F3E7D5] border border-[#EADBCC]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive ? 'bg-[#E5A93C] text-[#2B1408]' : 'bg-[#EAD8C3] text-[#7C5535]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search, Sort and Menu Board bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#FAF4EB] p-3 sm:p-4 rounded-2xl border border-[#EADBCC]">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C4E1A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search samosas, rolls, cakes, cookies..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-[#DAC5AC] text-[#2B1408] focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C4E1A] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort & Menu Card Button */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#DAC5AC] text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C4E1A]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="bg-transparent text-xs font-semibold text-[#2B1408] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (5.0★)</option>
              </select>
            </div>

            <button
              onClick={onOpenOriginalMenu}
              className="px-3.5 py-2 rounded-xl bg-[#3E2415] hover:bg-[#251208] text-[#FBE8B5] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
              title="View SSP Bakers original menu board"
            >
              <FileText className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="hidden sm:inline">Menu Board</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onAddToCart={onAddToCart}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FAF4EB] rounded-3xl border border-[#EADBCC] p-8">
              <UtensilsCrossed className="w-12 h-12 text-[#C4A076] mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-[#2B1408]">No bakery treats found</h3>
              <p className="text-xs sm:text-sm text-[#7C5535] mt-1">
                We couldn't find any item matching "{searchQuery}". Try searching for samosas, red velvet, or rolls.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#3E2415] text-[#FBE8B5] text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Delivery / Bulk Order Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#3E2415] to-[#251208] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D49A3D]/30">
          <div>
            <div className="flex items-center gap-2 text-[#E5A93C] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Bulk Party & Event Catering</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FFF8EB]">
              Planning an office party, hi-tea, or family gathering?
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BE] mt-1">
              Pre-order platters of fresh hot samosas, assorted rolls, and celebration cakes at special rates.
            </p>
          </div>

          <a
            href={`https://wa.me/923107796560?text=${encodeURIComponent('Hello SSP Bakers! I would like to inquire about bulk party catering / hi-tea boxes from Lucky One Outlet #45.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Inquire Bulk Catering</span>
          </a>
        </div>

      </div>
    </section>
  );
};
