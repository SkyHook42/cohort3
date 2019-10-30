
// /*
// 1 create files
// 2 test the test file
// 3 create function dummy, test (like a console log)
// 4 create function stub, test (list below)
// 	- name
// 	- parameters
// 	- returns bad value;
// test
// test fail
// add min code to pass
// rinse and repeat:
// 	4	add test - fail
// 	5	add code - pass
// 6	refactor
// */

// /* testing the plumbing */
import functions from "./functions.js";

test("more TDD practice", () =>{
  console.log("functions.test.js says hello");
  // expect(functions.hello(17)).toEqual(17);
});

// test('TDD practice', () => {
// 	console.log("10_25_tdd.test says hello");
// 	functions.hello();
// 	expect(functions.sum(1,2)).toEqual(3);
// 	expect(functions.sum(-1,-2)).toEqual(-3);
// 	expect(functions.sum("bob","smith")).toEqual(NaN);
// });