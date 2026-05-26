export const SITE_URL = "https://modkaffes.com";

export const DEFAULT_META = {
  title: "Modestos Kaffes - Creative Software Engineer",
  description:
    "Hi, I\u2019m Modestos Kaffes, a software engineer who cares about technology, startups, music, design and photography, in no particular order.",
  image: "/assets/banner.png",
};

export const resolveImageUrl = (
  image: string,
  baseUrl: string | URL | undefined = SITE_URL,
): string => new URL(image, baseUrl).href;
