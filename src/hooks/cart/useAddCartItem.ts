import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";

async function addToCart(product_id: string) {
  const token = localStorage.getItem("token");
  await api.post(
    "/cart",
    { product_id, quantity: 1 },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
