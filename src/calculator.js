#!/usr/bin/env node

"use strict";

// Supported operations:
// - addition (+)
// - subtraction (-)
// - multiplication (*, x)
// - division (/)
// - modulo (%)
// - exponentiation (^, **)
// - square root (sqrt)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }

  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }

  return Math.sqrt(n);
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
    case "x":
    case "X":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulo(a, b);
    case "^":
    case "**":
      return power(a, b);
    case "sqrt":
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

if (require.main === module) {
  const [, , firstValue, operator, secondValue] = process.argv;

  if (firstValue === undefined || operator === undefined || secondValue === undefined) {
    console.error("Usage: node src/calculator.js <number> <operator> <number>");
    process.exit(1);
  }

  const a = Number(firstValue);
  const b = Number(secondValue);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Both operands must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(a, operator, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
};
