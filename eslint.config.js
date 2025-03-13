import globals from 'globals'
import jseslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['docs', 'node_modules', 'vite.config.ts'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.recommended,
]
