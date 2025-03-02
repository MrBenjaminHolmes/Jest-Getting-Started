const encrypt = require("./caesarCypher.js");

test("Hello World", () => {
  expect(encrypt("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
