
import logo  from "../../assets/ChatGPT Image 9 de jul. de 2025, 12_08_44.png";
import BottomSheet from "../buttonSheet/BottomSheet";


const Header = () => {
  return (
    <header className="bg-gray-900 w-full h-28 flex justify-center items-center">
      <div className="w-full flex justify-around items-center">
        <div className="flex w-1/4  items-center justify-center gap-5 ">
          <span className="w-1xl">
            <img
              src={logo}
              alt=""
              className="w-full h-10"
            />
          </span>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            <strong>Meu Esporte</strong>
          </span>
        </div>
        <BottomSheet></BottomSheet>
      </div>
    </header>
  );
};

export default Header;
