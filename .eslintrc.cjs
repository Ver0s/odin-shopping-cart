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
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	},
};
