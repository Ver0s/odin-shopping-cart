import { useState } from "react";
import { useCart } from "../../components/Layout";
import QuantityInput from "../../components/QuantityInput";
import { Link } from "react-router-dom";

type CartProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  initialQuantity: number;
};

export default function CartProduct({
  id,
  title,
  price,
  image,
  initialQuantity,
}: CartProductProps) {
  const { handleUpdateCart, handleDeleteFromCart } = useCart();
  const [quantity, setQuantity] = useState(initialQuantity);

  function handleUpdateCartQuantity(nextQuantity: number) {
    handleUpdateCart(id, nextQuantity);
  }

  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-[72px] w-[60px] object-contain"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <Link to={`/products/${id}`} className="hover:underline">
            {title}
          </Link>
          <button
            onClick={() => {
              handleDeleteFromCart(id);
            }}
            className="rounded-lg p-1 transition-colors hover:bg-gray-100 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
            <span className="sr-only">Remove product from cart</span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <QuantityInput
            quantity={quantity}
            setQuantity={setQuantity}
            size="sm"
            updateCartQuantity={handleUpdateCartQuantity}
          />
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
}
