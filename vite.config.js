import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // usePolling : détecte les modifications faites sous Windows quand l'application tourne dans Docker
  server: { host: true, port: 5173, watch: { usePolling: true } },
});
