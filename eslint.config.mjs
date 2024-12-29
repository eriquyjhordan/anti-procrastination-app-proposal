import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
    'next/typescript',
  ),
  {
    plugins: {
      tailwindcss,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    },
  },
]

export default eslintConfig
