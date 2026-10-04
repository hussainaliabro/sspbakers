export type MenuCategory = 'all' | 'samosas' | 'rolls' | 'cookies' | 'cakes';

export interface MenuItem {
  id: string;
  name: string;
  category: 'samosas' | 'rolls' | 'cookies' | 'cakes';
  price: number;
  serving?: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
  rating: number;
  ingredients?: string[];
  prepTime?: string;
}

export interface CartItem {
  product: MenuItem;
  quantity: number;
  notes?: string;
}

export interface CustomCakeOrderState {
  flavor: string;
  size: string;
  shape: string;
  occasion: string;
  messageOnCake: string;
  dietaryPref: string;
  orderType: 'pickup' | 'delivery';
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  deliveryDate: string;
  deliveryTime: string;
  specialInstructions: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  favoriteItem: string;
  date: string;
  avatar: string;
}
