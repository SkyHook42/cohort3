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

import functions from "./10_25_tdd.js";

test('test driven practice', () => {
	console.log("hello world from 10_25_tdd.test");
	functions.hello();
	expect(functions.sum(1,2)).toEqual(5);
});

	// expect(functions.helloWorld())
	// .toEqual();