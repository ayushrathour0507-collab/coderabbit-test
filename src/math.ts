/**
 * Divides `a` by `b`.
 * Throws when `b` is zero.
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Returns the sum of all values in an array.
 */
export function total(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}

/**
 * Returns the arithmetic mean of an array of numbers.
 * Throws when the array is empty.
 */
export function average(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot calculate average of empty array");
  }

  return total(values) / values.length;
}
