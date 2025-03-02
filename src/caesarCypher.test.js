const encrypt = require("./caesarCypher.js");

test("Zebra", () => {
  expect(encrypt("zebra")).toBe("afcsb");
});
