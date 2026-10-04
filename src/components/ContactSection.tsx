import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Share2,
  CheckCircle2,
  Instagram,
  Facebook
} from 'lucide-react';
import { DISPLAY_PHONE, SOCIAL_LINKS, STORE_EMAIL, WHATSAPP_PHONE_RAW, createWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does WhatsApp ordering work at SSP Bakers?',
      a: 'Simply tap "Order Now" on any product card or build your complete order bag and tap "Complete Order on WhatsApp". Your order details, quantities, and prices will automatically populate in a WhatsApp chat with our store hotline (+92 310 7796560), where our team immediately confirms preparation time and delivery.'
    },
    {
      q: 'How far in advance should I order custom celebration cakes?',
      a: 'For standard sizes (1 Lbs to 3 Lbs), we recommend placing your order at least 24 hours in advance. For elaborate 2-tier party cakes or bespoke sculpted themes, 48 hours notice is preferred to give our master pastry chefs ample time for decoration.'
    },
    {
      q: 'Where is your physical outlet located for takeout?',
      a: 'We are situated right at Outlet #45, Food Court & Bakery Pavilion in Lucky One Mall, Main Rashid Minhas Road, Karachi. You can park in the mall parking and pick up your fresh order in 5-10 minutes.'
    },
    {
      q: 'Are all products 100% Halal and fresh daily?',
      a: 'Yes, absolutely. All meat fillings (chicken, beef keema) are 100% certified Halal, and all baked goods are crafted fresh daily using pure creamery butter, premium cocoa, and farm eggs. We never use artificial preservatives.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📩 *NEW MESSAGE FROM WEBSITE*\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Subject:* ${formData.subject}\n• *Message:* ${formData.message}\n\nSent to SSP Bakers Lucky One Outlet #45.`;
    const url = createWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E1] text-[#8C4E1A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#EADBCC]">
            <MessageCircle className="w-3.5 h-3.5 text-[#B36826]" />
            <span>We're Here For You</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1408]">
            Get In Touch With SSP Bakers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6C5340]">
            Have questions about custom flavors, bulk party orders, or delivery timing? Send us a quick note or chat on WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#FAF4EB] rounded-3xl border border-[#EADBCC] p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#2B1408] mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#7C5535] mb-6">
              Fill out this quick form and send directly to our store WhatsApp manager.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#DCF8C6] border border-[#25D366] text-[#1EBE5D] text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! Your message has been forwarded to WhatsApp.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#DAC5AC] bg-white focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                  WhatsApp / Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +92 310 7796560"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#DAC5AC] bg-white focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#DAC5AC] bg-white focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
                >
                  <option value="General Inquiry">General Question</option>
                  <option value="Custom Cake Consultation">Custom Cake Consultation</option>
                  <option value="Bulk Party / Hi-Tea Catering">Bulk Party / Hi-Tea Catering</option>
                  <option value="Delivery Status">Delivery Status</option>
                  <option value="Feedback / Suggestion">Feedback / Compliment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B1408] uppercase tracking-wider mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#DAC5AC] bg-white focus:outline-none focus:ring-2 focus:ring-[#D49A3D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send to WhatsApp Hotline (+92 310 7796560)</span>
              </button>
            </form>
          </div>

          {/* Right Column: FAQs Accordion & Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-[#3E2415] text-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#D49A3D]/40 shadow-xl">
              <h4 className="font-serif text-xl font-bold text-[#FFF8EB] mb-4">
                Fast Contact Channels
              </h4>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <a
                  href={`tel:${WHATSAPP_PHONE_RAW}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#4D2D1A] hover:bg-[#5C3720] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <div>
                    <span className="block font-bold text-white">Phone Support:</span>
                    <span className="text-[#E3D1BE]">{DISPLAY_PHONE}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${STORE_EMAIL}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#4D2D1A] hover:bg-[#5C3720] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <div>
                    <span className="block font-bold text-white">Official Email:</span>
                    <span className="text-[#E3D1BE]">{STORE_EMAIL}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#4D2D1A]">
                  <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <div>
                    <span className="block font-bold text-white">Primary Outlet:</span>
                    <span className="text-[#E3D1BE]">Shop #45, Food Court, Lucky One Mall, Karachi</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#6A4128]/60">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E5A93C] mb-2">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Follow SSP Bakers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#4D2D1A] hover:bg-[#E1306C] border border-[#6A4128] text-white flex items-center justify-center transition-colors"
                      aria-label="SSP Bakers on Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#4D2D1A] hover:bg-[#1877F2] border border-[#6A4128] text-white flex items-center justify-center transition-colors"
                      aria-label="SSP Bakers on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#4D2D1A] hover:bg-black border border-[#6A4128] text-white flex items-center justify-center transition-colors text-[10px] font-bold"
                      aria-label="SSP Bakers on TikTok"
                    >
                      TT
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-[#FAF4EB] rounded-3xl border border-[#EADBCC] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4E1A] mb-4">
                <HelpCircle className="w-4 h-4 text-[#B36826]" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#EADBCC] rounded-2xl bg-[#FFFDF9] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left p-4 text-xs sm:text-sm font-bold text-[#2B1408] flex items-center justify-between gap-3"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#8C4E1A] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8C4E1A] shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-[#6C5340] leading-relaxed border-t border-[#F0E4D5] pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
