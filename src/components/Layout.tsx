import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from './Header';
import useLocalStorage from '../hooks/useLocalStorage';
// import Footer from './Footer';

// TODO:
// 2. Create proper details page
// 3. Setup filtering with cards
// 4. Make the website more attractive, take inspiration from frontend mentor project
// 5. Make footer stick to bottom
// https://stackoverflow.com/questions/74144034/why-is-the-css-height100vh-rule-exceeding-the-viewport-height-on-mobile-device
// https://dev.to/nehalahmadkhan/how-to-make-footer-stick-to-bottom-of-web-page-3i14

type CartType = {
	productId: number;
	quantity: number;
};

type ContextType = {
	cart: CartType[];
	handleAddToCart: (id: number, quantityAdded?: number) => void;
	handleDeleteFromCart: (id: number) => void;
	handleClearCart: () => void;
	handleUpdateCart: (id: number, updatedQuantity: number) => void;
};

export default function Layout() {
	const [cart, setCart] = useLocalStorage<CartType[]>('cartProducts', []);
	const totalProducts = cart.reduce(
		(total, currentProduct) => total + currentProduct.quantity,
		0
	);

	function handleUpdateCart(id: number, updatedQuantity: number) {
		const nextCart = cart.map((product) => {
			if (product.productId === id) {
				return { ...product, quantity: updatedQuantity };
			} else {
				return product;
			}
		});
		setCart(nextCart);
	}

	function handleAddToCart(id: number, quantityAdded = 1) {
		let nextCart;
		const isInCart = cart.some((product) => product.productId === id);

		if (isInCart) {
			nextCart = cart.map((product) => {
				if (product.productId === id) {
					return {
						...product,
						quantity: product.quantity + quantityAdded,
					};
				} else {
					return product;
				}
			});
		} else {
			nextCart = [...cart, { productId: id, quantity: quantityAdded }];
		}

		setCart(nextCart);
	}

	function handleDeleteFromCart(id: number) {
		const nextCart = cart.filter((product) => product.productId !== id);
		setCart(nextCart);
	}

	function handleClearCart() {
		setCart([]);
	}

	return (
		<>
			<Header totalProducts={totalProducts} />
			{/* TODO: */}
			{/* I think I don't want to impose a certain max width globally on every element below */}
			{/* !!!Instead I should set it on every child separately!!! */}
			<main className="mx-auto max-w-screen-xl">
				<Outlet
					context={{
						cart,
						setCart,
						handleAddToCart,
						handleDeleteFromCart,
						handleClearCart,
						handleUpdateCart,
					}}
				/>
			</main>
			{/* <Footer /> */}
		</>
	);
}

export function useCart() {
	return useOutletContext<ContextType>();
}
