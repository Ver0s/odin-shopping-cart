import React from 'react';
import type { Product } from '../../types';
import { Link } from 'react-router-dom';

type ProductCardProps = Pick<Product, 'id' | 'title' | 'price' | 'image'> & {
	onAddToCart: (id: number) => void;
};

export default function ProductCard({
	title,
	price,
	image,
	id,
	onAddToCart,
}: ProductCardProps): JSX.Element {
	return (
		<div className="rounded-lg border border-gray-200 shadow">
			<Link to={`/products/${id}`}>
				<img
					src={image}
					alt={title}
					className="mx-auto h-48 object-contain p-2"
				/>
			</Link>
			<div className="px-2 pb-2">
				<h2 className="mb-2 font-semibold text-gray-800">{title}</h2>
				<div className="flex items-center justify-between">
					<p className="font-semibold text-gray-700">{price}$</p>
					<button
						className="rounded-md bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
						onClick={() => {
							onAddToCart(id);
						}}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
