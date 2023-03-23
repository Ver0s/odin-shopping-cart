import React from 'react';
import { useCart } from '../../Layout';
import useFakeStore from '../../hooks/useFakeStore';
import type { Product } from '../../types';

export default function Cart() {
	const { data, status } = useFakeStore<Product[]>(
		'https://fakestoreapi.com/products',
		[]
	);
	const { cart, setCart } = useCart();

	const cartProducts = data
		.filter((product) => cart.some((item) => item.productId === product.id))
		.map((product) => ({
			...product,
			quantity: cart.find((item) => item.productId === product.id)
				?.quantity,
		}));

	if (status === 'loading') return <span>loading...</span>;

	return (
		<>
			{cartProducts.map((product) => (
				<div key={product.id}>
					<span>
						{product.title} {product.quantity}
					</span>
				</div>
			))}
			<button
				onClick={() => {
					setCart([]);
				}}
			>
				Clear Cart
			</button>
		</>
	);
}
