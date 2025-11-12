import PriceFormatter from "../../components/priceFormatter/PriceFormatter";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever, MdCancelPresentation } from "react-icons/md";
import { useRemoveFromCart } from "../../hooks/cart/useRemoveCartItem";
import { useUpdateCartQuantity } from "../../hooks/cart/useUpdateCartItem";
import { useCartItems } from "../../hooks/cart/useCartItems";

const ShoppingCart = () => {
  const { data: cart, isLoading } = useCartItems();
  const { mutate: removeItem } = useRemoveFromCart();
  const { mutate: updateQuantity } = useUpdateCartQuantity();

  if (isLoading) return <p>Carregando carrinho...</p>;
  if (!cart || cart.length === 0) return <p className="text-2xl p-4">Seu carrinho está vazio.</p>;

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="grid grid-cols-1 gap-4 bg-gray-100 p-4">
      {cart.map((c) => (
        <div
          key={c.id}
          className="relative flex flex-col gap-4 border-b-2 border-gray-200 pt-7"
        >
          <button
            className="absolute top-0 left-0"
            onClick={() => removeItem(c.id)}
          >
            <MdCancelPresentation size={22} />
          </button>

          <div className="flex items-center justify-start gap-3">
            <img src={c.image_url} alt={c.name} className="w-14" />
            <div className="flex flex-col">
              <h2 className="text-[18px] font-semibold text-gray-800">
                {c.name}
              </h2>
              <p className="text-[13px] text-gray-800">{c.description}</p>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <PriceFormatter value={c.price} />
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateQuantity({
                    id: c.id,
                    quantity: Math.max(c.quantity - 1, 1),
                  })
                }
              >
                <MdDeleteForever
                  className={c.quantity === 1 ? "text-gray-300" : "text-red-700"}
                  size={25}
                />
              </button>

              <span className="text-[20px]">{c.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity({ id: c.id, quantity: c.quantity + 1 })
                }
              >
                <IoMdAddCircleOutline size={25} />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between">
        <span className="text-2xl">Total</span>
        <span>
          <PriceFormatter value={getTotal()} />
        </span>
      </div>
    </div>
  );
};

export default ShoppingCart;
