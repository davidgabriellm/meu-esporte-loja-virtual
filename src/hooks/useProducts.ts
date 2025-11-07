import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image_url: string;
};

async function fetchProducts() {
  const response = await api.get<Product[]>("/products");
  return response.data;
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
