const capitilize = require("./capitilize.js");

test("word becomes Word", () => {
  expect(capitilize("word")).toBe("Word");
});
