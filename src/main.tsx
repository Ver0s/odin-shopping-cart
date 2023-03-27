import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/product-details/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter(
	[
		{
			element: <Layout />,
			path: '/',
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'products',
					element: <Products />,
				},
				{
					path: 'products/:productId',
					element: <ProductDetails />,
				},
				{
					path: 'cart',
					element: <Cart />,
				},
			],
		},
	],
	{ basename: '/odin-shopping-cart/' }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
