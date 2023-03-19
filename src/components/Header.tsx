import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
	totalProducts: number;
};

export default function Header({ totalProducts }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 bg-slate-400 p-4">
			<div className="mx-auto flex max-w-screen-xl justify-between">
				<span>Logo</span>
				<nav>
					<ul className="flex items-center gap-4">
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/products'}>Products</Link>
						</li>
						<li>
							<Link to={'/cart'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-shopping-bag inline-block"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									></path>
									<path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
									<path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
								</svg>
								<span>{totalProducts}</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
