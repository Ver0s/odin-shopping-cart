import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from './Header';
import useLocalStorage from '../hooks/useLocalStorage';
// import Footer from './components/Footer';

// TODO
// 2. Create proper details page
// 3. Setup filtering with cards
// 4. Make the website more attractive, take inspiration from frontend mentor project

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
			<main>
				<Outlet context={{ cart, setCart, handleAddToCart }} />
			</main>
			{/* <Footer /> */}
		</>
	);
}

export function useCart() {
	return useOutletContext<ContextType>();
}
