/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
			},
			fontFamily: {
				kumbhSans: "'Kumbh Sans', sans-serif",
			},
		},
	},
	plugins: [],
};
