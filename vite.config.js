import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude packages that shouldn't be pre-bundled
    exclude: [],
    // Entries point for dependency pre-bundling
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    // Hold the first optimizeDeps run until all dependencies are discovered
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: true, // This allows external access and disables host checking
    strictPort: true,
    // HMR disabled for Docker environments to prevent reload issues
    // Since these are preview containers, not development environments
    hmr: false,
    watch: false
  },
  preview: {
    port: 3000,
    host: true, // This allows external access and disables host checking
    strictPort: true
  }
})