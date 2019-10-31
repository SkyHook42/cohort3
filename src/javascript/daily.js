//#region - daily functions object
const functions = {
		//#region - daily - loopStaff
			// Write a function that will take an array and return an array of emails. The new function you are writing today will call makeEmailObj that you have written in a previous exercise. 
		
			// Copy and paste the code provided and you know the rest of the stick...Test first.
		
			// /*
			//     Sample data for the next few exercises.
			// */
		
			// const data = {
			//     staff: [
			//         { fname: "Jane", lname: "Smith", balance: 10 },
			//         { fname: "Liam", lname: "Henry", balance: 1000 },
			//         { fname: "Emma", lname: "Jones", balance: 1330 },
			//         { fname: "Olivia", lname: "Notly", balance: 310 },
			//         { fname: "Noah", lname: "Ho", balance: 503 },
			//         { fname: "William", lname: "Lee", balance: 520 },
			//         { fname: "Benjamin", lname: "Amis", balance: 150 },
			//     ],
			//     company: "EvolveU",
			//     city: "Calgary",
			//     prov: "Alberta"
			// };
		
			/*	
				Write the function to build email addresses for the company.
			*/
		
			// test('email builder for company', () => {
			//     const staffEmail = functions.loopStaff(data.staff);
			//     expect(staffEmail[0])
			//         .toEqual("jane.smith@evolveu.ca");
			//     expect(staffEmail[3])
			//         .toEqual("olivia.notly@evolveu.ca");
			//     expect(staffEmail[6])
			//         .toEqual("benjamin.amis@evolveu.ca");
			// });
		//#endregion - daily - loopStaff

		//#region - daily - What’s my coverage
			// Run your coverage report and send the output to Larry as a pdf file. Follow these steps:
		
			// run your coverage report: npm test -- --coverage
			// look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
			// view in the browser. A double click on the file should do it
			// right-click and select the “Print” option
			// print to pdf
			// email Larry the pdf (we will be doing this a few more times in the following weeks)
		//#endregion - daily - What’s my coverage

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
			
			//#region - "for .filter" exercise
			// let range = 2 //range width for filter array
			// const rangeMod = function rangeIn(range){
			// 	return ;
			// }
			// i=0;
			// for (i=0; i<arr.length; i++){
			// 	console.log("'while .filter' incrementing ", range,"\n");
			// }
			//#endregion - "for .filter" exercise
			
			//#region - "while .reduce" exercise
			// i=0;
			// while (i < arr.length) {
			// 	function reduceFunc(total, nextElement){
			// 	return total - nextElement;
			// 	}

			// 	// 
			// 	let reduceMethod = arr.reduce(reduceFunc);
			// 	console.log("'while .reduce' subtraction ", 
			// 		reduceMethod-i,"\n");
			// 		//rebuild array for testing
			// 		//tempArr.push(reduceMethod+i);
			// 		//tempArr.reverse();
			// 	i++;
			// },
			//#endregion - "whilen .reduce" exercise
			
			//#region - "do while .map" exercise
			console.log("'do while & .map' routine\n");
			tempArr=[];
			do {
				//first arr element value fills temp array and map increment
				tempArr = tempArr.map((arrElement) => arrElement+arr[0]);
				tempArr.unshift(arr[0]);
				console.log("do while .map array build: ", tempArr, "\n");
			}
			while (tempArr.length < arr.length);
			//#endregion - "do while .map" exercise
			return tempArr;
		},

		//#endregion - daily - Prepare for Array Work
		
		//#region - daily - makeEmailObj
			makeEmailObj: (objNames) => {
				let str = objNames.fname+'.'+objNames.lname+'@evolveu.ca';
				console.log(str, '\n');
				return str.toLowerCase();
			},
		//#endregion - daily - makeEmailObj
		
		//#region - daily - makeEmailArr
		makeEmailArr: (arr) => {
			let str = arr[0] + "." + arr[1] + "@evolveu.ca";
			console.log(str, '\n');
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
//#endregion - daily functions object
export default functions;