import React from 'react';

export const FALLBACK_MENU_IMAGE_URL =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80';

export const getMenuImageUrl = (image?: string) =>
  image && image.trim().length > 0 ? image : FALLBACK_MENU_IMAGE_URL;

export const handleMenuImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const img = event.currentTarget;
  if (img.src !== FALLBACK_MENU_IMAGE_URL) {
    img.src = FALLBACK_MENU_IMAGE_URL;
  }
};
