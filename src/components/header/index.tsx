import logo  from "../../assets/ChatGPT Image 9 de jul. de 2025, 12_08_44.png";


const Header = () => {
  return (
    <header className="bg-gray-900 w-full h-40 flex justify-center items-center ">
      <div className="w-9/12 flex justify-between items-center">
        <div className="flex w-1/4  items-center justify-center gap-5 ">
          <span className="w-1xl">
            <img
              src={logo}
              alt=""
              className="w-full h-10"
            />
          </span>
          <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            <strong>Meu Esporte</strong>
          </span>
        </div>
        <nav className="w-4/12 bg-blue-500">
          <ul className="flex flex-row justify-around items-center gap-3 p-3">
            <li className="font-bold text-amber-50"><button>Home</button></li>
            <li className="font-bold text-amber-50"><button>Todos Os Produtos</button></li>
            <li className="font-bold text-amber-50"><button>Carrinho</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
