import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp, IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { useUser } from "../../hooks/useGetUser";
import { FaUser } from "react-icons/fa";

export default function RightSheet() {
  const [open, setOpen] = useState(false);
  const { data: user, isLoading } = useUser();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setOpen(false);
  };

  
  if (isLoading) {
    return (
      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg opacity-60 cursor-wait"
        disabled
      >
        <IoMenuSharp size={30} />
      </button>
    );
  }

 
  const firstName = user?.name?.split(" ")[0] ?? "Visitante";

  return (
    <>
      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-blue-700"
        onClick={() => setOpen(true)}
      >
        <IoMenuSharp size={30} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <nav>
            <div className="flex items-center gap-2 my-3">
              <p className="font-bold text-[16px]">Olá, {firstName}</p>
              <FaUser color="black" />
            </div>

            <ul className="flex flex-col gap-4">
              {!token ? (
                <li className="flex gap-7 items-center mb-3 mt-2">
                  <p className="text-[15px] font-bold">Faça o seu login!</p>
                  <button
                    className="w-full rounded-3xl px-1 py-1 font-semibold hover:bg-blue-100 flex bg-blue-900 text-white justify-center items-center gap-3"
                    onClick={() => handleNavigate("/login")}
                  >
                    Login
                    <IoLogInOutline />
                  </button>
                </li>
              ) : (
                <li className="flex gap-7 items-center mb-3 mt-2">
                  <p className="text-[15px] font-bold">Sair da conta</p>
                  <button
                    className="w-full rounded-3xl px-1 py-1 font-semibold hover:bg-red-100 flex bg-red-800 text-white justify-center items-center gap-3"
                    onClick={handleLogout}
                  >
                    Sair
                    <IoLogOutOutline />
                  </button>
                </li>
              )}

              <li>
                <button
                  className="w-full rounded px-4 py-2 text-left font-semibold text-gray-800 hover:bg-blue-100"
                  onClick={() => handleNavigate("/")}
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  className="w-full rounded px-4 py-2 text-left font-semibold text-gray-800 hover:bg-blue-100"
                  onClick={() => handleNavigate("/produtos")}
                >
                  Todos os Produtos
                </button>
              </li>

              <li>
                <button
                  className="w-full rounded px-4 py-2 text-left font-semibold text-gray-800 hover:bg-blue-100"
                  onClick={() => handleNavigate("/carrinho")}
                >
                  Carrinho
                </button>
              </li>
            </ul>
          </nav>

          <button
            className="mt-6 w-full rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>
        </div>
      </div>
    </>
  );
}
