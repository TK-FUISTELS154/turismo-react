import { execSync } from 'child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dynamically extract the repository name from the Git remote URL
let repoName = '/'
try {
  const remoteUrl = execSync('git config --get remote.origin.url').toString().trim()
  const match = remoteUrl.match(/\/([^/]+)\.git$/)
  if (match) {
    repoName = `/${match[1]}/`
  }
} catch (e) {
  console.warn('Could not determine git repository name, defaulting to root "/"')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoName,
})
