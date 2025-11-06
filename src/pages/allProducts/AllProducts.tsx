import { mock } from "../../../mock";
import { useState } from "react";
import PriceFormatter from "../../components/priceFormatter/PriceFormatter";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cart.store";
import { Product } from "../../../mock";

import { MdOutlineAddShoppingCart } from "react-icons/md";

const AllProducts = () => {
  const navigate = useNavigate();
  const [ativo, setAtivo] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const searchLowerCase = search.toLowerCase();
  const { addToCart } = useCartStore();

  const filteredMock = mock.filter((product) =>
    product.product_name.toLowerCase().includes(searchLowerCase),
  );

  const onSeeDetailsClick = (product: Product) => {
    navigate(
      `/descricao-produto?title=${encodeURIComponent(
        product.product_name,
      )}&price=${product.product_price}&image=${encodeURIComponent(
        product.image_url,
      )}&description=${encodeURIComponent(
        product.description ?? "Sem descrição",
      )}`,
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      description: product.description ?? "Sem descrição",
      quantity: 1,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    setMessage("Esse produto foi adicionado ao carrinho");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <>
      {message && (
        <div className="fixed top-0 z-50 flex w-full items-center justify-center gap-4 bg-orange-400 p-4 text-white shadow-lg lg:right-1/4 lg:w-[600px] lg:rounded-b-[6px] lg:p-2">
          <MdOutlineAddShoppingCart size={40} />
          {message}
        </div>
      )}

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-100 bg-white px-1 py-2 text-gray-700 placeholder-gray-400 shadow-sm transition duration-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none"
        placeholder="Pesquise o seu produto"
      />
      <div className="grid grid-cols-1 items-center justify-center gap-12 bg-gray-100 py-8 pb-2 lg:grid-cols-4 lg:items-stretch lg:gap-5 lg:p-5">
        {filteredMock.map((product) => (
          <div
            key={product.ID}
            onClick={() => setAtivo(product.ID)}
            className={`relative flex cursor-pointer items-center justify-center gap-8 border-b-2 p-4 transition duration-500 lg:flex-col lg:rounded-[3px] lg:border lg:border-gray-200 ${ativo === product.ID ? "mb-7 scale-110 border-b-gray-200 lg:mb-0 lg:scale-105 md:scale-100" : "scale-100 border-b-transparent"} lg:cursor-auto lg:hover:shadow-lg`}
          >
            <img
              src={product.image_url}
              className={`flex w-24 items-center transition-transform duration-500 lg:w-40 ${ativo === product.ID ? "mb-7 scale-110" : "scale-100"} `}
            />
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <button
                className="w-full text-left"
                onClick={() => onSeeDetailsClick(product)}
              >
                <h2 className="text-md line-clamp-2 cursor-pointer font-bold text-gray-600 duration-100 lg:transition-all lg:delay-200 lg:hover:text-orange-500">
                  {product.product_name.charAt(0).toUpperCase() +
                    product.product_name.slice(1).toLowerCase()}
                </h2>
              </button>
              <span className="w-full text-left">
                <PriceFormatter value={product.product_price} />
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute right-8 bottom-2 cursor-pointer rounded-3xl bg-orange-500 p-2.5 hover:bg-blue-600 md:right-10 md:bottom-3 lg:right-7 lg:bottom-4"
              >
                <MdOutlineAddShoppingCart size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
