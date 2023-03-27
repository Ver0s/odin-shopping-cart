module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'standard-with-typescript',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', 'testing-library', 'jest-dom'],
	rules: {
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
