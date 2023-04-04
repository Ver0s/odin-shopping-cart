import { useCart } from '../../components/Layout';
import useFakeStore from '../../hooks/useFakeStore';
import type { Product } from '../../types';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

export default function Cart() {
	const { data, isLoading, error } = useFakeStore<Product[]>(
		'https://fakestoreapi.com/products'
	);
	const { cart, handleClearCart } = useCart();

	if (error !== '') return <p>Something went wrong: {error}</p>;

	if (isLoading) return <Spinner />;

	if (data === null) return <p>Cart products not found</p>;

	if (cart.length === 0) {
		return (
			<div className="mt-4 text-center xl:mt-8">
				<p className="mb-4 text-lg">Your cart is currently empty.</p>
				<Link
					to={'/products'}
					className="inline-block self-start rounded-lg bg-indigo-700 py-3 px-6 text-center font-bold text-white transition-colors hover:bg-indigo-900"
				>
					Shop now
				</Link>
			</div>
		);
	}

	const cartProducts = data
		.filter((product) => cart.some((item) => item.productId === product.id))
		.map((product) => ({
			...product,
			quantity:
				cart.find((item) => item.productId === product.id)?.quantity ??
				1,
		}));

	const totalPrice = cartProducts.reduce(
		(total, currentProduct) =>
			total + currentProduct.price * currentProduct.quantity,
		0
	);

	return (
		<div className="mx-auto flex h-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:justify-between xl:gap-28 xl:px-0 xl:py-8">
			<div className="md:flex-[2]">
				<div className="mb-4 flex items-center justify-between">
					<h1 className="text-xl font-bold">Your cart</h1>
					<button
						onClick={handleClearCart}
						className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							></path>
							<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
							<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
							<path d="M17 17h-11v-14h-2"></path>
							<path d="M6 5l8 .571m5.43 4.43l-.429 3h-13"></path>
							<path d="M17 3l4 4"></path>
							<path d="M21 3l-4 4"></path>
						</svg>
						Clear Cart
					</button>
				</div>
				<ul className="space-y-4">
					{cartProducts.map((product) => (
						<li key={product.id}>
							<CartProduct
								id={product.id}
								title={product.title}
								price={product.price}
								image={product.image}
								initialQuantity={product.quantity}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className="md:sticky md:top-[97px] md:flex-1 md:self-start xl:top-[123px]">
				<div className="flex items-center justify-between text-lg font-bold">
					<h2>Total:</h2>
					<span>{totalPrice.toFixed(2)}$</span>
				</div>
				<Link
					to="#"
					className="mt-4 block rounded-lg bg-indigo-700 py-3 text-center font-bold text-white transition-colors hover:bg-indigo-900"
				>
					Checkout
				</Link>
			</div>
		</div>
	);
}
