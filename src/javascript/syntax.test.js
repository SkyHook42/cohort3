import syntax from "./syntax.js";

test("syntax test", () => {
  expect(syntax.fDefAtt(42)).toEqual("I'm a number.");
  expect(syntax.fDefAtt("Howdy! the vacuum bag is hot today.")).toEqual("I'm a string.");
  expect(syntax.fDefAtt(true)).toEqual("I'm a boolean.");
  expect(syntax.fDefAtt({ Dave: "not here" })).toEqual("I'm an object.");
  expect(syntax.fDefAtt([1, 2, 3, 4])).toEqual("I'm an array.");
  expect(syntax.fDefAtt()).toEqual("I'm an undefined.");
  expect(syntax.fIfElse("Apple")).toEqual("round");
  expect(syntax.fIfElse("Banana")).toEqual("does it matter?");
  expect(syntax.fFuncTest("Banana")).toEqual("Banana returned!");
  expect(syntax.fFuncFBUpDate([1, 2, 3, 4, 5])).toEqual([17, 1, 2, 7, 4, 5, 42]);
  expect(syntax.fLoopy({ a: 1, b: 2, c: 3 })).toEqual(14);
  expect(syntax.fFELoop([1, 2, 3, 4, 5])).toEqual([2,4,6,8,10]);
});
