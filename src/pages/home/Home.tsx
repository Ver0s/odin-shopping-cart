import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../assets/homeImg.webp';

export default function Home(): JSX.Element {
	return (
		<div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 xl:px-0">
			<div className="flex max-w-2xl flex-col gap-4">
				<h1 className="text-6xl font-bold">
					The one stop shop for all your needs
				</h1>
				<p className="text-xl">
					Looking for some clothes, or maybe a new monitor? We&apos;ve
					got you covered,{' '}
					<span className="font-bold text-orange-500">
						everything
					</span>{' '}
					is here.
				</p>
				<Link
					to={'/products'}
					className="inline-block self-start rounded-lg bg-orange-500 py-3 px-6 text-center font-bold text-white"
				>
					Shop now
				</Link>
			</div>
			<img src={homeImg} className="hidden max-w-lg lg:block" />
		</div>
	);
}
