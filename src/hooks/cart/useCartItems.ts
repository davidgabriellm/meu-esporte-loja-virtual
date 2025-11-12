import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  quantity: number;
}

async function fetchCartItems() {
  const response = await api.get("/cart");
  return response.data;
}

export function useCartItems() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const items = await fetchCartItems();

      const mapped: CartItem[] = items.map((item: any) => ({
        id: item.id,
        name: item.product?.name ?? "Produto removido",
        price: item.product?.price ?? 0,
        image_url: item.product?.image_url ?? "",
        description: item.product?.description ?? "",
        quantity: item.quantity,
      }));

      return mapped;
    },
  });
}
