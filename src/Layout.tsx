import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from './components/Header';
import useLocalStorage from './hooks/useLocalStorage';
// import Footer from './components/Footer';

type CartType = {
	productId: number;
	quantity: number;
};

type ContextType = {
	cart: CartType[];
	setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
	handleAddToCart: (id: number) => void;
};

export default function Layout() {
	const [cart, setCart] = useLocalStorage<CartType[]>('cartProducts', []);
	const totalProducts = cart.reduce(
		(total, currentProduct) => total + currentProduct.quantity,
		0
	);

	function handleAddToCart(id: number) {
		let nextCart;
		const isInCart = cart.some((product) => product.productId === id);

		if (isInCart) {
			nextCart = cart.map((product) => {
				if (product.productId === id) {
					return { ...product, quantity: product.quantity + 1 };
				} else {
					return product;
				}
			});
		} else {
			nextCart = [...cart, { productId: id, quantity: 1 }];
		}

		setCart(nextCart);
	}

	return (
		<>
			<Header totalProducts={totalProducts} />
			<Outlet context={{ cart, setCart, handleAddToCart }} />
			{/* <Footer /> */}
		</>
	);
}

export function useCart() {
	return useOutletContext<ContextType>();
}
