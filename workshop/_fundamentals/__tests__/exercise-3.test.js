const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  // add more tests here...
  expect(getPairing("beef")).toBe("red wine");
  expect(getPairing("fish")).toBe("white wine");
  expect(getPairing("strawberries")).toBe("champagne");
});
