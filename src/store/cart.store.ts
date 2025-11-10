import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  setCart: (items: CartItem[]) => void;
  getTotalPrice: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  setCart: (items) => set({ cart: items }),

  getTotalPrice: () => {
    const state = get();
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
