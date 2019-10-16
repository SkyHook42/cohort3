// import { booleanLiteral } from "@babel/types";

const functions = {
	// stub is func name
	makeEmailArr: (arr) => {
		let str = arr[0] + "." + arr[1] + "@evolveu.ca"
		return str.toLowerCase();
	},

	// compareTwo: (p1,p2) => { 
	// 	let myBool = false;
	// 	switch (p1==p2) {
	// 		case true:
	// 			myBool = true;
	// 		break;
	// 		case false:
	// 			myBool = false;
	// 			console.log("\n*** the two values are not the same\np1--> ",p1, "\np2--> ",p2);
	// 		break;
	// 		default:
	// 			console.log("compareTwo default fail");
	// 	}
	// 	return myBool;
	// }
}
// export default compareTwo;
export default functions;

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");

