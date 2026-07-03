import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Safe fallback for base path configuration
const repoName = '/turismo-react/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoName,
})
