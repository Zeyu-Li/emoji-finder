import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset URLs, so the committed build/ keeps working when GitHub Pages serves it from /emoji-finder/build/
  base: './',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
