import fBinCalc from "/projects/binary-calculator/BinCalcProject.js";

document.getElementById("idBinCalcWork").addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    console.log("idBinCalcWork listening")
    console.log("idBinCalcWork", e.target.id)
    // console.log(document.getElementById("idBinCalcWork"));
    let fld1st;
    let fld2nd;
    fld1st = e.target.value;
    // if (does other field exist?){
    //   add both fields
    // } else {
    // msg need other field
    // }
  }
})

document.getElementById("idBtnBinCalcAdd").addEventListener("click", e => {
  let binIn = e.target.value;
  console.log("btnBinCalcAdd listening")
  // console.log(document.getElementById("idBtnBinCalcAdd"));
})