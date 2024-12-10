const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
  test("returns the number itself for a single number", () => {
    expect(add("5")).toBe(5);
  });
  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });
  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
