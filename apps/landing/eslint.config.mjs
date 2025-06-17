import { defineConfig } from 'eslint/config'

import horus from '@horus-software/eslint-config'

import { dirname } from 'path'

import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const next = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default defineConfig([
  horus,
  next,
])
