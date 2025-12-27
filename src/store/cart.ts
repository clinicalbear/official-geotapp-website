import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    period?: 'mo' | 'year';
    quantity: number; // For "Seats" or "Licenses"
    metadata?: any; // For custom configs like "1-25 employees"
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
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (newItem) => set((state) => {
                const existing = state.items.find((i) => i.id === newItem.id);
                if (existing) {
                    // Update existing item (e.g. update quantity/price)
                    return {
                        items: state.items.map((i) =>
                            i.id === newItem.id ? { ...newItem } : i
                        )
                    };
                }
                return { items: [...state.items, newItem] };
            }),
            removeItem: (id) => set((state) => ({
                items: state.items.filter((i) => i.id !== id)
            })),
            clearCart: () => set({ items: [] }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
        }),
        {
            name: 'geotapp-cart',
        }
    )
);
