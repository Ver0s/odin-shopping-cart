/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(12rem, 1fr))',
			},
		},
	},
	plugins: [],
};
