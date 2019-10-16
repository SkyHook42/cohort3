import functions from "./daily.js";

test('email builder from an array', () => {
	console.log("email builder test")
		const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// test('sheer heart attack', () => {
// 	//fail
// 	// expect(compareTwo("oink","arf")).toBe(true);
// 	//pass
// 	expect(functions.compareTwo("arf","arf")).toBe(true);
//   expect(functions.compareTwo(1,2)).toBe(false);
//   expect(functions.compareTwo(2,1)).toBe(false);
//   expect(functions.compareTwo(4,4)).toBe(true);
// });

// makeEmailArr - October 9, 2019
// Write a function that will receive an array. 
// The first entree in the array is the first name, the second entree is the last name. 
// The array only has one person in it. Create an evolveu email from the array. 
// Copy and paste the test code provided below (without making any changes) to 
// the bottom of your ‘daily.test.js’. This will be your second test in daily. 
// Email Larry with the steps you will follow (before you write your code) to 
// complete this assignment. I will help with the first step. 
// Reminder all emails are to be business quality.
// 1. copy and paste this code into ‘daily.test.js’
// 2. create stub function "makeEmailArr" in daily.js to test the test
// 3. flesh out return with simple payload and test
// 4. flesh out return with array payload and test
// 5. add formatted email dummy and test
// 6. test with real email recipient, myself

// /*
//     Write a function to format an email based on an array.
// */
