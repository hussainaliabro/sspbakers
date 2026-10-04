import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Plus, Minus, Star, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { MenuItem } from '../types';
import { generateItemWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, notes?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [specialNotes, setSpecialNotes] = useState('');

  if (!item) return null;

  const handleOrderWhatsApp = () => {
    const url = generateItemWhatsAppUrl(item, quantity, specialNotes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    onAddToCart(item, quantity, specialNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-[#D49A3D]/40 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 p-0">
          {/* Header image banner */}
          <div className="relative aspect-[16/9] w-full bg-[#3D2516]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                {item.badge && (
                  <span className="text-[11px] font-bold bg-[#E5A93C] text-[#24130A] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                <span className="text-xs text-[#E3D1BE] uppercase font-semibold tracking-wider">
                  {item.category}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                {item.name}
              </h2>
            </div>
          </div>

          {/* Details body */}
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Price and Serving Banner */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF3E8] border border-[#EADBCC]">
              <div>
                <span className="text-xs text-[#8C4E1A] font-semibold block">Price per portion:</span>
                <span className="font-brand text-2xl sm:text-3xl font-black text-[#2B1408]">
                  Rs. {item.price}
                </span>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-sm font-bold text-[#2B1408]">
                  <Star className="w-4 h-4 fill-[#E5A93C] text-[#E5A93C]" />
                  <span>{item.rating.toFixed(1)} / 5.0</span>
                </div>
                {item.serving && (
                  <span className="text-xs font-semibold text-[#8C4E1A] block mt-0.5">
                    Portion: {item.serving}
                  </span>
                )}
              </div>
            </div>

            {/* Mouth-watering Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C4E1A] mb-1.5">
                Mouth-Watering Flavor Profile
              </h4>
              <p className="text-sm sm:text-base text-[#4A3222] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Ingredients highlights */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C4E1A] mb-2">
                  Key Fresh Ingredients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F5ECE0] text-[#3D2516] text-xs font-medium border border-[#E2D2C0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B36826]" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Store & Timing Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6C5340] bg-[#FFF9F2] p-3 rounded-xl border border-[#E8DACB]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B36826]" />
                <span>{item.prepTime || 'Freshly prepared upon order'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B36826]" />
                <span>Pickup at Lucky One Outlet #45</span>
              </div>
            </div>

            {/* Special Requests / Notes */}
            <div>
              <label className="block text-xs font-bold text-[#3D2516] mb-1.5">
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="e.g. Extra spicy chutney, warm packing, birthday ribbon..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DAC5AC] bg-white focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
              />
            </div>

            {/* Quantity Selector & Live Total */}
            <div className="pt-2 flex items-center justify-between border-t border-[#F0E4D5]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#3D2516]">Quantity:</span>
                <div className="flex items-center border border-[#DAC5AC] rounded-xl bg-[#FAF4EB] p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#EEDEC7] text-[#3D2516]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-extrabold text-[#2C1810]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#EEDEC7] text-[#3D2516]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-[#8C4E1A] block font-medium">Total Amount:</span>
                <span className="font-brand text-2xl font-black text-[#2C1810]">
                  Rs. {item.price * quantity}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order Now via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#3E2415] hover:bg-[#251208] text-white font-bold text-sm transition-all active:scale-98"
              >
                <ShoppingBag className="w-5 h-5 text-[#E5A93C]" />
                <span>Add to Order Bag</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
