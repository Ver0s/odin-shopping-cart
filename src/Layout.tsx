import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';

type CartType = {
	productId: number;
	quantity: number;
};

type ContextType = {
	cart: CartType;
	setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
};

export default function Layout() {
	const [cart, setCart] = useState<CartType[]>([]);

	return (
		<>
			<Header />
			<Outlet context={{ cart, setCart }} />
			{/* <Footer /> */}
		</>
	);
}

export function useCart() {
	return useOutletContext<ContextType>();
}
