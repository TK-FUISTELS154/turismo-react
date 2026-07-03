import { execSync } from 'child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dynamically extract the repository name from the environment variable (GitHub Actions)
// or the local Git config. Fallback to '/turismo-react/' if detection fails.
let repoName = '/'
if (process.env.GITHUB_REPOSITORY) {
  repoName = `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
} else {
  try {
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim()
    const match = remoteUrl.match(/\/([^/]+)\.git$/)
    if (match) {
      repoName = `/${match[1]}/`
    }
  } catch (e) {
    repoName = '/turismo-react/' // Safe fallback
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoName,
})
