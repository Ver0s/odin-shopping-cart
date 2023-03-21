import { useState, useEffect } from 'react';

export default function useFakeStore<T>(url: string, initialValue: T) {
	const [data, setData] = useState<T>(initialValue);
	const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
		'loading'
	);

	async function fetchData() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setStatus('error');
				return;
			}
			const data = (await response.json()) as T;
			setData(data);
			setStatus('success');
		} catch (err) {
			console.error(err);
			setStatus('error');
		}
	}

	useEffect(() => {
		void fetchData();
	}, []);

	return { data, status };
}
