import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteThreejs from "vite-plugin-threejs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteThreejs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      three: "three",
    },
  },
});
