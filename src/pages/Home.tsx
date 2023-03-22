import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
	return (
		<>
			<h1>Some catchy text</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
				quod!
			</p>
			<Link to={'/products'}>Shop now</Link>
		</>
	);
}
