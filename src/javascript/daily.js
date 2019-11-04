const functions = {
  // #region - loopStaff
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

  // #region - What’s my coverage
  // Run your coverage report and send the output to Larry as a pdf file. Follow these steps:

  // run your coverage report: npm test -- --coverage
  // look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
  // view in the browser. A double click on the file should do it
  // right-click and select the “Print” option
  // print to pdf
  // email Larry the pdf (we will be doing this a few more times in the following weeks)
  // #endregion - What’s my coverage
    
  // #region - More Array Work
  moreArrWork: (arrIn) => {
    const returnFactor=-2;
    let arrTest = [];
    let i = 0;
    
    let arrConst = [...arrIn];
    if (arrConst.toString() != "1,2,3,4,5") {
      // #region - slice
      let arrSlice = [...arrIn];
      let arrTrimStart = arrSlice.slice(0,2);
      let arrTrimMid = arrSlice.slice(2,4);
      let arrTrimEnd = arrSlice.slice(4);

      arrSlice = [];
      arrSlice = [...arrSlice,...arrTrimStart,...arrTrimMid,...arrTrimEnd];

      // rebuild mod array for test
      arrTest=[];
      i = 0;
      while (i < arrSlice.length){
        arrTest[i] = arrSlice[i]+returnFactor;
        i++;
      }
      // #endregion - slice
      
      // #region - splice
      let arrSplice = [...arrIn];
      arrTrimStart = arrSplice.slice(0,2);
      arrTrimMid = arrSplice.slice(2,4);
      arrTrimEnd = arrSplice.slice(4);

      // rebuild array from slices
      arrSplice = [];
      arrSplice.splice(0,0,...arrTrimStart);
      arrSplice.splice(2,0,...arrTrimMid);
      arrSplice.splice(4,0,...arrTrimEnd);
      
      // rebuild mod array for test
      arrTest=[];
      i = 0;
      while (i < arrSplice.length){
        arrTest[i] = arrSplice[i]+returnFactor;
        i++;
      }
      // arrTest = [...arrSplice];
      
      // #endregion - splice
      
      // #region - forEach
      let arrEach = [...arrIn];

      arrTest = [];
      arrEach.forEach(function(element,index){
        arrEach[index]=element+returnFactor;
      });
      arrTest = [...arrEach];
      // #endregion - forEach
      
      // #region - map
      let arrMap = [...arrIn];

      arrTest = [];
      arrMap = arrMap.map(item => item+returnFactor);
      arrTest = [...arrMap];
      // #endregion - map
      
      // #region - reduce
      let arrReduce = [...arrIn];
      let reducedAR = 0;
      let reducedADiff = 0;
      let itemFirst = 0;
      
      reducedAR = arrReduce.reduce((acc,item) => acc+item);
      // difference between current array reduce and given array reduce
      reducedADiff = reducedAR-arrReduce.map(item => item+returnFactor).reduce((acc,item) => acc+item);
      
      // find first of given range with sequential integer count and sum
      itemFirst = (reducedAR-reducedADiff)/arrReduce.length
      
      // rebuild given array
      arrReduce = [];
      i = 0;
      while (i < arrIn.length){
          arrReduce.splice(i,1,itemFirst);
          itemFirst++;
          i++;
        }

      // rebuild mod array for test
      arrTest = [];
      i = 0;
      while (i < arrReduce.length){
        arrTest[i] = arrReduce[i]+returnFactor;
        i++;
      }
      // #endregion - reduce

      // #region - filter
      let arrFilter = [...arrIn];

      arrTrimMid = arrSlice.slice(2,4);
      const biggerArr = arrFilter.filter(item => item > 5);
      const smallerArr = arrFilter.filter(item => item <= 5);
      
      // rebuild given array
      arrFilter=[];
      arrFilter = smallerArr.concat(biggerArr);

      // rebuild mod array for test
      arrTest = [];
      i = 0;
      while (i < arrFilter.length){
        arrTest[i] = arrFilter[i]+returnFactor;
        i++;
      }
      // #endregion - filter
        
      // #region - sort
      let arrSort = [...arrIn];

      // randomize elements in-place with Durstenfeld algorithm
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
      }

      arrSort[shuffleArray(arrSort)];// randomized element order
      arrSort.sort();
      
      // rebuild mod array for test
      arrTest = [];
      i = 0;
      while (i < arrSort.length){
        arrTest[i] = arrSort[i]+returnFactor;
        i++;
      }
      // #endregion - sort
        
      } else {
        arrTest=[...arrConst];
    }
    return arrTest;
  },
  // #endregion - More Array Work
        
  // #region - Prepare for Array Work
  prepArrWork: (arrIn) => {
    const returnFactor=-2;
    let arrTest=[];
    let i;

    let arrConst=[...arrIn];
    if (arrConst.toString()!="1,2,3,4,5") {
      // #region - Basics: for
      let arrFor=[...arrIn];
      for (let i = 0; i < arrFor.length; i++) {
        arrFor[i] = arrFor[i]+Number(returnFactor);
      }
      arrTest=[...arrFor];
      // #endregion - Basics: for

      // #region - Basics: while
      let arrWhile=[...arrIn];
      i=0;
      while (i < arrWhile.length) {
        arrWhile[i]=arrWhile[i]+Number(returnFactor);
        i++;
      }
      // #endregion - Basics: while

      // #region - Basics: do while
      let arrDoWhile=[...arrIn];
      i=0;
      do {
        arrDoWhile[i]=arrDoWhile[i]+Number(returnFactor);
        i++;
      }
      while (i < arrDoWhile.length);
      arrTest=[...arrDoWhile];
      // #endregion - Basics: do while

      // #region - Next Level: for in
      let arrForIn=[...arrIn];
      for (let item in arrForIn) {
        arrForIn[item]=arrForIn[item]+Number(returnFactor);
      }
      arrTest=[...arrForIn];
      // #endregion - Next Level: for in

      // #region - Next Level: for of
      let arrForOf=[...arrIn];
      let arrLoop=[];
      for (const item of arrForOf) {
        // rebuild array from each item
        arrLoop.push(item+Number(returnFactor));
      }
      arrForOf=[...arrLoop];
      arrTest=[...arrForOf];
      // #endregion - Next Level: for of

    } else {
      arrTest=[...arrConst];
    }
    return arrTest;
  },

  // #endregion - Prepare for Array Work
        
  // #region - makeEmailObj
  makeEmailObj: (objNames) => {
    let str = objNames.fname+'.'+objNames.lname+'@evolveu.ca';
    return str.toLowerCase();
  },
  // #endregion - makeEmailObj

  // #region - makeEmailArr
  makeEmailArr: (arr) => {
    let str = arr[0] + "." + arr[1] + "@evolveu.ca";
    return str.toLowerCase();
  },
  // #endregion - makeEmailArr

  // #region - assertEqual
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
      console.log("*** the two values are not the same:\n    p1--> ",p1,"\n    p2--> ",p2,"\n");
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
  // #endregion - assertEquals
}
export default functions