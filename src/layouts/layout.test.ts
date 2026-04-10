import { describe, it, expect } from "vitest";
import { SITE_URL, DEFAULT_META } from "../site-config";

describe("Layout — OG image URL construction", () => {
  it("resolves a root-relative image path against the base URL", () => {
    const image = "/assets/banner.png";
    const imageUrl = new URL(image, SITE_URL);
    expect(imageUrl.href).toBe(`${SITE_URL}/assets/banner.png`);
  });

  it("resolves the default banner path correctly", () => {
    const image = "/assets/banner.png";
    const imageUrl = new URL(image, SITE_URL);
    expect(imageUrl.hostname).toBe(new URL(SITE_URL).hostname);
    expect(imageUrl.pathname).toBe("/assets/banner.png");
  });

  it("resolves a custom image path correctly", () => {
    const image = "/assets/custom.png";
    const imageUrl = new URL(image, SITE_URL);
    expect(imageUrl.href).toBe(`${SITE_URL}/assets/custom.png`);
  });

  it("preserves an already-absolute image URL", () => {
    const image = "https://cdn.example.com/image.png";
    const imageUrl = new URL(image, SITE_URL);
    expect(imageUrl.href).toBe("https://cdn.example.com/image.png");
  });

  it("uses https protocol for the base URL", () => {
    const imageUrl = new URL("/assets/banner.png", SITE_URL);
    expect(imageUrl.protocol).toBe("https:");
  });
});

describe("Layout — default prop values", () => {
  it("default title is non-empty", () => {
    expect(DEFAULT_META.title.trim().length).toBeGreaterThan(0);
  });

  it("default description is non-empty", () => {
    expect(DEFAULT_META.description.trim().length).toBeGreaterThan(0);
  });

  it("default image starts with a forward slash", () => {
    expect(DEFAULT_META.image.startsWith("/")).toBe(true);
  });

  it("default image points to a png file", () => {
    expect(DEFAULT_META.image).toMatch(/\.png$/i);
  });
});
