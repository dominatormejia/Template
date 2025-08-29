// const sum = require("./greeting.js");
import { sum } from "./greeting";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 5 + 9 to equal 14", () => {
  expect(sum(5, 9)).toBe(14);
});
