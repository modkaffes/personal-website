import { describe, it, expect } from "vitest";
import jobs from "./jobs.json";
import { isValidUrl } from "../test-utils";

describe("jobs.json", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThan(0);
  });

  jobs.forEach((job, index) => {
    describe(`job[${index}] — ${job.company.name}`, () => {
      describe("company", () => {
        it("has a non-empty name string", () => {
          expect(typeof job.company.name).toBe("string");
          expect(job.company.name.trim().length).toBeGreaterThan(0);
        });

        it("has a valid url", () => {
          expect(typeof job.company.url).toBe("string");
          expect(isValidUrl(job.company.url)).toBe(true);
        });

        it("has a non-empty img string", () => {
          expect(typeof job.company.img).toBe("string");
          expect(job.company.img.trim().length).toBeGreaterThan(0);
        });

        it("img references an svg or png file", () => {
          expect(job.company.img).toMatch(/\.(svg|png)$/i);
        });
      });

      describe("roles", () => {
        it("has a non-empty roles array", () => {
          expect(Array.isArray(job.roles)).toBe(true);
          expect(job.roles.length).toBeGreaterThan(0);
        });

        job.roles.forEach((role, roleIndex) => {
          describe(`role[${roleIndex}] — ${role.title}`, () => {
            it("has a non-empty title string", () => {
              expect(typeof role.title).toBe("string");
              expect(role.title.trim().length).toBeGreaterThan(0);
            });

            it("has a non-empty date string", () => {
              expect(typeof role.date).toBe("string");
              expect(role.date.trim().length).toBeGreaterThan(0);
            });

            it("date matches expected year range format", () => {
              expect(role.date).toMatch(/^\d{4}\s*-\s*(\d{4}|Present)$/);
            });
          });
        });
      });
    });
  });
});
