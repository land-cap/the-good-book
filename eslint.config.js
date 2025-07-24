import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [js.configs.recommended,

	...tsEslint.configs.recommended, ...tsEslint.configs.recommendedTypeChecked, {
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},

	{
		plugins: {
			react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y,
		}, rules: {
			...react.configs.recommended.rules, ...reactHooks.configs.recommended.rules, ...jsxA11y.configs.recommended.rules,
			'@typescript-eslint/no-floating-promises': 'warn',
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'no-restricted-imports': ['error', {
				patterns: [{
					regex: '/_/',
					message: 'Import from the private _ folder is only allowed in client.ts, server.ts or shared.ts at the same directory level.',
				}],
			}],
		}, settings: {
			react: {
				version: 'detect',
			},
		},
	},

	{
		files: ['**/client.ts', '**/server.ts', '**/shared.ts'],
		rules: {
			'no-restricted-imports': 'off',
		},
	}]