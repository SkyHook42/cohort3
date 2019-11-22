const funcBinCalc = {
  // funcMoveFocus: focusID => {
  //   // use the input field as the focus target when clicking on section link
  //   return "";
  // }

  funcHello: () => {
    console.log("BinCalcProject.js says hi");
  },

  funcBinValid: (binIn) => {
    console.log("funcBinValid says hi", binIn);
    let arrBin = [];
    // test each character for ones and zero
    // return validity boolean
    // str;
    // parseInt(str, 2);
    return arrBin;
  },

  funcBinAdd: () => {
    // take two binary inputs and add them
    // var xor1 = !(a === b);
    // or maybe the following
    // if (!foo != !bar) {
    // -- this expression style negates the variables to coerce to booleans
    // }
    // return binary sum
  },

  // var bin1 = 0;
  // var bin2 = 1;
  // var sum = 0;
  
  redo: (x, y) => {
    // function redo(x,y) {
    // var x = false;
    // var y = false;
    var dig1 = "";
    var dig2 = "";
    var a = !!(x && y);//x and y as boolean
    var b = !x !== !y;//x xor y as boolean
    console.log(a, b);
    if (a === true) {
      dig1 = "1";
    } else {
      dig1 = "0";
    }

    if (b === true) {
      dig2 = "1";
    } else {
      dig2 = "0";
    }
    // console.log(String(dig1) + String(dig2));
  },
};

// console.log(sum = a+b);

export default funcBinCalc;