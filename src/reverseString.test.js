const reverseString = require("./reverseString.js");

test("Hello World Becomes dlroW olleH", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
