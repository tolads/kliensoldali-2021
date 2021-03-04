const add = require("./math");

test("should add numbers", () => {
  expect(add(2, 3)).toBe(5);
});
