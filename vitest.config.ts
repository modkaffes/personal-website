import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@data": resolve(__dirname, "src/data"),
    },
  },
  test: {
    environment: "node",
  },
});
