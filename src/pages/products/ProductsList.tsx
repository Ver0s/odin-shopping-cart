import React from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import useFakeStore from '../../hooks/useFakeStore';
import { useCart } from '../../Layout';
import type { Product } from '../../types';

export default function ProductsList() {
	const { data, status } = useFakeStore<Product[]>(
		'https://fakestoreapi.com/products',
		[]
	);
	const { handleAddToCart } = useCart();

	if (status === 'loading') {
		return (
			<div className="mx-auto grid max-w-screen-xl grid-cols-fluid gap-4 p-4 xl:px-0">
				{Array(20)
					.fill(null)
					.map((_, index) => (
						<SkeletonCard key={index} />
					))}
			</div>
		);
	}

	if (status === 'error') {
		return (
			<span className="text-xl font-bold text-red-600">
				Failed to fetch products
			</span>
		);
	}

	return (
		<div className="mx-auto grid max-w-screen-xl grid-cols-fluid gap-4 p-4 xl:px-0">
			{/* maybe pass the whole product here, I think it will be more flexible */}
			{data.map((product) => (
				<ProductCard
					key={product.id}
					id={product.id}
					title={product.title}
					price={product.price}
					image={product.image}
					onAddToCart={handleAddToCart}
				/>
			))}
		</div>
	);
}
