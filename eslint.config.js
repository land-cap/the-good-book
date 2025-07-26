import js from '@eslint/js'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import panda from '@pandacss/eslint-plugin'

export default defineConfig([
   globalIgnores([
      'src/routeTree.gen.ts',
      '.nitro/**',
      '.output/**',
      '.tanstack/**',
      'public/**',
      'styled-system/**',
   ]),
   js.configs.recommended,
   ...tsEslint.configs.recommended,
   ...tsEslint.configs.recommendedTypeChecked,

   {
      languageOptions: {
         // parser: tsEslint.parser, // usually set by the ts configs already; uncomment if needed
         parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
         },
         globals: { ...globals.browser, ...globals.node },
      },
   },

   {
      files: ['src/**/*.{ts,tsx,js,jsx}'],
      plugins: {
         react,
         'react-hooks': reactHooks,
         'jsx-a11y': jsxA11y,
         'simple-import-sort': simpleImportSort,
         '@pandacss': panda,
      },
      rules: {
         ...react.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,
         ...jsxA11y.configs.recommended.rules, // typescript
         '@typescript-eslint/no-floating-promises': 'warn',
         '@typescript-eslint/only-throw-error': 'off', // imports
         'no-restricted-imports': [
            'error',
            {
               patterns: [
                  {
                     regex: '/_/',
                     message:
                        'Import from the private (_) folder is only allowed in client.ts, server.ts or shared.ts at the same directory level.',
                  },
               ],
            },
         ],
         'simple-import-sort/imports': 'error',
         'simple-import-sort/exports': 'error', // react
         'react/prop-types': 'off',
         'react/react-in-jsx-scope': 'off',
         'react/jsx-uses-react': 'off',

         ...panda.configs.recommended.rules,
         '@pandacss/no-unsafe-token-fn-usage': 'off',
         '@pandacss/no-hardcoded-color': 'off',
      },
      settings: {
         react: {
            version: 'detect',
         },
         '@pandacss/configPath': 'panda.config.ts',
      },
   },

   {
      files: ['**/client.ts', '**/server.ts', '**/shared.ts'],
      rules: {
         'no-restricted-imports': 'off',
      },
   },
])
