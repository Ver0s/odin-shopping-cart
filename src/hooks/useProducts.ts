import { useState, useEffect } from 'react';
import type { Product } from '../types';

export default function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
		'loading'
	);

	async function fetchProducts() {
		try {
			const response = await fetch('https://fakestoreapi.com/products');
			if (!response.ok) {
				setStatus('error');
				return;
			}
			const data = (await response.json()) as Product[];
			setProducts(data);
			setStatus('success');
		} catch (err) {
			console.error(err);
			setStatus('error');
		}
	}

	useEffect(() => {
		void fetchProducts();
	}, []);

	return { products, status };
}
