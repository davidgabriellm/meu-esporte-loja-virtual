import PriceFormatter from '../../components/priceFormatter/PriceFormatter';
import useCartStore from '../../store/cart.store';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDeleteForever } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";

const ShoppingCart = () => {
  const { cart, removeItemToCart, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <div className="bg-gray-100 p-4 grid grid-cols-1 gap-4">
      {cart.map(c => (
        <div key={c.ID} className="relative flex-col gap-4 flex border-b-2 border-gray-200 pt-7">
          <button 
            className='absolute top-0 left-0' 
            onClick={() => removeItemToCart(c.ID)}
          >
            <MdCancelPresentation size={22}/>
          </button>

          <div className='flex gap-3 justify-start items-center'>
            <img src={c.image_url} alt={c.product_name} className="w-14" />
            <div className="flex flex-col">
              <h2 className='line-clamp-1 max-w-[275px] text-gray-800 font-semibold text-[18px]'>
                {c.product_name}
              </h2>
              <p className='line-clamp-2 max-w-[275px] text-gray-800 text-[13px]'>
                {c.description}
              </p>
            </div>
          </div>

          <div className='flex justify-between gap-5'>
            <PriceFormatter value={c.product_price} />
            <div className='flex gap-3 items-center'>
              
              
              <button
                onClick={() => updateQuantity(c.ID, Math.max(c.quantity - 1, 1))}
              >
                <MdDeleteForever className='text-red-700' size={25}/>
              </button>

              <span className='text-[20px]'>{c.quantity}</span>
              
             
              <button onClick={() => updateQuantity(c.ID, c.quantity + 1)}>
                <IoMdAddCircleOutline size={25}/>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='flex justify-between items-center'>
        <span className='text-2xl'>Total</span>
        <span>{<PriceFormatter value={getTotalPrice()}/>}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
