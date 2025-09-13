import logo from "../../assets/ChatGPT Image 9 de jul. de 2025, 12_08_44.png";
import BottomSheet from "../buttonSheet/BottomSheet";

const Header = () => {
  return (
    <header className="bg-gray-900 w-full h-20 flex justify-center items-center">
      <div className="w-full flex justify-around items-center">
       
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo Meu Esporte"
            className="h-10 w-auto object-contain" 
          />
          <span className="text-[18px] font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Meu Esporte
          </span>
        </div>

        
        <BottomSheet />
      </div>
    </header>
  );
};

export default Header;
