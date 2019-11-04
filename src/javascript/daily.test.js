import functions from "./daily.js";
// #region More Array Work - October 16-17
test("slice", () => {
  expect(functions.methSlice([1,2,3,4],1,3)).toEqual([2,3]);  
  expect(functions.methSlice([1,2,3,4],0,6)).toEqual([1,2,3,4]);
  expect(functions.methSlice(["dog","cat","frog","horse","cow"],2,4)).toEqual(["frog","horse"]);
});

test("splice", () => {
  expect(functions.methSplice([1,2,3,4],1,2,17)).toEqual([1,17,4]);
  expect(functions.methSplice([1,2,3,4],2,1,"x")).toEqual([1,2,"x",4]);
});

test("forEach", () => {
  expect(functions.methForEach([1,2,3,4])).toEqual([2,3,4,5]);
  expect(functions.methForEach([7,5,1])).toEqual([8,6,2]);
  // expect(functions.methSplice([1,2,3,4],2,1,"x")).toEqual([1,2,"x",4]);
});

// #endregion More Array Work - October 16-17

// #region Prepare for Array Work - October 15, 2019
test("for loop", () => {
  expect(functions.forLoop([1,2,3,4])).toEqual(10);
  expect(functions.forLoop([2,3,4])).toEqual(9);
});

test("while loop", () => {
  expect(functions.whileLoop([1,2,3,4])).toEqual(10);
  expect(functions.whileLoop([2,3,4])).toEqual(9);
});

test("do while loop", () => {
  expect(functions.doWhileLoop([1,2,3,4])).toEqual(10);
  expect(functions.doWhileLoop([2,3,4])).toEqual(9);
});

test("for in loop", () => {
  const testObj = {
    first:"a",
    second:"b",
    third:"c",
  }
  expect(functions.forInLoop(testObj)).toEqual("abc");
});

test("for of loop", () => {
  expect(functions.forOfLoop(["a","b","c"])).toEqual("abc");
  expect(functions.forOfLoop(["d","e","f"])).toEqual("def");
});
// #endregion Prepare for Array Work - October 15, 2019

// #region makeEmailObj - Oct 11, 2019
test("makeEmailObj", () => {
  /*	
  Write the function to format an email based on an object / map
  */
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' })).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual("bill.smith@evolveu.ca");
});
// #endregion makeEmailObj - Oct 11, 2019

// #region makeEmailArr - October 9, 2019
test("makeEmailArr", () => {
  /*
  Write a function to format an email based on an array.
  */
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name))
  .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"]))
  .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["Bill", "Smith"]))
  .toEqual("bill.smith@evolveu.ca");
});
// #endregion makeEmailArr - October 9, 2019

// #region AssertEquals - October 7, 2019
test("AssertEquals", () => {
	expect(functions.assertEquals("a","b")).toBe(false);
	expect(functions.assertEquals("a","a")).toBe(true);
	expect(functions.assertEquals(1,2)).toBe(false);
	expect(functions.assertEquals(2,2)).toBe(true);
	expect(functions.assertEquals("2",2)).toBe(false);
	expect(functions.assertEquals("This value","This value")).toBe(true);
});
// #endregion AssertEquals - October 7, 2019

// #region probably trash
// #region first try - More Array Work
test("More Array Work", () => {
  /*	
   create example of each array
  */
  const testArr = [1,2,3,4,5];
	expect(functions.moreArrWork(testArr)).toEqual([1,2,3,4,5]);
  expect(functions.moreArrWork([3,4,5,6,7])).toEqual([1,2,3,4,5]);
});
// #endregion first try - More Array Work

// #region first try - test("Prepare for Array Work", () => {
//   /*	
//    create example of each array
//   */
//   const testArr = [1,2,3,4,5];
// 	expect(functions.prepArrWork(testArr)).toEqual([1,2,3,4,5]);
// 	expect(functions.prepArrWork([3,4,5,6,7])).toEqual([1,2,3,4,5]);
// });
// #endregion first try - test("Prepare for Array Work", () => {
// #endregion probably trash