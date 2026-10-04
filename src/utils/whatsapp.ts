import { CartItem, CustomCakeOrderState, MenuItem } from '../types';

export const WHATSAPP_PHONE_RAW = '+923107796560';
export const WHATSAPP_PHONE_DIGITS = '923107796560';
export const DISPLAY_PHONE = '+92 310 7796560';
export const STORE_EMAIL = 'hussainaliabro50@gmail.com';
export const STORE_LOCATION = 'Lucky One Outlet #45, Karachi';
export const DEVELOPER_NAME = 'Hussain Ali';

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encoded}`;
}

export function generateItemWhatsAppUrl(item: MenuItem, quantity: number = 1, notes?: string): string {
  const subtotal = item.price * quantity;
  const message = `👋 *HELLO SSP BAKERS!*
I would like to place an order from your menu:

📌 *Item:* ${item.name}
📦 *Quantity:* ${quantity} ${quantity > 1 ? 'portions' : 'portion'}
💰 *Price:* Rs. ${item.price} each (Total: Rs. ${subtotal})
${item.serving ? `🍽️ *Serving Info:* ${item.serving}\n` : ''}${notes ? `📝 *Special Instructions:* ${notes}\n` : ''}
📍 *Store Outlet:* Lucky One Outlet #45, Karachi
Please confirm availability and preparation/pickup time. Thank you!`;

  return createWhatsAppLink(message);
}

export function generateCartWhatsAppUrl(
  items: CartItem[],
  orderType: 'pickup' | 'delivery',
  customer: {
    name?: string;
    phone?: string;
    address?: string;
    notes?: string;
  }
): string {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* x ${item.quantity} = Rs. ${item.product.price * item.quantity}${
          item.notes ? ` _(${item.notes})_` : ''
        }`
    )
    .join('\n');

  const message = `✨ *NEW ORDER - SSP BAKERS* ✨
Hello! I would like to order the following items:

${itemsList}

━━━━━━━━━━━━━━━━━━━━━
💵 *Total Bill:* Rs. ${total}
🚚 *Order Type:* ${orderType === 'pickup' ? 'Store Pickup (Lucky One Outlet #45)' : 'Express Home Delivery'}
${customer.name ? `👤 *Customer Name:* ${customer.name}\n` : ''}${
    customer.phone ? `📞 *Contact Phone:* ${customer.phone}\n` : ''
  }${orderType === 'delivery' && customer.address ? `🏠 *Delivery Address:* ${customer.address}\n` : ''}${
    customer.notes ? `📝 *Notes:* ${customer.notes}\n` : ''
  }
Please confirm my order and let me know the preparation time. Thank you!`;

  return createWhatsAppLink(message);
}

export function generateCakeWhatsAppUrl(
  cake: CustomCakeOrderState,
  estimatedPrice: number
): string {
  const message = `🎂 *CUSTOM CAKE ORDER - SSP BAKERS* 🎂
Hello SSP Bakers! I would like to order a custom celebration cake:

🍰 *Flavor:* ${cake.flavor}
⚖️ *Weight / Size:* ${cake.size}
🎨 *Shape:* ${cake.shape}
🎉 *Occasion:* ${cake.occasion}
✍️ *Message on Cake:* "${cake.messageOnCake || 'None'}"
🌱 *Dietary Preference:* ${cake.dietaryPref || 'Standard'}
📅 *Date Needed:* ${cake.deliveryDate || 'As soon as possible'}
⏰ *Preferred Time:* ${cake.deliveryTime || 'Flexible'}
🚚 *Fulfillment:* ${cake.orderType === 'pickup' ? 'Self Pickup at Lucky One Outlet #45' : 'Home Delivery'}

👤 *Customer Name:* ${cake.customerName || 'Customer'}
📞 *Phone:* ${cake.customerPhone || 'Not provided'}
${cake.orderType === 'delivery' && cake.deliveryAddress ? `📍 *Address:* ${cake.deliveryAddress}\n` : ''}${
    cake.specialInstructions ? `💡 *Special Requests / Design Notes:* ${cake.specialInstructions}\n` : ''
  }
💰 *Estimated Price:* Rs. ${estimatedPrice}

Please confirm if this design is available for my required date! Thank you!`;

  return createWhatsAppLink(message);
}

export function generateGeneralInquiryWhatsAppUrl(topic: string = 'General Inquiry'): string {
  const message = `👋 *Hello SSP Bakers!*
I am reaching out regarding *${topic}* at Lucky One Outlet #45. 
Could you please assist me with information on your menu, catering, or bulk orders? Thank you!`;
  return createWhatsAppLink(message);
}
