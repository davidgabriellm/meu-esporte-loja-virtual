import { create } from "zustand";

interface cartItem {
  ID: number;
  product_name: string;
  product_price: number;
  image_url: string;
  description: string;
  quantity: number;
}

interface cartStore {
  cart: cartItem[];
  addToCart: (item: cartItem) => void;
  removeItemToCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
}

const useCartStore = create<cartStore>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.ID === item.ID,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.ID === item.ID
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeItemToCart: (id: number) =>
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.ID !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.ID === id ? { ...item, quantity } : item,
      ),
    })),

  getTotalPrice: (): number => {
    const state = get();
    return state.cart.reduce(
      (total, item) => total + item.product_price * item.quantity,
      0,
    );
  },
}));

export default useCartStore;
