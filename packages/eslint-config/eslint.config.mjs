import { defineConfig, globalIgnores } from 'eslint/config'

/* plugins */
import js from '@eslint/js'
import ts from 'typescript-eslint'
import style from '@stylistic/eslint-plugin'

/* configuration */
export default defineConfig([
  globalIgnores(['build/*']),
  js.configs.recommended,
  ts.configs.recommended,
  style.configs.recommended,
])
