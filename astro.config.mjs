import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/site-config.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

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
