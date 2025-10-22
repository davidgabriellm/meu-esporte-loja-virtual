import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

export default function RightSheet() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

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
          className="bg-opacity-50 fixed inset-0 z-40 bg-black"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="flex h-full flex-col justify-between p-6">
          <nav>
            <ul className="flex flex-col gap-4">
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
                  Todos Os Produtos
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
