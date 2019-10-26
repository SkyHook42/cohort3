/*
1	create stub
	-	function name
	- introduces parameters
	- returns bad value;
2	create test
3 test fail
3	add min code to pass
rinse and repeat:
	4	add test - fail
	5	add code - pass
6	refactor
*/

/* testing the plumbing */
import functions from "./10_25_tdd.js";

test('TDD practice', () => {
	console.log("10_25_tdd.test says hello");
	functions.hello();
	expect(functions.sum(1,2)).toEqual(3);
	expect(functions.sum(-1,-2)).toEqual(-3);
	expect(functions.sum("bob","smith")).toEqual(NaN);
});