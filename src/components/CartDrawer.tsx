import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, Truck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { generateCartWhatsAppUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 150 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    const url = generateCartWhatsAppUrl(items, orderType, {
      name: customerName.trim(),
      phone: customerPhone.trim(),
      address: address.trim(),
      notes: notes.trim()
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col border-l border-[#D49A3D]/40">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-[#EADBCC] flex items-center justify-between bg-[#FAF4EB]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#3E2415] text-[#E5A93C] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2B1408]">Your Order Bag</h3>
                <span className="text-xs text-[#7C5535]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#8C4E1A] hover:text-[#C85A32] font-semibold px-2 py-1"
                  title="Clear bag"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#EFE3D5] hover:bg-[#E5D2BE] text-[#2B1408] flex items-center justify-center transition-colors"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#F0E4D5]">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.product.id} className="py-3.5 flex gap-3 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[#DAC5AC] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#2B1408] truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-xs text-[#8C4E1A] font-semibold mt-0.5">
                      Rs. {item.product.price} each
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#DAC5AC] rounded-lg bg-[#FAF4EB]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-[#EEDEC7] text-[#3D2516]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#2B1408]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-[#EEDEC7] text-[#3D2516]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-[#2B1408]">
                        Rs. {item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1.5 text-[#B36826] hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#DAC5AC] mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#2B1408]">Your bag is empty</h4>
                <p className="text-xs text-[#7C5535] mt-1 max-w-xs mx-auto">
                  Add some delicious hot samosas, cheese rolls, or a rich chocolate cake from our menu!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#3E2415] text-[#FBE8B5] text-xs font-bold"
                >
                  Browse Menu
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-[#FAF4EB] border-t border-[#EADBCC] space-y-4">
              
              {/* Pickup / Delivery selector */}
              <div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                      orderType === 'pickup'
                        ? 'bg-[#3E2415] text-[#FBE8B5] border-[#3E2415]'
                        : 'bg-white text-[#523B2A] border-[#DAC5AC]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pickup (Lucky One)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#3E2415] text-[#FBE8B5] border-[#3E2415]'
                        : 'bg-white text-[#523B2A] border-[#DAC5AC]'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Express Delivery</span>
                  </button>
                </div>
              </div>

              {/* Quick Customer Info */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#DAC5AC] bg-white text-[#2B1408] focus:outline-none focus:ring-1 focus:ring-[#D49A3D]"
                />

                <input
                  type="tel"
                  placeholder="Contact Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#DAC5AC] bg-white text-[#2B1408] focus:outline-none focus:ring-1 focus:ring-[#D49A3D]"
                />

                {orderType === 'delivery' && (
                  <input
                    type="text"
                    placeholder="Delivery Address in Karachi"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#DAC5AC] bg-white text-[#2B1408] focus:outline-none focus:ring-1 focus:ring-[#D49A3D]"
                  />
                )}
              </div>

              {/* Subtotal & Grand Total */}
              <div className="space-y-1.5 pt-2 border-t border-[#E8DACB] text-xs">
                <div className="flex justify-between text-[#7C5535]">
                  <span>Items Subtotal:</span>
                  <span className="font-bold text-[#2B1408]">Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between text-[#7C5535]">
                  <span>Fulfillment:</span>
                  <span className="font-bold text-[#2B1408]">
                    {orderType === 'pickup' ? 'Free (Pickup Outlet #45)' : `Rs. ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#2B1408] pt-1 border-t border-[#E8DACB]">
                  <span>Total Payable:</span>
                  <span className="font-brand text-lg text-[#2B1408]">Rs. {grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Complete Order on WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
