import functions from "./daily.js";

test('prepare for array work', () => {
  const testArr = [1,2,3,4,5];
	expect(functions.prepArrWork(testArr)).toEqual([1,2,3,4,5]);
	expect(functions.prepArrWork([3,4,5,6,7])).toEqual([1,2,3,4,5]);
});

test('email builder from an object / map', () => {
  /*	
  Write the function to format an email based on an object / map
  */
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' })).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual("bill.smith@evolveu.ca");
});

test('email builder from an array', () => {
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
    
test('assertEquals exercise', () => {
	expect(functions.assertEquals("a","b")).toBe(false);
	expect(functions.assertEquals("a","a")).toBe(true);
	expect(functions.assertEquals(1,2)).toBe(false);
	expect(functions.assertEquals(2,2)).toBe(true);
	expect(functions.assertEquals("2",2)).toBe(false);
	expect(functions.assertEquals("This value","This value")).toBe(true);
});