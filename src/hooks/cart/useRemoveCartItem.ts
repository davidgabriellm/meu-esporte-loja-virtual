import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";

async function removeFromCart(id: string) {
  const token = localStorage.getItem("token");
  await api.delete(`/cart/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
