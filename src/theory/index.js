import funcBinCalc from "/projects/binary-calculator/BinCalcProject.js";

// document.getElementById("binCalcIn").addEventListener("keydown", e => {
//   if (e.keyCode === 13) {
//     var binIn = e.target.value;
//     // return binIn;
//   }
// });


// var bin1 = 0;
// var bin2 = 1;
var x = false;
var y = false;
var dig1 = "";
var dig2 = "";
// var sum = 0;

function redo(x,y) {
  var a = !!(x && y);//x and y as boolean
  var b = !x !== !y;//x xor y as boolean
  console.log(a,b);
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
  console.log(String(dig1) + String(dig2));
}

// console.log(sum = a+b);