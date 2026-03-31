export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function total(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
