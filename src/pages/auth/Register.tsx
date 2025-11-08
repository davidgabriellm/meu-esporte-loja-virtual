import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"; // ✅ Import

const schema = z
  .object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Mínimo 8 caracteres"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Senhas não conferem",
    path: ["passwordConfirmation"],
  });

type RegisterFormData = z.infer<typeof schema>;

export default function Register() {
  const navigate = useNavigate(); // ✅ Hook de navegação

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await api.post("/users", data);

    alert("Usuário cadastrado com sucesso!");

    navigate("/login"); // ✅ Redireciona para o login
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-lvh flex justify-center items-center bg-gray-200 px-4"
    >
      <div className="bg-white shadow-lg border border-gray-300 rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-blue-900 mb-6">
          Registrar
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-blue-900 font-medium">Nome</label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-blue-900 font-medium">Email</label>
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-blue-900 font-medium">Senha</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="text-blue-900 font-medium">Confirmar Senha</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Confirme sua senha"
              {...register("passwordConfirmation")}
            />
            {errors.passwordConfirmation && (
              <p className="text-red-600 text-sm">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-medium py-2 rounded-md mt-3 disabled:opacity-60"
          >
            Cadastrar
          </button>
          <button className="bg-blue-800 hover:bg-blue-900 transition text-white font-medium py-2 rounded-md mt-3 disabled:opacity-60" onClick={()=> navigate("/Login")}>
                Fazer Login
            </button>
        </div>
      </div>
    </form>
  );
}
