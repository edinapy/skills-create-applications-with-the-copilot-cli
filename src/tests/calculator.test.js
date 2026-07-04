const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
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

    describe("modulo", () => {
      test("matches the extended-operations example: 5 % 2 = 1", () => {
        expect(modulo(5, 2)).toBe(1);
      });

      test("returns the remainder", () => {
        expect(modulo(10, 3)).toBe(1);
      });

      test("throws on modulo by zero", () => {
        expect(() => modulo(12, 0)).toThrow("Modulo by zero is not allowed.");
      });
    });

    describe("power", () => {
      test("matches the extended-operations example: 2 ^ 3 = 8", () => {
        expect(power(2, 3)).toBe(8);
      });

      test("raises a base to an exponent", () => {
        expect(power(2, 8)).toBe(256);
      });

      test("returns 1 when exponent is zero", () => {
        expect(power(9, 0)).toBe(1);
      });
    });

    describe("squareRoot", () => {
      test("matches the extended-operations example: sqrt(16) = 4", () => {
        expect(squareRoot(16)).toBe(4);
      });

      test("returns the square root of a positive number", () => {
        expect(squareRoot(81)).toBe(9);
      });

      test("throws on negative numbers", () => {
        expect(() => squareRoot(-9)).toThrow(
          "Square root of a negative number is not allowed."
        );
      });
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

  test("calculates using %", () => {
    expect(calculate(10, "%", 3)).toBe(1);
  });

  test("calculates using % for the extended-operations example", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("calculates using ^ and **", () => {
    expect(calculate(2, "^", 8)).toBe(256);
    expect(calculate(2, "**", 8)).toBe(256);
  });

  test("calculates using ^ for the extended-operations example", () => {
    expect(calculate(2, "^", 3)).toBe(8);
  });

  test("calculates using sqrt", () => {
    expect(calculate(81, "sqrt")).toBe(9);
  });

  test("calculates using sqrt for the extended-operations example", () => {
    expect(calculate(16, "sqrt")).toBe(4);
  });

  test("throws on unsupported operator", () => {
    expect(() => calculate(1, "?", 2)).toThrow("Unsupported operator: ?");
  });
});
