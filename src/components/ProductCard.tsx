import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Plus, Minus, Star, Info, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { generateItemWhatsAppUrl } from '../utils/whatsapp';
import { getMenuImageUrl, handleMenuImageError } from '../utils/images';

interface ProductCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onViewDetails: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onAddToCart,
  onViewDetails
}) => {
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleIncrement = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleOrderNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateItemWhatsAppUrl(item, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item, quantity);
  };

  return (
    <div
      onClick={() => onViewDetails(item)}
      className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EADBCC] hover:border-[#D49A3D] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3E9DD]">
        <img
          src={getMenuImageUrl(item.image)}
          alt={item.name}
          onLoad={() => setImageLoaded(true)}
          onError={(event) => {
            handleMenuImageError(event);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />

        {/* Loading skeleton placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#EFE5D8] animate-pulse flex items-center justify-center text-xs text-[#8C4E1A]">
            Fresh from the oven...
          </div>
        )}

        {/* Category & Custom Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {item.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#3E2415]/90 text-[#FBE8B5] backdrop-blur-sm border border-[#D49A3D]/40 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#E5A93C]" />
              {item.badge}
            </span>
          )}
        </div>

        {/* Rating pill */}
        <div className="absolute top-2.5 right-2.5 bg-[#FFFDF9]/95 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-extrabold text-[#2C1810] shadow-sm border border-[#E8DACB]">
          <Star className="w-3 h-3 fill-[#E5A93C] text-[#E5A93C]" />
          <span>{item.rating.toFixed(1)}</span>
        </div>

        {/* Serving note overlay if available */}
        {item.serving && (
          <div className="absolute bottom-2 left-2.5 bg-[#2B1408]/85 backdrop-blur-md text-[#FFF8EB] px-2.5 py-0.5 rounded-md text-[10px] font-semibold border border-[#D49A3D]/30">
            {item.serving}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Price */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg font-bold text-[#2C1810] group-hover:text-[#B36826] transition-colors leading-snug">
              {item.name}
            </h3>
            <div className="text-right shrink-0">
              <span className="text-xs font-semibold text-[#8C4E1A] block">Rs.</span>
              <span className="font-brand text-xl font-extrabold text-[#2C1810]">
                {item.price}
              </span>
            </div>
          </div>

          {/* Mouth-watering Description */}
          <p className="mt-2 text-xs sm:text-sm text-[#6C5340] line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-4 pt-3 border-t border-[#F0E4D5] flex flex-col gap-2.5">
          {/* Quantity selector & total preview */}
          <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center border border-[#DAC5AC] rounded-lg bg-[#FAF4EB] p-0.5">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#EEDEC7] text-[#3D2516] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-extrabold text-[#2C1810]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#EEDEC7] text-[#3D2516] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-right text-[11px] font-medium text-[#7C5535]">
              Subtotal: <span className="font-bold text-[#2C1810]">Rs. {item.price * quantity}</span>
            </div>
          </div>

          {/* Primary Buttons: Order Now (WhatsApp) + Add to Bag */}
          <div className="grid grid-cols-12 gap-2">
            {/* WhatsApp Order Now Button */}
            <button
              type="button"
              onClick={handleOrderNow}
              className="col-span-8 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow active:scale-95"
              title="Order this item directly on WhatsApp (+92 310 7796560)"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span className="truncate">Order Now</span>
            </button>

            {/* Add to Bag Button */}
            <button
              type="button"
              onClick={handleAdd}
              className="col-span-4 flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-[#3E2415] hover:bg-[#251208] text-white text-xs font-bold transition-all active:scale-95"
              title="Add to order bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
