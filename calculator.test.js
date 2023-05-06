import add from "./calculator.js";

describe("additionCalculator's test cases", () => {
  test("No arguments passed, equals 0", () => {
    expect(add()).toBe(0);
  });

  test("One argument passed, answer equals 5", () => {
    expect(add("5")).toBe(5);
  });

  test("5 plus 10 equals 15", () => {
    expect(add("5,10")).toBe(15);
  });

  test("5 plus a NaN equals 5", () => {
    expect(add("5,test")).toBe(5);
  });

  test("NaN argument, equals 0", () => {
    expect(add("5test")).toBe(0);
  });
});
