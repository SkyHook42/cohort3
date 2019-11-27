import syntax from "./syntax.js";

test("syntax test", () => {
  expect(syntax.fDefAtt(42)).toEqual("I'm a number.");
  expect(syntax.fDefAtt("Howdy! the vacuum bag is hot today.")).toEqual("I'm a string.");
  expect(syntax.fDefAtt(true)).toEqual("I'm a boolean.");
	expect(syntax.fDefAtt({Dave: "not here"})).toEqual("I'm an object.");
  expect(syntax.fDefAtt([1,2,3,4])).toEqual("I'm an array.");
  expect(syntax.fDefAtt()).toEqual("I'm an undefined.");
});
