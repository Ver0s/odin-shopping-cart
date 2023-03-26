import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
	return (
		<>
			<h1>The one stop shop for all your needs</h1>
			<p>
				Looking for some clothes, or maybe a new monitor? We&apos;ve got
				you covered, <span className="font-bold">everything</span> is
				here.
			</p>
			<img src={homeImg} className="hidden max-w-lg lg:block" />
	);
}
