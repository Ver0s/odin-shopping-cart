import type { Product } from "../../types";
import { Link } from "react-router-dom";

type ProductCardProps = Pick<
    Product,
    "id" | "title" | "price" | "image" | "rating"
> & {
    onAddToCart: (id: number) => void;
};

export default function ProductCard({
    title,
    price,
    image,
    id,
    rating,
    onAddToCart,
}: ProductCardProps): JSX.Element {
    return (
        <article className="flex flex-col justify-between border-b pb-4">
            <div>
                <Link to={`/products/${id}`}>
                    <img
                        src={image}
                        alt={title}
                        className="mx-auto h-44 w-40 object-contain"
                    />
                    <h2 className="mt-4 mb-2 font-bold">{title}</h2>
                </Link>
                <div className="flex items-center">
                    <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="text-sm">
                        <b>{rating.rate}</b> ({rating.count})
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-700">{price}$</p>
                <button
                    className="rounded-md bg-indigo-700 px-3 py-2 text-white transition-colors hover:bg-indigo-900"
                    onClick={() => {
                        onAddToCart(id);
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </article>
    );
}
