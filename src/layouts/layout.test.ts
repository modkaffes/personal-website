import { describe, it, expect } from "vitest";
import { SITE_URL, DEFAULT_META, resolveImageUrl } from "../site-config";

describe("resolveImageUrl — OG image URL construction", () => {
  it("resolves a root-relative image path against the default base URL", () => {
    expect(resolveImageUrl("/assets/banner.png")).toBe(
      `${SITE_URL}/assets/banner.png`,
    );
  });

  it("resolves the default banner path correctly", () => {
    const url = new URL(resolveImageUrl(DEFAULT_META.image));
    expect(url.hostname).toBe(new URL(SITE_URL).hostname);
    expect(url.pathname).toBe("/assets/banner.png");
  });

  it("resolves a custom image path correctly", () => {
    expect(resolveImageUrl("/assets/custom.png")).toBe(
      `${SITE_URL}/assets/custom.png`,
    );
  });

  it("preserves an already-absolute image URL", () => {
    expect(resolveImageUrl("https://cdn.example.com/image.png")).toBe(
      "https://cdn.example.com/image.png",
    );
  });

  it("resolves against an explicitly provided base URL", () => {
    expect(
      resolveImageUrl("/assets/banner.png", "https://staging.example.com"),
    ).toBe("https://staging.example.com/assets/banner.png");
  });

  it("uses https protocol for the default base URL", () => {
    expect(new URL(resolveImageUrl("/assets/banner.png")).protocol).toBe(
      "https:",
    );
  });
});

describe("Layout — default prop values", () => {
  it("default title is non-empty", () => {
    expect(DEFAULT_META.title).toMatch(/\S/);
  });

  it("default description is non-empty", () => {
    expect(DEFAULT_META.description).toMatch(/\S/);
  });

  it("default image starts with a forward slash", () => {
    expect(DEFAULT_META.image.startsWith("/")).toBe(true);
  });

  it("default image points to a png file", () => {
    expect(DEFAULT_META.image).toMatch(/\.png$/i);
  });
});
