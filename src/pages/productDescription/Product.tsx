import { useSearchParams } from "react-router-dom";
import PriceFormatter from "../../components/priceFormatter/PriceFormatter";

const Product = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  return (
    <div className="flex flex-col gap-4 pb-2 py-8 bg-gray-100 justify-center items-center w-full p-5">
      <h2 className="text-xl font-bold">{title}</h2>
      {image && <img src={image} alt={title ?? ""} className="w-64 rounded-lg" />}
      <span className="text-lg font-semibold text-green-600">
        {price ? <PriceFormatter value={Number(price)} /> : "Preço indisponível"}
      </span>
      <p className="text-gray-600">{description}</p>
      <span className="text-sm text-yellow-600">Avaliação: 2.6</span>
      <button className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
        Adicionar à sacola
      </button>
    </div>
  );
};

export default Product;
