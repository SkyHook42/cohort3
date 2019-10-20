import functions from "./daily.js";

test('prepare for array work', () => {
	const loopArr = [1,2,3,4,5];
	// fail test
	// expect(functions.prepArrWork())
		// .toEqual();
	expect(functions.prepArrWork(loopArr))
		.toEqual([1,2,3,4,5]);
});

test('makeEmailArr', () => {
	const name = ["first", "last"];
	expect(functions.makeEmailArr(name))
		.toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["First", "Last"]))
		.toEqual("first.last@evolveu.ca");
});

test(' assertEquals exercise', () => {
	expect(functions.assertEquals("a","b")).toBe(false);
	expect(functions.assertEquals("a","a")).toBe(true);
	expect(functions.assertEquals(1,2)).toBe(false);
	expect(functions.assertEquals(2,2)).toBe(true);
	expect(functions.assertEquals("2",2)).toBe(false);
	expect(functions.assertEquals("This value","This value")).toBe(true);
});