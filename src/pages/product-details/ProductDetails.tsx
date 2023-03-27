import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFakeStore from '../../hooks/useFakeStore';
import QuantityInput from '../../components/QuantityInput';
import { useCart } from '../../components/Layout';
import type { Product } from '../../types';
import Spinner from '../../components/Spinner';

// TODO:
// Make the card full width, put both buttons to change quantity and add to cart at the bottom with flex or margin auto
// Make photos sizes more unified

export default function ProductDetails() {
	const { productId } = useParams();
	const [quantity, setQuantity] = useState(1);
	const { data, isLoading, error } = useFakeStore<Product>(
		`https://fakestoreapi.com/products/${productId}`
	);
	const { handleAddToCart } = useCart();

	if (isLoading) return <Spinner />;

	if (error !== '') return <p>Something went wrong: {error}</p>;

	if (data === null) return <p>No such product found</p>;

	if (status === 'loading') return <Spinner />;

	if (status === 'error') {
		return (
			<span className="text-xl font-bold text-red-600">
				Failed to fetch product details
			</span>
		);
	}

	return (
		<div className="p-4">
			<Link to=".." relative="path">
				<div className="flex gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-arrow-narrow-left"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
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
						<path d="M5 12l14 0"></path>
						<path d="M5 12l4 4"></path>
						<path d="M5 12l4 -4"></path>
					</svg>
					Back to all products
				</div>
			</Link>
			<div className="flex flex-col sm:flex-row">
				<img
					src={data.image}
					alt={data.title}
					className="mx-auto h-72 object-contain p-4"
				/>
				{/* I feel like the spacing is a bit too big */}
				<div className="space-y-4">
					<h1 className="text-xl font-bold">{data.title}</h1>
					<p className="text-slate-500">{data.description}</p>
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-bold">{data.price}$</h2>
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
							<p className="ml-2 text-sm font-bold">
								{data.rating.rate}
							</p>
							<span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500"></span>
							<span className="text-sm font-medium">
								{data.rating.count} reviews
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-4 md:flex-row">
						<QuantityInput
							quantity={quantity}
							onQuantityDecrement={handleQuantityDecrement}
							onQuantityIncrement={handleQuantityIncrement}
							onQuantityChange={handleQuantityChange}
						/>
						<button
							className="rounded-lg bg-orange-500 py-3 font-bold text-white"
							onClick={() => {
								handleAddToCart(Number(productId), quantity);
							}}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
