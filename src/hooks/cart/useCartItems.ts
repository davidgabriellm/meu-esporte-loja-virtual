import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { api } from "../../services/api";
import useCartStore from "../../store/cart.store";
import { CartItem } from "../../store/cart.store";

interface CartResponseItem {
  id: string;
  quantity: number;
  Product: {
    name: string;
    price: number;
    image_url: string;
    description: string | null;
  };
}


async function fetchCartItems(): Promise<CartResponseItem[]> {
  const token = localStorage.getItem("token");
  const response = await api.get("/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}


export function useCartItems() {
  const queryClient = useQueryClient();
  const setCart = useCartStore((state) => state.setCart);

  const query = useQuery<CartResponseItem[]>({
    queryKey: ["cart-items"],
    queryFn: fetchCartItems,
  });

  useEffect(() => {
  const cached = queryClient.getQueryData<CartResponseItem[]>(["cart-items"]);
  if (cached) {
    const mapped: CartItem[] = cached.map((item) => ({
      id: item.id,
      name: item.Product.name,
      price: item.Product.price,
      image_url: item.Product.image_url,
      description: item.Product.description ?? "",
      quantity: item.quantity,
    }));

    setCart(mapped);
  }
}, [query.data, queryClient, setCart]);

  return query;
}
