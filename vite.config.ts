import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repository && !repository.endsWith('.github.io')
  ? `/${repository}/`
  : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss()
  ],
})
