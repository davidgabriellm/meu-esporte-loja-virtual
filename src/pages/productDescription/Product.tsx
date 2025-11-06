import { useSearchParams } from "react-router-dom";
import PriceFormatter from "../../components/priceFormatter/PriceFormatter";
import Carousel from "../../components/carouselImage/carousel";
import { mock } from "../../../mock";

const Product = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-gray-100 p-5 py-8 pb-2">
      <h2 className="text-xl font-bold">{title}</h2>
      {image && (
        <img src={image} alt={title ?? ""} className="w-64 rounded-lg" />
      )}
      <span className="text-lg font-semibold text-green-600">
        {price ? (
          <PriceFormatter value={Number(price)} />
        ) : (
          "Preço indisponível"
        )}
      </span>
      <p className="text-gray-600">{description}</p>
      <span className="text-sm text-yellow-600">Avaliação: 2.6</span>
      <button className="w-full rounded-lg bg-blue-700 px-4 py-2 text-white">
        Comprar agora
      </button>
      <h3 className="flex text-left w-full font-bold text-xl mt-2">Você também pode gostar</h3>
      <Carousel produtos={mock} />
      {/* <div className="hidden lg:flex">
          
      </div> */}
    </div>
  );
};

export default Product;
