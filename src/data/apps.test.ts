import { describe, it, expect } from "vitest";
import apps from "./apps.json";
import { isValidUrl } from "../test-utils";

describe("apps.json", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(apps)).toBe(true);
    expect(apps.length).toBeGreaterThan(0);
  });

  apps.forEach((app, index) => {
    describe(`app[${index}] — ${app.name ?? index}`, () => {
      it("has a non-empty name string", () => {
        expect(app.name).toMatch(/\S/);
      });

      it("has a valid url", () => {
        expect(typeof app.url).toBe("string");
        expect(isValidUrl(app.url)).toBe(true);
      });

      it("has a non-empty img string", () => {
        expect(app.img).toMatch(/\S/);
      });

      it("img references an svg or png file", () => {
        expect(app.img).toMatch(/\.(svg|png)$/i);
      });
    });
  });
});
