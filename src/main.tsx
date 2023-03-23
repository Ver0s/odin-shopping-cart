import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/product-details/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/products/:productId',
				element: <ProductDetails />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
