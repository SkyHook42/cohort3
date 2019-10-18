// import { booleanLiteral } from "@babel/types";

const functions = {

// daily - More Array Work - 201101518
// Read the documentation on the following and create examples of each one:
// slice
// splice
// forEach
// map
// reduce
// filter
// sort

// daily - Prepare for Array Work - 2011015

	prepArrWork: (arr) => {
		// Next Level:
		// for in
		// for of

		// first level:
		// for

		let i=0;
		let tempArr = [];
		// function funcLoop(){
			// return total+"while loop";
			// // while
			// while (i < 10) {
			// 	console.log(tempArr);
			// 	// text += "The number is " + i;
			// 	// tempArr = tempArr.reduce(funcWhile);
			// 	i++;
			// // reverse "while" mod with exercise method, for testing

			// do while
			do { 
				tempArr = arr.map((arrElement) => arrElement+i);
				console.log(tempArr);
				i++;
			}
			while (i < arr.length);
			//reverse "do while" mod with exercise method, for testing
			tempArr = tempArr.map((arrElement) => arrElement-(arr.length-1));
			return tempArr;
	},

	// daily - makeEmailArr
	makeEmailArr: (arr) => {
		let str = arr[0] + "." + arr[1] + "@evolveu.ca"
		return str.toLowerCase();
	},
	// daily - AssertEquals
	// Larry says do not use switch for only two outcomes
	compareTwo: (p1,p2) => { 
		let myBool = false;
		switch (p1==p2) {
			case true:
				myBool = true;
			break;
			case false:
				myBool = false;
				console.log("\n*** the two values are not the same\np1--> ",p1, "\np2--> ",p2);
			break;
			default:
				console.log("compareTwo default fail");
		}
		return myBool;
	}
}
export default functions;

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");