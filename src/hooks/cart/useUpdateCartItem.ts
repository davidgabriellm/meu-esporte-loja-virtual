import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";

async function updateItemQuantity(id: string, quantity: number) {
  const token = localStorage.getItem("token");
  await api.put(`/cart/${id}`, { quantity }, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function useUpdateCartQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, quantity }: { id: string; quantity: number }) =>
      updateItemQuantity(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart-items"] });
    },
  });
}
