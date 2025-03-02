const calculator = require("./calculator.js");

test("Addition", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Subtraction", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Multiplication", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test("Division", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
