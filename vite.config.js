import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'

dotenv.config();

export default defineConfig({
  base: "",
  plugins: [react()],
  // define: {
  //   'process.env': process.env
  // }
  // build: {
  //   sourcemap: true
  // }
});