// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

let ageIn = "";
let strOut = "";
ageIn = prompt("How awld is youse?", "type your age here");
if (ageIn<18) {
	strOut = "Sorry, you are too young to drive this car. Powering off"
} else if (ageIn==18) {
	strOut = "Congratulations on your first year of driving. Enjoy the ride!"
} else {
	strOut = "Powering On. Enjoy the ride!"
};
alert(strOut);
