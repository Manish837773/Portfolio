import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),  // Change import.meta.dirname to __dirname
      "@shared": path.resolve(__dirname, "shared"),  // Change import.meta.dirname to __dirname
      "@assets": path.resolve(__dirname, "attached_assets"),  // Change import.meta.dirname to __dirname
    },
  },
  root: path.resolve(__dirname, "client"),  // Change import.meta.dirname to __dirname
  build: {
    outDir: path.resolve(__dirname, "dist", "public"),  // Ensure correct output directory
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
