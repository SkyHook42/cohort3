console.log("Hello World from basic.js");

function onButtonClicked() {
    console.log("I’m in the button click event");
    let short = document.getElementById("myIn").value;
        console.log(short);
        let store = parseInt(short);
        console.log(store);
        console.log (store+1);
        sizeMe(store);
}

function sizeMe (x) {
    var myResponse = "not responding";
    if (x<10) {
        myResponse = "small"
    }   else if (x<20) {
        myResponse = "med"
    } else {
        myResponse = "large"  
    }
    console.log(document.getElementById("output").innerHTML = myResponse);
}