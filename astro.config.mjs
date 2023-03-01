import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://modkaffes.com",
  integrations: [
    tailwind(),
    partytown({
      // Add dataLayer.push as a forwarding-event
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
