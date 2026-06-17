import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CurrencyCode } from '@/lib/pricing';

export interface CartItem {
  id: string;
  name: string;
  /** EUR price, authoritative for backend / Stripe checkout. */
  price: number;
  /** Display currency for the user's locale. */
  currency: CurrencyCode;
  /** Display amount in that currency (FX-converted + buffered, psychologically rounded). */
  displayAmount: number;
  /** Pre-formatted display string, e.g. "$3.99" or "€36,00". */
  displayFormatted: string;
  period?: 'mo' | 'year';
  quantity: number;
  metadata?: any;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === newItem.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === newItem.id ? { ...newItem } : i,
              ),
            };
          }
          return { items: [...state.items, newItem] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'geotapp-cart',
    },
  ),
);
