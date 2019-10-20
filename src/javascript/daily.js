// import { tsNamespaceExportDeclaration } from "@babel/types";
// import { booleanLiteral } from "@babel/types";

const functions = {
	//#region - daily - More Array Work
	// Read the documentation on the following and create examples of each one:
	// slice
	// splice
	// forEach
	// map
	// reduce
	// filter
	// sort
	//#endregion - daily - More Array Work
	//#region - daily - Prepare for Array Work
	prepArrWork: (arr) => {
		let tempArr=[];
		//#region - "for in" exercise
		//#endregion - "for in" exercise
		//#region - "for of" exercise
		//#endregion - "for of" exercise
		//#region - "for" exercise
		// let range = 2 //range width for filter array
		// const rangeMod = function rangeIn(range){
		// 	return ;
		// }
		// i=0;
		// for (i=0; i<arr.length; i++){
		// 	console.log("'while & .filter' incrementing ", range,"\n");
		// }
		//#endregion - "for" exercise
		//#region - "while" exercise
		// i=0;
		// while (i < arr.length) {
		// 	function reduceFunc(total, nextElement){
		// 	return total - nextElement;
		// 	}

		// 	// 
		// 	let reduceMethod = arr.reduce(reduceFunc);
		// 	console.log("'while & .reduce' incrementing subtraction ", 
		// 		reduceMethod-i,"\n");
		// 		//rebuild array for testing
		// 		//tempArr.push(reduceMethod+i);
		// 		//tempArr.reverse();
		// 	i++;
		// },
		//#endregion - "while" exercise
		//#region - "do while" exercise
		console.log("'do while & .map' routine\n");
		tempArr=[];
		do {
			//first arr element value fills temp array and map increment
			tempArr = tempArr.map((arrElement) => arrElement+arr[0]);
			tempArr.unshift(arr[0]);
			console.log(".map increment array build: ", tempArr, "\n");
		}
		while (tempArr.length < arr.length);
		//#endregion - "do while" exercise
		return tempArr;
	},
	//#endregion - daily - Prepare for Array Work
	//#region - daily - makeEmailArr
	makeEmailArr: (arr) => {
		let str = arr[0] + "." + arr[1] + "@evolveu.ca";
		return str.toLowerCase();
	},
	//#endregion - daily - makeEmailArr
	//#region - daily - assertEquals
	assertEquals: (p1,p2) => {
		let myBool = false;
		// Larry says don't use switch command for two outcomes
		if (p1===p2) {
			myBool = true;
		}
		else {
			myBool = false;
			console.log("*** the two values are not the same:\n    p1--> ",
				p1,"\n    p2--> ",p2,"\n");
		}
		return myBool;
	},
	//#endregion - daily - assertEquals
}
export default functions;