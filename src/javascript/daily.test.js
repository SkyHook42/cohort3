import functions from "./daily.js";

// #region loopStaff each / map - October 25, 2019
test('loopStaff forEach', () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  let i = 0;

  while (i < staffEmail.length) {
    expect(staffEmail[i]).toEqual((data.staff[i].fname + "." + data.staff[i].lname + "@evolveu.ca").toLowerCase());
    i++;
  };
  expect(staffEmail[staffEmail.length - 1]).toEqual("benjamin.amis@evolveu.ca");
});

test('loopStaff map', () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  let i = 0;

  while (i < staffEmail.length) {
    expect(staffEmail[i]).toEqual((data.staff[i].fname + "." + data.staff[i].lname + "@evolveu.ca").toLowerCase());
    i++;
  };
  expect(staffEmail[staffEmail.length - 1]).toEqual("benjamin.amis@evolveu.ca");
});
// #endregion loopStaff each / map - October 25, 2019

// #region loopStaff: in / of - October 24, 2019
test('loopStaff forin', () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  expect(staffEmail[staffEmail.length - 1]).toEqual("benjamin.amis@evolveu.ca");
});

test('loopStaff forof', () => {
  // Notice how you are beginning to repeat your tests. What can you do about it?
  const staffEmail = functions.loopStaffOf(data.staff);
  let i = 0;

  while (i < staffEmail.length) {
    expect(staffEmail[i]).toEqual((data.staff[i].fname + "." + data.staff[i].lname + "@evolveu.ca").toLowerCase());
    i++;
  };
  expect(staffEmail[staffEmail.length - 1]).toEqual("benjamin.amis@evolveu.ca");
});
// #endregion loopStaff: in / of - October 24, 2019

// #region loopStaff - October 22, 2019
const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 },
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

test('email builder for company', () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  expect(staffEmail[staffEmail.length - 1]).toEqual("benjamin.amis@evolveu.ca");
});
// #endregion loopStaff - October 22, 2019

// #region More Array Work - October 16-17
test("slice", () => {
  expect(functions.methSlice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  expect(functions.methSlice([1, 2, 3, 4], 0, 6)).toEqual([1, 2, 3, 4]);
  expect(functions.methSlice(["dog", "cat", "frog", "horse", "cow"], 2, 4)).toEqual(["frog", "horse"]);
});

test("splice", () => {
  expect(functions.methSplice([1, 2, 3, 4], 1, 2, 17)).toEqual([1, 17, 4]);
  expect(functions.methSplice([1, 2, 3, 4], 2, 1, "x")).toEqual([1, 2, "x", 4]);
});

test("forEach", () => {
  expect(functions.methForEach([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
  expect(functions.methForEach([7, 5, 1])).toEqual([8, 6, 2]);
  // expect(functions.methSplice([1,2,3,4],2,1,"x")).toEqual([1,2,"x",4]);
});

test("map", () => {
  expect(functions.methMap([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
  expect(functions.methMap([7, 5, 1])).toEqual([8, 6, 2]);
});

test("reduce", () => {
  expect(functions.methReduce([1, 2, 3, 4])).toEqual(10);
  expect(functions.methReduce([7, 5, 1])).toEqual(13);
});

test("filter", () => {
  expect(functions.methFilter([1, 2, 3, 4])).toEqual([3, 4]);
  expect(functions.methFilter([-1, 17, -6, 99])).toEqual([17, 99]);
});

test("sort", () => {
  expect(functions.methSort([7, 6, 5, 4, 3])).toEqual([3, 4, 5, 6, 7]);
  expect(functions.methSort([17, -18, "bogman", -199])).toEqual([-18, -199, 17, "bogman"]);
});

// #endregion More Array Work - October 16-17

// #region Prepare for Array Work - October 15, 2019
test("for loop", () => {
  expect(functions.forLoop([1, 2, 3, 4])).toEqual(10);
  expect(functions.forLoop([2, 3, 4])).toEqual(9);
});

test("while loop", () => {
  expect(functions.whileLoop([1, 2, 3, 4])).toEqual(10);
  expect(functions.whileLoop([2, 3, 4])).toEqual(9);
});

test("do while loop", () => {
  expect(functions.doWhileLoop([1, 2, 3, 4])).toEqual(10);
  expect(functions.doWhileLoop([2, 3, 4])).toEqual(9);
});

test("for in loop", () => {
  const testObj = {
    first: "a",
    second: "b",
    third: "c",
  }
  expect(functions.forInLoop(testObj)).toEqual("abc");
});

test("for of loop", () => {
  expect(functions.forOfLoop(["a", "b", "c"])).toEqual("abc");
  expect(functions.forOfLoop(["d", "e", "f"])).toEqual("def");
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
  expect(functions.assertEquals("a", "b")).toBe(false);
  expect(functions.assertEquals("a", "a")).toBe(true);
  expect(functions.assertEquals(1, 2)).toBe(false);
  expect(functions.assertEquals(2, 2)).toBe(true);
  expect(functions.assertEquals("2", 2)).toBe(false);
  expect(functions.assertEquals("This value", "This value")).toBe(true);
});
// #endregion AssertEquals - October 7, 2019