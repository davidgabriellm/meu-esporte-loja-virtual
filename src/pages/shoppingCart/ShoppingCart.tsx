import PriceFormatter from "../../components/priceFormatter/PriceFormatter";
import useCartStore from "../../store/cart.store";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";

const ShoppingCart = () => {
  const { cart, removeItemToCart, updateQuantity, getTotalPrice } =
    useCartStore();

  return (
    <div className="grid grid-cols-1 gap-4 bg-gray-100 p-4">
      {cart.map((c) => (
        <div
          key={c.id}
          className="relative flex flex-col gap-4 border-b-2 border-gray-200 pt-7"
        >
          <button
            className="absolute top-0 left-0"
            onClick={() => removeItemToCart(c.id)}
          >
            <MdCancelPresentation size={22} />
          </button>

          <div className="flex items-center justify-start gap-3">
            <img src={c.image_url} alt={c.name} className="w-14" />
            <div className="flex flex-col">
              <h2 className="line-clamp-1 max-w-[275px] text-[18px] font-semibold text-gray-800">
                {c.name}
              </h2>
              <p className="line-clamp-2 max-w-[275px] text-[13px] text-gray-800">
                {c.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <PriceFormatter value={c.price} />
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateQuantity(c.id, Math.max(c.quantity - 1, 1))
                }
              >
                <MdDeleteForever
                  className={
                    c.quantity === 1 ? "text-gray-300" : "text-red-700"
                  }
                  size={25}
                />
              </button>

              <span className="text-[20px]">{c.quantity}</span>

              <button onClick={() => updateQuantity(c.id, c.quantity + 1)}>
                <IoMdAddCircleOutline size={25} />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between">
        <span className="text-2xl">Total</span>
        <span>{<PriceFormatter value={getTotalPrice()} />}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
