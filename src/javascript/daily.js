import { tsNamespaceExportDeclaration } from "@babel/types";

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
		let i=0;
		let tempArr = arr;
		// Next Level:
		// "for in" exercise
		// "for of" exercise

		// "for" exercise
		// let range = 2 //range width for filter array
		// const rangeMod = function rangeIn(range){
		// 	return ;
		// }

		// i=0;
		// for (i=0; i<arr.length; i++){
		// 	console.log("'while & .filter' incrementing ", range,"\n");
		// }

		// "while" exercise
		i=0;
		while (i < arr.length) {
			function reduceFunc(total, nextElement){
			return total - nextElement;
			}

			// tempArr = 
			let reduceMethod = arr.reduce(reduceFunc);
			console.log("'while & .reduce' incrementing subtraction ", 
				reduceMethod-i,"\n");
				//rebuild array for testing
				//tempArr.push(reduceMethod+i);
				//tempArr.reverse();
			i++;
		}
	
		// "do while" exercise
		i=0;
		do { 
		let consoleReport = tempArr.map((arrElement) => arrElement+i);
			console.log("'do while & .map' incrementing addition ",
				consoleReport,"\n");
			i++;
		}
		while (i < arr.length);
		//reverse "do whilem .map" mod for testing
		// tempArr = tempArr.map((arrElement) => arrElement-(arr.length-1));
		return tempArr;
	},

	// daily - makeEmailArr
	makeEmailArr: (arr) => {
		let str = arr[0] + "." + arr[1] + "@evolveu.ca"
		return str.toLowerCase();
	},
	// daily - AssertEquals
	// Larry says no switch command for only two outcomes
	compareTwo: (p1,p2) => {
		let myBool = false;
		if (p1==p2) {
			myBool = true;
		}
		else {
			myBool = false;
			console.log("*** the two values are not the same\np1--> ",p1,
				"\np2--> ",p2,"\n");
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