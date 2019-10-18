import functions from "./daily.js";

test('prepare for array work', () => {
	const loopArr = [1,2,3,4,5];
	//fail test
	// expect(functions.prepArrWork())
	// 	.toEqual();
	expect(functions.prepArrWork(loopArr))
		.toEqual([1,2,3,4,5]);
});

test('email builder from an array', () => {
	const name = ["first", "last"];
	expect(functions.makeEmailArr(name))
		.toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["First", "Last"]))
		.toEqual("first.last@evolveu.ca");
});

test('sheer heart attack', () => {
	//fail
	// expect(compareTwo("oink","arf")).toBe(true);
	//pass
	expect(functions.compareTwo("arf","arf")).toBe(true);
  expect(functions.compareTwo(1,2)).toBe(false);
  expect(functions.compareTwo(2,1)).toBe(false);
  expect(functions.compareTwo(4,4)).toBe(true);
});
