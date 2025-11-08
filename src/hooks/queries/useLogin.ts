import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/api";

interface LoginUserData {
  email: string;
  password: string;
}

async function loginUser(data: LoginUserData) {
  const response = await api.post("/sessions", data);
  return response.data;
}

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
}
