const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
});

test("Exercise 2", () => {
  expect(
    combineArrays(["alabama", "baloney"], ["tree", "tune"])
  ).toStrictEqual(["alabama", "baloney", "tree", "tune"]);

});

test("Exercise 2", () => {
  expect(
    combineArrays(["dog"], ["cat", "mouse"])
  ).toStrictEqual(["cat", "dog", "mouse"]);
});

test("Exercise 2", () => {
  expect(
    combineArrays(["dog", 5, 7], ["cat", "mouse"])
  ).toStrictEqual(undefined);
});
