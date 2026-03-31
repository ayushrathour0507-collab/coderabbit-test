import { describe, expect, it } from "vitest";
import { average, divide, total } from "../src/math";

describe("math helpers", () => {
  it("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("throws for divide by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  it("totals values in an array", () => {
    expect(total([5, 5, 10])).toBe(20);
  });

  it("calculates the average of values in an array", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("throws when calculating average of an empty array", () => {
    expect(() => average([])).toThrow(
      "Cannot calculate average of empty array",
    );
  });
});
