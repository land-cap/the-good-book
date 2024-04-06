/** @type {import('eslint').Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	'ignorePatterns': ['/styled-system/*'],
	rules: {
		'sort-imports': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		// These opinionated rules are enabled in stylistic-type-checked above.
		// Feel free to reconfigure them to your own preference.
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',

		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: { attributes: false },
			},
		],

		'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
		'prefer-arrow-callback': 'error',
		'arrow-body-style': 'off',

		'prettier/prettier': [
			'warn',
			{},
			{
				'usePrettierrc': true,
			},
		],

		'@typescript-eslint/ban-ts-comment': 'warn',

		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'import/no-cycle': 'error',
	},
}

module.exports = config
