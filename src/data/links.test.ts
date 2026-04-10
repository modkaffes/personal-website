import { describe, it, expect } from "vitest";
import links from "./links.json";
import { isValidUrl } from "../test-utils";

describe("links.json", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(links)).toBe(true);
    expect(links.length).toBeGreaterThan(0);
  });

  links.forEach((link, index) => {
    describe(`link[${index}] — ${link.name}`, () => {
      it("has a non-empty name string", () => {
        expect(typeof link.name).toBe("string");
        expect(link.name.trim().length).toBeGreaterThan(0);
      });

      it("has a valid url", () => {
        expect(typeof link.url).toBe("string");
        expect(isValidUrl(link.url)).toBe(true);
      });

      it("has a non-empty img string", () => {
        expect(typeof link.img).toBe("string");
        expect(link.img.trim().length).toBeGreaterThan(0);
      });

      it("img references an svg or png file", () => {
        expect(link.img).toMatch(/\.(svg|png)$/i);
      });
    });
  });
});
