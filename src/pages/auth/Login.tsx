import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().nonempty("Senha obrigatória"),
});

type LoginFormData = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await api.post("/sessions", data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      // faz o React Query buscar o user novamente e atualizar o Header
      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate("/"); // só navega AGORA
    },
    onError: () => alert("Credenciais inválidas"),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => loginMutation.mutate(data))}
      className="h-lvh flex justify-center items-center bg-gray-200 px-4"
    >
      <div className="bg-white shadow-lg border border-gray-300 rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-blue-900 mb-6">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-blue-900 font-medium">Email</label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-blue-900 font-medium">Senha</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md mt-3 disabled:opacity-60"
          >
            {loginMutation.isPending ? "Carregando..." : "Entrar"}
          </button>

          <button
            type="button"
            className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 rounded-md mt-3"
            onClick={() => navigate("/register")}
          >
            Criar Conta
          </button>
        </div>
      </div>
    </form>
  );
}
