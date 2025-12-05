import { create } from 'zustand';
import { CartItem, Product } from './types';

interface AppState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (id: string, size: string) => void;
  toggleCart: () => void;
  cartTotal: () => number;
}

export const useStore = create<AppState>((set, get) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, size) => set((state) => {
    const existingItem = state.cart.find(
      (item) => item.id === product.id && item.selectedSize === size
    );

    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isCartOpen: true,
      };
    }

    return {
      cart: [...state.cart, { ...product, selectedSize: size, quantity: 1 }],
      isCartOpen: true,
    };
  }),
  removeFromCart: (id, size) => set((state) => ({
    cart: state.cart.filter((item) => !(item.id === id && item.selectedSize === size))
  })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  cartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
