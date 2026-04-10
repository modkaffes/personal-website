import { describe, it, expect } from "vitest";

const BASE_URL = "https://modkaffes.com";

describe("Layout — OG image URL construction", () => {
  it("resolves a root-relative image path against the base URL", () => {
    const image = "/assets/banner.png";
    const imageUrl = new URL(image, BASE_URL);
    expect(imageUrl.href).toBe("https://modkaffes.com/assets/banner.png");
  });

  it("resolves the default banner path correctly", () => {
    const image = "/assets/banner.png";
    const imageUrl = new URL(image, BASE_URL);
    expect(imageUrl.hostname).toBe("modkaffes.com");
    expect(imageUrl.pathname).toBe("/assets/banner.png");
  });

  it("resolves a custom image path correctly", () => {
    const image = "/assets/custom.png";
    const imageUrl = new URL(image, BASE_URL);
    expect(imageUrl.href).toBe("https://modkaffes.com/assets/custom.png");
  });

  it("preserves an already-absolute image URL", () => {
    const image = "https://cdn.example.com/image.png";
    const imageUrl = new URL(image, BASE_URL);
    expect(imageUrl.href).toBe("https://cdn.example.com/image.png");
  });

  it("uses https protocol for the base URL", () => {
    const imageUrl = new URL("/assets/banner.png", BASE_URL);
    expect(imageUrl.protocol).toBe("https:");
  });
});

describe("Layout — default prop values", () => {
  const defaults = {
    title: "Modestos Kaffes - Creative Software Engineer",
    description:
      "Hi, I'm Modestos Kaffes, a software engineer who cares about technology, startups, music, design and photography, in no particular order.",
    image: "/assets/banner.png",
  };

  it("default title is non-empty", () => {
    expect(defaults.title.trim().length).toBeGreaterThan(0);
  });

  it("default description is non-empty", () => {
    expect(defaults.description.trim().length).toBeGreaterThan(0);
  });

  it("default image starts with a forward slash", () => {
    expect(defaults.image.startsWith("/")).toBe(true);
  });

  it("default image points to a png file", () => {
    expect(defaults.image).toMatch(/\.png$/i);
  });
});
