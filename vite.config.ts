import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
