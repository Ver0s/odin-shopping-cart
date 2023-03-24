import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFakeStore from '../../hooks/useFakeStore';
import type { Product } from '../../types';

export default function ProductDetails() {
	const { productId } = useParams();
	const { data, status } = useFakeStore<Product>(
		`https://fakestoreapi.com/products/${productId}`,
		null
	);

	if (status === 'loading') return <span>loading</span>;

	if (status === 'error') {
		return (
			<span className="text-xl font-bold text-red-600">
				Failed to fetch product details
			</span>
		);
	}

	return (
		<div>
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
					Back to products
				</div>
			</Link>
			<br />
			<img src={data.image} alt={data.title} className="h-48" />
			{data.title}
		</div>
	);
}
