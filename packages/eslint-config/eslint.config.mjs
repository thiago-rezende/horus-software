import { defineConfig } from 'eslint/config'

/* globals */
import globals from 'globals'

/* plugins */
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

/* configuration */
export default defineConfig([
  { files: ['**/*.{js,mjs}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,mjs}'], plugins: { '@js': js }, extends: ['@js/recommended'] },
  { files: ['**/*.{js,mjs}'], plugins: { '@stylistic': stylistic }, extends: ['@stylistic/recommended'] },
])
