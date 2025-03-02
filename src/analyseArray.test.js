const analyzeArray = require("./analyseArray.js");

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
