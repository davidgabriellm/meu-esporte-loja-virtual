import logo from "../../assets/ChatGPT Image 9 de jul. de 2025, 12_08_44.png";
import RightSheet from "../buttonSheet/BottomSheet"; // troquei para RightSheet
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex h-20 w-full items-center justify-center bg-gray-900 px-6">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo Meu Esporte"
            className="h-10 w-auto object-contain md:h-12"
          />
          <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-[18px] font-bold text-transparent md:text-[25px]">
            Meu Esporte
          </span>
        </div>

        <nav className="hidden gap-8 lg:flex">
          <button
            onClick={() => navigate("/")}
            className="font-medium text-white transition-colors hover:text-blue-400 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/produtos")}
            className="font-medium text-white transition-colors hover:text-blue-400 cursor-pointer"
          >
            Todos os Produtos
          </button>
          <button
            onClick={() => navigate("/carrinho")}
            className="font-medium text-white transition-colors hover:text-blue-400 cursor-pointer"
          >
            Carrinho
          </button>
        </nav>

        <div className="block lg:hidden">
          <RightSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
