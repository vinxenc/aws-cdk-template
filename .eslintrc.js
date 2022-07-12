module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	globals: {
		HttpHandler: true,
		HttpEventRequest: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'import/no-absolute-path': ['off'],
		'import/no-extraneous-dependencies': ['off'],
		'import/extensions': ['off'],
		'import/no-unresolved': ['off'],
		'import/prefer-default-export': ['off'],
		'no-new': ['off'],
		'max-classes-per-file': ['off'],
		'class-methods-use-this': ['off'],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ "argsIgnorePattern": "^_" }
		],
		"no-shadow": "off",
  		"@typescript-eslint/no-shadow": ["error"]
	},
}
