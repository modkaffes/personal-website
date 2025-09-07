import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://modkaffes.com",

  integrations: [
    partytown({
      // Add dataLayer.push as a forwarding-event
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
