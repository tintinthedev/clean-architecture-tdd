import path from "node:path";
import { defineConfig } from "vitest/config";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  test: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    env: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
