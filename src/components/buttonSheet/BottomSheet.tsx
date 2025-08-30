import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

export default function RightSheet() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Função para navegar e fechar o sheet
  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setOpen(true)}
      >
        <IoMenuSharp size={30} />
      </button>

    
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

  
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          {/* Navegação */}
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  className="w-full text-left px-4 py-2 rounded hover:bg-blue-100 font-semibold text-gray-800"
                  onClick={() => handleNavigate("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 rounded hover:bg-blue-100 font-semibold text-gray-800"
                  onClick={() => handleNavigate("/produtos")}
                >
                  Todos Os Produtos
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 rounded hover:bg-blue-100 font-semibold text-gray-800"
                  onClick={() => handleNavigate("/carrinho")}
                >
                  Carrinho
                </button>
              </li>
            </ul>
          </nav>

          {/* Botão fechar */}
          <button
            className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>
        </div>
      </div>
    </>
  );
}
