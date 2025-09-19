import { mock } from '../../../mock';
import { useState } from 'react';
import PriceFormatter from '../../components/priceFormatter/PriceFormatter';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cart.store';
import { Product } from '../../../mock';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AllProducts = () => {
  const navigate = useNavigate();
  const [ativo, setAtivo] = useState<number | null>(null);
  const [search, setSearch] = useState<string>('');
  const [message, setMessage] = useState<string>(''); 

  const searchLowerCase = search.toLowerCase();
  const { addToCart } = useCartStore();

  const filteredMock = mock.filter(product =>
    product.product_name.toLowerCase().includes(searchLowerCase),
  );

  const onSeeDetailsClick = (product: Product) => {
    navigate(
      `/descricao-produto?title=${encodeURIComponent(
        product.product_name,
      )}&price=${product.product_price}&image=${encodeURIComponent(
        product.image_url,
      )}&description=${encodeURIComponent(
        product.description ?? 'Sem descrição',
      )}`,
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      description: product.description ?? 'Sem descrição',
      quantity: 1,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setMessage('Esse produto foi adicionado ao carrinho');

    setTimeout(() => {
      setMessage('');
    }, 2500);
  };

  return (
    <>
      {message && (
        <div className="fixed top-0 bg-orange-400 text-white p-4 shadow-lg z-50 flex items-center justify-center w-full gap-4">
          <MdOutlineAddShoppingCart size={40}/>
          {message}
        </div>
      )}

      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-1 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition duration-200"
        placeholder="Pesquise o seu produto"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-2 py-8 bg-gray-100 justify-center items-center">
        {filteredMock.map(product => (
          <div
            key={product.ID}
            onClick={() => setAtivo(product.ID)}
            className={`
              p-2 flex flex-col justify-center items-center cursor-pointer transition duration-500
              border-b-2
              ${
                ativo === product.ID
                  ? 'border-b-gray-200'
                  : 'border-b-transparent'
              }
            `}
          >
            <img
              src={product.image_url}
              className={`
                w-44 mb-2 transition-transform duration-500
                ${ativo === product.ID ? 'scale-110 mb-7' : 'scale-100'}
              `}
            />
            <div className="flex justify-center flex-col items-center gap-3 w-full">
              <button
                className="w-full text-left"
                onClick={() => onSeeDetailsClick(product)}
              >
                <h2 className="text-md font-bold line-clamp-2 text-gray-600">
                  {product.product_name.charAt(0).toUpperCase() +
                    product.product_name.slice(1).toLowerCase()}
                </h2>
              </button>
              <span className="text-left w-full">
                <PriceFormatter value={product.product_price} />
              </span>
              <button
                className="bg-blue-700 rounded-lg w-full text-white p-2"
                onClick={() => handleAddToCart(product)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
