console.log("Hello World from basic.js");

function onButtonClicked() {
  console.log("inside the button click event");
  let short = document.getElementById("myIn").value;
  let store = parseFloat(short);
  sizeMe(store);
}

function sizeMe (x) {
  var myResponse = "not a number";
  if (isNaN(x)) {
  } else if (x<10) {
    myResponse = "small";
  } else if (x<20) {
    myResponse = "med";
  } else {
    myResponse = "large";  
  }
  console.log(document.getElementById("output").innerHTML = myResponse);
}