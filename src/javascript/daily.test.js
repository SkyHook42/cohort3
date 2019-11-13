import functions from "./daily.js";
import { isTSArrayType } from "@babel/types";

// #region Callback Exercise (Part 1) - November 8, 2019
test("Callback Exercise (Part 1)", () => {
  // let i=0;
  // while (functions.findBCAB(people[i].province !== ("AB" || "BC"))){
  //   i++;
  // }

  expect(functions.findBCAB(people)[0].province).toEqual("BC");
  expect(functions.findBCAB(people)[1].province).toEqual("AB");
  expect(functions.nameBCAB(people)[0]).toEqual("Alex Smith");
  expect(functions.nameBCAB(people)[1]).toEqual("Angela Jones");
  expect(functions.callbackDaily(people)).toEqual();
  // console.log(functions.findBCAB(people)[0].province);
});
// #endregion Callback Exercise (Part 1) - November 8, 2019

// #region More Array Exercises (Really) - November 6, 2019
test('Really balanceFilter', () => {
  expect(functions.balanceFilterReduce(data.staff)).toEqual(2330);
  expect(functions.balanceFilterEvery(data.staff)).toEqual(true);
  expect(functions.balanceFilterSome(data.staff)).toEqual(true);
  expect(functions.balanceFilterFind(data.staff)).toEqual(1330);
  expect(functions.balanceFilterFindIndex(data.staff)).toEqual(0);
});
// #endregion More Array Exercises (Really) - November 6, 2019

// #region More Array Exercises - October 29, 2019
test('More Array balanceTotal', () => {
  const resultOut = functions.balanceTotal([data.staff[0]]);
  expect(resultOut).toEqual(10);
  const resultOut2 = functions.balanceTotal(data.staff);
  expect(resultOut2).toEqual(3823);
});

test('More Array balanceAvg', () => {
  const resultOut = functions.balanceAvg([data.staff[0]]);
  expect(resultOut).toEqual(10);
  const resultOut2 = functions.balanceAvg(data.staff);
  expect(resultOut2).toEqual(Number((3823 / data.staff.length).toFixed(2)));
});

test('More Array balanceEvery', () => {
  const testDat = functions.balanceEvery(data.staff);
  expect(testDat).toEqual(true);
});

test('More Array balanceSome', () => {
  const testDat = functions.balanceSome(data.staff);
  expect(testDat).toEqual(true);
});

test('More Array balanceFind', () => {
  const testDat = functions.balanceFind(data.staff);
  expect(testDat).toEqual(1000);
});

test('More Array balanceFindIndex', () => {
  const testDat = functions.balanceFindIndex(data.staff);
  expect(testDat).toEqual(4);
});
// #endregion More Array Exercises - October 29, 2019

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

const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

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

const myTestData = {
  staff: [
    { fname: "Tom", lname: "Smith", balance: 10 },
    { fname: "Dick", lname: "Jones", balance: 500 },
    { fname: "Harry", lname: "Palmer", balance: 27000 },
  ],
  company: "Dogless",
  city: "Springfield",
  prov: "Nunavut",
};