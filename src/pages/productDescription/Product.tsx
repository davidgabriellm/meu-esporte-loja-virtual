import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import PriceFormatter from "../../components/priceFormatter/PriceFormatter";
import Carousel from "../../components/carouselImage/carousel";
import { mock } from "../../../mock";

const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id!);

  if (isLoading) return <p className="p-4">Carregando produto...</p>;
  if (error) return <p className="p-4 text-red-600">Erro ao carregar produto</p>;
  if (!product) return <p className="p-4">Produto não encontrado</p>;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-gray-100 p-5 py-8 pb-2">
      <h2 className="text-xl font-bold">{product.name}</h2>

      <img src={product.image_url} alt={product.name} className="w-64 rounded-lg" />

      <span className="text-lg font-semibold text-green-600">
        <PriceFormatter value={product.price} />
      </span>

      <p className="text-gray-600">{product.description ?? "Sem descrição"}</p>

      <span className="text-sm text-yellow-600">Avaliação: 2.6</span>

      <button className="w-full rounded-lg bg-blue-700 px-4 py-2 text-white">
        Comprar agora
      </button>

      <h3 className="flex text-left w-full font-bold text-xl mt-2">
        Você também pode gostar
      </h3>

      <Carousel produtos={mock} />

      {/* <div className="hidden lg:flex"></div> */}
      
    </div>
  );
};

export default Product;
