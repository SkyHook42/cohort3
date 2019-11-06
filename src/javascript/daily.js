const functions = {
  // #region loopStaff
  loopStaff: (arrIn) => {
    let arrOut = [];
    let i = 0;
    while (i < arrIn.length) {
      arrOut[i] = functions.makeEmailObj(arrIn[i]);
      i++;
    }
    return arrOut;
  },
  // #endregion - loopStaff

  // #region More Array Work - October 16-17
  methSlice: (arrIn, indStart, indEnd) => {
    let arrTest = [];
    arrTest = arrIn.slice(indStart, indEnd);
    return arrTest;
  },

  methSplice: (arrIn, indStart, indDel, itemsIn) => {
    arrIn.splice(indStart, indDel, itemsIn);
    return arrIn;
  },

  methForEach: (arrIn, arrInd) => {
    let arrOut = [];
    arrIn.forEach(arrItem => {
      arrOut.push(arrItem + 1);
    });
    return arrOut;
  },

  methMap: (arrIn) => {
    let arrOut = [];
    arrOut = arrIn.map(arrItem => arrItem + 1);
    return arrOut;
  },

  methReduce: (arrIn) => {
    function funcRedAdd(accRedAdd, itemArrIn) {
      return accRedAdd + itemArrIn;
    }
    return arrIn.reduce(funcRedAdd);
  },

  methFilter: (arrIn) => {
    return arrIn.filter(item => item >= 3);
  },

  methSort: (arrIn) => {
    // sorts by UTF-16 string values
    return arrIn.sort();
  },

  // #endregion More Array Work - October 16-17

  // #region Prepare for Array Work - October 15, 2019
  forLoop: (arrIn) => {
    let acc = 0;
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
    let objStr = "";
    let key = 0;

    for (key in objIn) {
      objStr += objIn[key];
    }
    return objStr;
  },

  forOfLoop: (itrIn) => {
    let itrStr = "";
    let element = 0;

    for (element of itrIn) {
      itrStr += element;
    }
    return itrStr;
  },

  // #endregion Prepare for Array Work - October 15, 2019

  // #region makeEmailObj - Oct 11, 2019
  makeEmailObj: (objNames) => {
    // input fname,lname; output evolveu email address string
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

// #endregion probably trash
