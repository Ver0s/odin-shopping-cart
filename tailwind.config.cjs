/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
			fontFamily: {
				kumbhSans: "'Kumbh Sans', sans-serif",
			},
		},
	},
	plugins: [],
};
