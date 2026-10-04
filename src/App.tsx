/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomCakeOrder } from './components/CustomCakeOrder';
import { HeritageSection } from './components/HeritageSection';
import { OutletSection } from './components/OutletSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OriginalMenuModal } from './components/OriginalMenuModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MENU_ITEMS } from './data/menuData';
import { CartItem, MenuItem } from './types';
import { Sparkles, ShieldCheck, Flame, HeartHandshake } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ssp_bakers_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOriginalMenuOpen, setIsOriginalMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('ssp_bakers_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to sync cart', e);
    }
  }, [cart]);

  const handleAddToCart = (item: MenuItem, quantity: number = 1, notes?: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.product.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          notes: notes || updated[existingIndex].notes
        };
        return updated;
      }
      return [...prevCart, { product: item, quantity, notes }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCustomCakes = () => {
    const el = document.getElementById('custom-cakes');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C1810] flex flex-col selection:bg-[#E5A93C]/30 selection:text-[#2C1810]">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOriginalMenu={() => setIsOriginalMenuOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onExploreMenu={scrollToMenu}
          onCustomCake={scrollToCustomCakes}
        />

        {/* Feature Badges Marquee Strip */}
        <section className="bg-[#FAF3E8] border-y border-[#EADBCC] py-4">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 text-xs font-bold text-[#6B4423]">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#C85A32]" />
              <span>Crispy Samosas & Rolls Fried Fresh on Order</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>100% Certified Halal & Pure Dairy Butter</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D49A3D]" />
              <span>Handcrafted Custom Cakes for All Occasions</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#C85A32]" />
              <span>Serving Karachi Families Since 1952</span>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <MenuSection
          items={MENU_ITEMS}
          onAddToCart={handleAddToCart}
          onViewDetails={(item) => setSelectedProduct(item)}
          onOpenOriginalMenu={() => setIsOriginalMenuOpen(true)}
        />

        {/* Custom Cake Order Section */}
        <CustomCakeOrder />

        {/* Since 1952 Heritage Section */}
        <HeritageSection />

        {/* Lucky One Outlet #45 Section */}
        <OutletSection />

        {/* Customer Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Form & FAQs */}
        <ContactSection />
      </main>

      {/* Footer with Developer Credits */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <OriginalMenuModal
        isOpen={isOriginalMenuOpen}
        onClose={() => setIsOriginalMenuOpen(false)}
        onSelectItem={(item) => {
          setIsOriginalMenuOpen(false);
          setSelectedProduct(item);
        }}
        items={MENU_ITEMS}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
