// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

// body.style.background="green";
//how to set node value
color1.value="#ff0000";
color2.value="#ffff00";

function setGradient(){
	body.style.background=
		"linear-gradient(to right,"
		+ color1.value
		+ ","
		+ color2.value
		+ ")";
		css.textContent=body.style.background + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

// Background Generator Files": 

// Below you will find the 3 files for the Background Generator. A few things you can try:

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!


// PS - if you have any questions, reach out to our student community in the #js or #helpme channel on Discord (Lecture 2 provides the link if you have not yet joined)!