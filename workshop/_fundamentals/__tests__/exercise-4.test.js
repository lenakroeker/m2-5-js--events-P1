const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "age"
    )
  ).toStrictEqual([23, 36, 43]);
  expect(
    getValues(
      [
        { cat: "chris", age: 23 },
        { spouse: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["dave"]);
  expect(
    getValues(
      [
        { nickname: "chris", age: 23 },
        { nickname: "liv", age: 36 },
        { nickname: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(null);
});
