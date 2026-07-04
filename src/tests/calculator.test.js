const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require("../calculator");

describe("calculator basic operations", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative and positive numbers", () => {
      expect(add(-4, 10)).toBe(6);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("subtracts with negative results", () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test("multiplies by zero", () => {
      expect(multiply(8, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {
      expect(divide(20, 5)).toBe(4);
    });

    test("supports decimal results", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test("throws on division by zero", () => {
      expect(() => divide(12, 0)).toThrow("Division by zero is not allowed.");
    });
  });
});

describe("calculate dispatcher", () => {
  test("calculates using +", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("calculates using -", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("calculates using *", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("calculates using x and X", () => {
    expect(calculate(6, "x", 7)).toBe(42);
    expect(calculate(6, "X", 7)).toBe(42);
  });

  test("calculates using /", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws on unsupported operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unsupported operator: %");
  });
});
