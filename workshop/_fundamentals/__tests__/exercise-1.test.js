const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["Mega", "Man"])).toBe(7);
  expect(letterCount(["hi", "bye"])).toBe(5);
  expect(letterCount(["meow", "woof"])).toBe(8);
});
