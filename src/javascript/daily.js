const functions = {
  // #region Callback Exercise (Part 1) - November 8, 2019
  fFindBCAB: (arrIn, fCallBack) => {
    const arrOut = [];
    for (const item of arrIn) {
      if (item.province === "AB" || item.province === "BC") {
        arrOut.push(item);
      }
    }
    return fCallBack(arrOut);
  },

  fNameBuilder: (arrIn) => {
    const arrOut = arrIn.map(item => item.fname + " " + item.lname);
    return arrOut;
  },
  // #endregion Callback Exercise (Part 1) - November 8, 2019

  // #region More Array Exercises (Really) - November 6, 2019
  // Using one of the callback functions we researched in the last exercise (but may have not used previously) create a new array for balances >= 1000 from the staff data. 
  balanceFilter: (arrIn) => {
    let arrFilter = [];
    arrFilter = arrIn.filter(item => item.balance >= 1000);
    return arrFilter;
  },

  balanceFilterReduce: (arrIn) => {
    return functions.balanceFilter(arrIn).reduce((acc, item) => acc + item.balance, 0);
  },

  balanceFilterEvery: (arrIn) => {
    let arrBool = false;
    arrBool = functions.balanceFilter(arrIn).every(item => item.balance >= 1000);
    return arrBool;
  },

  balanceFilterSome: (arrIn) => {
    let arrBool = false;
    arrBool = functions.balanceFilter(arrIn).some(item => item.balance > 1001);
    return arrBool;
  },

  balanceFilterFind: (arrIn) => {
    let arrFound = 0;
    arrFound = functions.balanceFilter(arrIn).find(item => item.balance > 1001).balance;
    return arrFound;
  },

  balanceFilterFindIndex: (arrIn) => {
    let arrInd = 0;
    arrInd = functions.balanceFilter(arrIn).findIndex(item => item.balance >= 1000);
    return arrInd;
  },
  // #endregion More Array Exercises (Really) - November 6, 2019

  // #region More Array Exercises - October 29, 2019
  balanceTotal: (arrIn) => {
    let arrTotal = 0;
    const summate = (acc, item) => acc + item.balance;
    arrTotal = arrIn.reduce(summate, 0);
    return arrTotal;
  },

  balanceAvg: (arrIn) => {
    return Number((functions.balanceTotal(arrIn) / arrIn.length).toFixed(2));
  },

  // #region links
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  balanceEvery: (arrIn) => {
    let arrBool = false;
    arrBool = arrIn.every(item => item.balance > 0);
    return arrBool;
  },

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  balanceSome: (arrIn) => {
    let arrBool = false;
    arrBool = arrIn.some(item => item.balance > 999);
    return arrBool;
  },

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  balanceFind: (arrIn) => {
    let arrFound = 0;
    arrFound = arrIn.find(item => item.balance > 999).balance;
    return arrFound;
  },

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
  balanceFindIndex: (arrIn) => {
    let arrInd = 0;
    arrInd = arrIn.findIndex(item => item.balance == 503);
    return arrInd;
  },
  // #endregion links
  // #endregion More Array Exercises - October 29, 2019

  // #region loopStaff each / map - October 25, 2019
  loopStaffForEach: (arrIn) => {
    let arrOut = [];
    arrIn.forEach(item => {
      arrOut.push(functions.makeEmailObj(item));
    });
    return arrOut;
  },

  loopStaffMap: (arrIn) => {
    let arrOut = [];
    arrOut = arrIn.map(functions.makeEmailObj);
    return arrOut;
  },
  // #endregion loopStaff each / map - October 25, 2019

  // #region loopStaff: in / of - October 24, 2019
  loopStaffIn: (arrIn) => {
    let arrOut = [];
    let index;

    for (index in arrIn) { //
      arrOut[index] = functions.makeEmailObj(arrIn[index]);
    }
    return arrOut;

  },

  loopStaffOf: (arrIn) => {
    let arrOut = [];
    for (const element of arrIn) {
      arrOut.push(functions.makeEmailObj(element));
    }
    return arrOut;
  },

  // #endregion loopStaff: in / of - October 24, 2019

  // #region loopStaff - October 22, 2019
  loopStaff: (arrIn) => {
    let arrOut = [];
    let i = 0;
    while (i < arrIn.length) {
      arrOut[i] = functions.makeEmailObj(arrIn[i]);
      i++;
    }
    return arrOut;
  },
  // #endregion loopStaff - October 22, 2019

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
