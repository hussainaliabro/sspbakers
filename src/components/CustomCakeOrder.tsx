import React, { useState } from 'react';
import { 
  Cake, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  MessageCircle, 
  User, 
  Phone, 
  Check, 
  Info,
  Heart
} from 'lucide-react';
import { CAKE_FLAVORS, CAKE_SIZES } from '../data/menuData';
import { CustomCakeOrderState } from '../types';
import { generateCakeWhatsAppUrl } from '../utils/whatsapp';

export const CustomCakeOrder: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(CAKE_FLAVORS[0]);
  const [selectedSize, setSelectedSize] = useState(CAKE_SIZES[1]); // default 2.0 Lbs
  const [shape, setShape] = useState('Classic Round');
  const [occasion, setOccasion] = useState('Birthday');
  const [messageOnCake, setMessageOnCake] = useState('');
  const [dietaryPref, setDietaryPref] = useState('Standard (Pure Butter)');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Evening (5:00 PM - 8:00 PM)');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate live estimate
  const dietaryExtra = dietaryPref.includes('Eggless') ? 100 : dietaryPref.includes('Sugar Free') ? 150 : 0;
  const shapeExtra = shape === '2-Tier Celebration' ? 300 : 0;
  const estimatedTotal = Math.round(selectedFlavor.basePrice * selectedSize.multiplier + selectedSize.extra + dietaryExtra + shapeExtra);

  const shapes = ['Classic Round', 'Heart Shaped', 'Square Modern', '2-Tier Celebration'];
  const occasions = ['Birthday', 'Anniversary', 'Engagement / Nikah', 'Graduation', 'Baby Shower', 'Celebration'];
  const dietaryOptions = ['Standard (Pure Butter)', '100% Eggless (+Rs. 100)', 'Low Sugar / Diabetic (+Rs. 150)'];
  const timeSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 8:00 PM)',
    'Night (8:00 PM - 11:30 PM)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cakeOrder: CustomCakeOrderState = {
      flavor: selectedFlavor.name,
      size: selectedSize.label,
      shape,
      occasion,
      messageOnCake: messageOnCake.trim(),
      dietaryPref,
      orderType,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      deliveryDate,
      deliveryTime,
      specialInstructions: specialInstructions.trim()
    };

    const url = generateCakeWhatsAppUrl(cakeOrder, estimatedTotal);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  return (
    <section id="custom-cakes" className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden">
      {/* Decorative accent background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D49A3D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADBCC] text-[#8C4E1A] text-xs font-bold uppercase tracking-wider mb-3">
            <Cake className="w-3.5 h-3.5 text-[#B36826]" />
            <span>Master Patisserie</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1408] leading-tight">
            Design Your Custom Celebration Cake
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6C5340]">
            Customize flavor, weight/size, shape, and custom piped message. Our master bakers handcraft your cake fresh at Lucky One Outlet #45 and send instant confirmation via WhatsApp!
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#EADBCC] shadow-xl p-5 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 7 Columns: Options selection */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Select Flavor */}
              <div>
                <label className="flex items-center justify-between text-sm sm:text-base font-bold text-[#2B1408] mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3E2415] text-white text-xs flex items-center justify-center font-bold">1</span>
                    <span>Choose Signature Flavor</span>
                  </span>
                  <span className="text-xs font-semibold text-[#8C4E1A]">
                    Base: Rs. {selectedFlavor.basePrice} (1 Lb)
                  </span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {CAKE_FLAVORS.map((flavor) => {
                    const isSelected = selectedFlavor.name === flavor.name;
                    return (
                      <button
                        key={flavor.name}
                        type="button"
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all flex flex-col justify-between h-20 ${
                          isSelected
                            ? 'bg-[#3E2415] text-[#FBE8B5] border-[#3E2415] shadow-md ring-2 ring-[#D49A3D]'
                            : 'bg-[#FAF4EB] text-[#3D2516] border-[#E5D7C7] hover:border-[#C4A076] hover:bg-[#F5ECE0]'
                        }`}
                      >
                        <span className="leading-snug">{flavor.name}</span>
                        <span className={`text-[11px] font-bold ${isSelected ? 'text-[#E5A93C]' : 'text-[#8C4E1A]'}`}>
                          from Rs. {flavor.basePrice}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Size / Weight */}
              <div>
                <label className="flex items-center justify-between text-sm sm:text-base font-bold text-[#2B1408] mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3E2415] text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span>Select Size & Weight</span>
                  </span>
                  <span className="text-xs text-[#8C4E1A] font-semibold">{selectedSize.label}</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CAKE_SIZES.map((size) => {
                    const isSelected = selectedSize.label === size.label;
                    return (
                      <button
                        key={size.label}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#3E2415] text-white border-[#3E2415] shadow-md ring-2 ring-[#D49A3D]'
                            : 'bg-[#FAF4EB] text-[#3D2516] border-[#E5D7C7] hover:bg-[#F5ECE0]'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-sm">{size.label.split(' ')[0]} {size.label.split(' ')[1]}</div>
                          <div className={`text-[11px] ${isSelected ? 'text-[#E3D1BE]' : 'text-[#7C5535]'}`}>
                            {size.label.includes('Servings') ? size.label.substring(size.label.indexOf('(')) : ''}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#E5A93C]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Shape & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-2">
                    Cake Shape
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {shapes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setShape(s)}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          shape === s
                            ? 'bg-[#EADBCC] text-[#2B1408] border-[#8C4E1A] font-bold'
                            : 'bg-white text-[#523B2A] border-[#DAC5AC] hover:bg-[#FAF4EB]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-2">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl border border-[#DAC5AC] bg-white text-xs font-semibold text-[#2B1408] focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Message on Cake & Dietary */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                    Custom Piping Inscription (Message on Cake)
                  </label>
                  <input
                    type="text"
                    value={messageOnCake}
                    onChange={(e) => setMessageOnCake(e.target.value)}
                    placeholder="e.g. Happy 25th Birthday Ayesha! / Happy Anniversary Mom & Dad"
                    maxLength={50}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DAC5AC] bg-white text-[#2B1408] focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                  />
                  <span className="text-[11px] text-[#8C4E1A] mt-1 block">
                    Piped with pure chocolate or artisan white buttercream. Max 50 characters.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                    Dietary Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {dietaryOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setDietaryPref(opt)}
                        className={`py-2 px-2.5 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                          dietaryPref === opt
                            ? 'bg-[#EADBCC] text-[#2B1408] border-[#8C4E1A] font-bold'
                            : 'bg-white text-[#523B2A] border-[#DAC5AC] hover:bg-[#FAF4EB]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 5: Date, Time & Logistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8C4E1A]" />
                    <span>Needed Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-[#DAC5AC] bg-white text-[#2B1408] focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8C4E1A]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-[#DAC5AC] bg-white text-[#2B1408] focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Summary & Customer Details */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF4EB] rounded-2xl border border-[#EADBCC] p-5 sm:p-6">
              <div className="space-y-5">
                <div className="border-b border-[#E0D0BE] pb-4">
                  <span className="text-[11px] font-bold text-[#8C4E1A] uppercase tracking-wider block">
                    Custom Order Overview
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1408] mt-1">
                    {selectedFlavor.name}
                  </h3>
                  <div className="text-xs text-[#6C5340] mt-0.5">
                    {selectedSize.label} • {shape}
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 text-xs text-[#4A3222]">
                  <div className="flex justify-between py-1 border-b border-[#EFE3D5]">
                    <span className="text-[#7C5535]">Base Cake ({selectedSize.label.split(' ')[0]} Lbs):</span>
                    <span className="font-semibold text-[#2B1408]">Rs. {Math.round(selectedFlavor.basePrice * selectedSize.multiplier)}</span>
                  </div>
                  {selectedSize.extra > 0 && (
                    <div className="flex justify-between py-1 border-b border-[#EFE3D5]">
                      <span className="text-[#7C5535]">Multi-tier crafting fee:</span>
                      <span className="font-semibold text-[#2B1408]">Rs. {selectedSize.extra}</span>
                    </div>
                  )}
                  {dietaryExtra > 0 && (
                    <div className="flex justify-between py-1 border-b border-[#EFE3D5]">
                      <span className="text-[#7C5535]">Special Dietary:</span>
                      <span className="font-semibold text-[#2B1408]">Rs. {dietaryExtra}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 border-b border-[#EFE3D5]">
                    <span className="text-[#7C5535]">Occasion:</span>
                    <span className="font-semibold text-[#2B1408]">{occasion}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EFE3D5]">
                    <span className="text-[#7C5535]">Piped Message:</span>
                    <span className="font-semibold text-[#2B1408] italic truncate max-w-[150px]">
                      {messageOnCake ? `"${messageOnCake}"` : 'None'}
                    </span>
                  </div>
                </div>

                {/* Fulfillment toggle */}
                <div>
                  <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-2">
                    Fulfillment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        orderType === 'pickup'
                          ? 'bg-[#3E2415] text-[#FBE8B5] border-[#3E2415]'
                          : 'bg-white text-[#523B2A] border-[#DAC5AC]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Outlet Pickup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#3E2415] text-[#FBE8B5] border-[#3E2415]'
                          : 'bg-white text-[#523B2A] border-[#DAC5AC]'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Home Delivery</span>
                    </button>
                  </div>
                </div>

                {/* Customer Contact details */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-[#3D2516] mb-1">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 absolute left-3 top-3 text-[#8C4E1A]" />
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#DAC5AC] bg-white focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#3D2516] mb-1">
                      WhatsApp Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-[#8C4E1A]" />
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 0300 1234567"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#DAC5AC] bg-white focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                      />
                    </div>
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-[11px] font-bold text-[#3D2516] mb-1">
                        Delivery Address in Karachi
                      </label>
                      <input
                        type="text"
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House / Apt, Street, Block, Area..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#DAC5AC] bg-white focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold text-[#3D2516] mb-1">
                      Color Theme / Design Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="e.g. Pastel pink theme, add gold edible glitter..."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#DAC5AC] bg-white focus:ring-2 focus:ring-[#D49A3D] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Total Price Banner */}
                <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#D49A3D]/40 flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8C4E1A] block">
                      Estimated Total:
                    </span>
                    <span className="font-brand text-2xl font-black text-[#2B1408]">
                      Rs. {estimatedTotal}
                    </span>
                  </div>
                  <div className="text-[10px] text-right text-[#7C5535] max-w-[120px]">
                    Pay upon pickup / online transfer
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Cake Order to WhatsApp (+92 310 7796560)</span>
                </button>
                <p className="text-[11px] text-center text-[#8C4E1A] mt-2 font-medium">
                  Instant response from SSP Bakers master chef at Lucky One Mall.
                </p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
