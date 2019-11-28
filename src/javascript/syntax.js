const syntax = {
  fDefAtt: (pTest) => {
    switch (typeof pTest) {
      case "number":
        return "I'm a number.";
      case "string":
        return "I'm a string.";
      case "boolean":
        return "I'm a boolean.";
      case "object":
        if (Array.isArray(pTest)) {
          return "I'm an array.";
        }
        return "I'm an object.";
      case "undefined":
        return "I'm an undefined.";
      default:
        return "";
    };
  },

  // sample if / else
  fIfElse: (pFruit) => {
    let sFruitOut = "";
    if (pFruit == "Apple") {
      return sFruitOut = "round"
    } else {
      return sFruitOut = "does it matter?"
    };
  },

  // functions
  fFuncTest: (pParIn) => {
    // - parameters
    let pParOut = pParIn + " returned!"
    // - returns
    return pParOut;
  },

  // arrays
  fFuncFBUpDate: (arrIn) => {
    // - add to the front
    arrIn.unshift(17);
    // - add to the end
    arrIn.push(42);
    // update values
    arrIn[3] = arrIn[3] + 4;
    return arrIn;
  },

  // loops 
  fLoopy: (tallyHo) => {
    // - for
    let i = 0;
    let dogWalk = 0;
    for (i; i <= 13; i++) {
      dogWalk = dogWalk + 1; //i= 14, no correction
    }

    // - for/in
    for (const property in tallyHo) {
      dogWalk = dogWalk + tallyHo[property];
    }
    dogWalk = dogWalk - 6;//i= 20, expected correction

    // -  while
    while (i <= 99) {
      dogWalk = dogWalk + 1;
      i++;
    }
    dogWalk = dogWalk - 86;//i = 100, expected correction

    // - do while
    do {
      dogWalk = dogWalk + 1;
    } while (dogWalk < 100);
    dogWalk = dogWalk - 86;//i = 100, expected correction

    // while (i=)
    while (dogWalk > 14) {
      dogWalk -= 1; //dogWalk = 14, no correction
    }
    return dogWalk;
  },

  // - forEach (with array and function)
  fFELoop: (arrIn) => {
    let arrOut = [];
    arrIn.forEach(item =>
      // double each element
      arrOut.push(item * 2));
    return arrOut;
  },
}

export default syntax;