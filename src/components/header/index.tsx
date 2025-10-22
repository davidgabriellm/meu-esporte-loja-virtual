import logo from "../../assets/ChatGPT Image 9 de jul. de 2025, 12_08_44.png";
import RightSheet from "../buttonSheet/BottomSheet"; // troquei para RightSheet
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 w-full h-20 flex justify-center items-center px-6">
      <div className="w-full max-w-6xl flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo Meu Esporte"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="text-[18px] md:text-[25px] font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Meu Esporte
          </span>
        </div>

        
        <nav className="hidden lg:flex gap-8">
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/produtos")}
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            Todos os Produtos
          </button>
          <button
            onClick={() => navigate("/carrinho")}
            className="text-white hover:text-blue-400 transition-colors font-medium"
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
