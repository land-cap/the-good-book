import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
   js.configs.recommended,

   ...tsEslint.configs.recommended,
   ...tsEslint.configs.recommendedTypeChecked,
   {
      languageOptions: {
         parserOptions: {
            project: './tsconfig.json',
         },
      },
   },

   {
      files: ['**/*.{ts,tsx,js,jsx,json}'],
      plugins: {
         react,
         'react-hooks': reactHooks,
         'jsx-a11y': jsxA11y,
         'simple-import-sort': simpleImportSort,
      },
      rules: {
         ...react.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,
         ...jsxA11y.configs.recommended.rules,
         // typescript
         '@typescript-eslint/no-floating-promises': 'warn',
         '@typescript-eslint/only-throw-error': 'off',
         // imports
         'no-restricted-imports': [
            'error',
            {
               patterns: [
                  {
                     regex: '/_/',
                     message:
                        'Import from the private _ folder is only allowed in client.ts, server.ts or shared.ts at the same directory level.',
                  },
               ],
            },
         ],
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error',
         // react
         'react/prop-types': 'off',
         'react/react-in-jsx-scope': 'off',
         'react/jsx-uses-react': 'off',
      },
      settings: {
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
   },
]
