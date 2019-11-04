const functions = {
  // #region Prepare for Array Work - October 15, 2019
  forLoop: (arrIn) => {
    for (let i = 0; i < arrIn.length; i++) {
      acc += arrIn[i];
    }
    return acc;
  },

  whileLoop: (arrIn) => {
    let acc = 0;
    let i = 0;

    while (i < arrIn.length) {
      acc += arrIn[i];
      i++;
    }
    return acc;
  },

  doWhileLoop: (arrIn) => {
    let acc = 0;
    let i = 0;

    do {
      acc += arrIn[i]
      i++;
    }
    while (i < arrIn.length);
    return acc;
  },

  forInLoop: (objIn) => {
    let objStr="";
    let key=0;

    for (key in objIn) {
      objStr += objIn[key];
    }
    return objStr;
  },

  forOfLoop: (itrIn) => {
    let itrStr="";
    let i=0;

    for (i of itrIn){
      itrStr+= itrStr[i];
    return itrStr;
    }
  },
  // #endregion Prepare for Array Work - October 15, 2019

  // #region makeEmailObj - Oct 11, 2019
  makeEmailObj: (objNames) => {
    let str = objNames.fname + '.' + objNames.lname + '@evolveu.ca';
    return str.toLowerCase();
  },
  // #endregion makeEmailObj - Oct 11, 2019

  // #region makeEmailArr - October 9, 2019
  makeEmailArr: (arr) => {
    let str = arr[0] + "." + arr[1] + "@evolveu.ca";
    return str.toLowerCase();
  },
  // #endregion makeEmailArr - October 9, 2019

  // #region AssertEquals - October 7, 2019
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
  assertEquals: (p1, p2) => {
    let myBool = false;
    if (p1 === p2) {
      myBool = true;
    }
    else {
      myBool = false;
      console.log("*** the two values are not the same:\n    p1--> ", p1, "\n    p2--> ", p2, "\n");
    }
    return myBool;
  },
  // and before this comment ---
  // #region Java?:
  // assertEquals("a","b");
  // assertEquals("a","a");
  // assertEquals(1,2);
  // assertEquals(2,2);
  // assertEquals("2",2);
  // assertEquals("This value","This value");
  // #endregion Java?:
  // #endregion AssertEquals - October 7, 2019
}
export default functions;

// #region probably trash
  // #region loopStaff
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
  // #endregion - loopStaff

  // #region What’s my coverage
  // Run your coverage report and send the output to Larry as a pdf file. Follow these steps:

  // run your coverage report: npm test -- --coverage
  // look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
  // view in the browser. A double click on the file should do it
  // right-click and select the “Print” option
  // print to pdf
  // email Larry the pdf (we will be doing this a few more times in the following weeks)
  // #endregion - What’s my coverage
  // #region More Array Work - October 16-17
  // #endregion More Array Work - October 16-17
// #endregion probably trash
