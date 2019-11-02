const functions = {
  //#region - loopStaff
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
  //#endregion - loopStaff

  //#region - What’s my coverage
  // Run your coverage report and send the output to Larry as a pdf file. Follow these steps:

  // run your coverage report: npm test -- --coverage
  // look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
  // view in the browser. A double click on the file should do it
  // right-click and select the “Print” option
  // print to pdf
  // email Larry the pdf (we will be doing this a few more times in the following weeks)
  //#endregion - What’s my coverage
    
  //#region - More Array Work
  // Read the documentation on the following and create examples of each one:
  // slice
  // splice
  // forEach
  // map
  // reduce
  // filter
  // sort
  //#region - "do while .map" exercise
  // console.log("'do while & .map' routine\n");
  // tempArr=[];
  // do {
  //   //first arr element value fills temp array and map increment
  //   tempArr = tempArr.map((arrElement) => arrElement+arr[0]);
  //   tempArr.unshift(arr[0]);
  //   console.log("do while .map array build: ", tempArr, "\n");
  // }
  // while (tempArr.length < arr.length);
  //#endregion - "do while .map" exercise
  // return tempArr;
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
  //#endregion - More Array Work
        
  //#region - Prepare for Array Work
  prepArrWork: (arr) => {
    return arr;
    //#region - Basics: for
    //#endregion - Basics: for
    //#region - Basics: while
    //#endregion - Basics: while
    //#region - Basics: do while
    //#endregion - Basics: do while
    //#region - Next Level: for in
    //#endregion - Next Level: for in
    //#region - Next Level: for of
    //#endregion - Next Level: for of
  },

  //#endregion - Prepare for Array Work
        
  //#region - makeEmailObj
  makeEmailObj: (objNames) => {
    let str = objNames.fname+'.'+objNames.lname+'@evolveu.ca';
    return str.toLowerCase();
  },
  //#endregion - makeEmailObj

  //#region - makeEmailArr
  makeEmailArr: (arr) => {
    let str = arr[0] + "." + arr[1] + "@evolveu.ca";
    return str.toLowerCase();
  },
  //#endregion - makeEmailArr

  //#region - assertEquals
  /*	
  Write the function that will create this output:

  *** the two values are not the same:
  p1--> a
  p2--> b
  *** the two values are not the same:
  p1--> 1
  p2--> 2
  *** the two values are not the same:
  p1--> 2
  p2--> 2
  */

  // Write the function after this comment ---
  assertEquals: (p1,p2) => {
    let myBool = false;
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
  // and before this comment ---
  //Java?:
  // assertEquals("a","b");
  // assertEquals("a","a");
  // assertEquals(1,2);
  // assertEquals(2,2);
  // assertEquals("2",2);
  // assertEquals("This value","This value");
  //#endregion - assertEquals
}
export default functions;