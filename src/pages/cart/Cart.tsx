import React from 'react';
import { useCart } from '../../components/Layout';
import useFakeStore from '../../hooks/useFakeStore';
import type { Product } from '../../types';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

// TODO:
// Add divider to each item as a border at the bottom
// Add total price of items and checkout link

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
					className="inline-block self-start rounded-lg bg-orange-500 py-3 px-6 text-center font-bold text-white"
				>
					Start shopping now
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
		<div className="px-4 py-4 xl:px-0">
			<div className="mb-4 flex items-center justify-between">
				<h1 className="text-xl font-bold">Your cart</h1>
				<button onClick={handleClearCart}>Clear Cart</button>
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
	);
}
