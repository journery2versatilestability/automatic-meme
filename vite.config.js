import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` is set so the app works when deployed under
// https://<user>.github.io/<repo>/  (GitHub Pages project site).
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || '/automatic-meme/',
  plugins: [react()],
})

