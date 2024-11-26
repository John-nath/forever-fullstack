import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodeResolve } from '@rollup/plugin-node-resolve';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodeResolve()],
  server: {port: 5176},
  build: {
    rollupOptions: {
      external: ["react-router-dom", "Routes", "Route", /node_modules/]
    }
  }
})
