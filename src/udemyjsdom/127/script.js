let enterButt = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// let liDel = document.querySelector("li");
const addDelButt=function(){
	console.log("invoked addDelButt");
}
const addLiAfterClick=function(){
	if (inputLength() > 0){
		createListElement();
	}
}
const addLiAfterKey=function(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
const createListElement=function(){
	// adds unordered list item, delete button, both id
	let liDesc=document.createElement("li");
	let liButt=document.createElement("button");
	liDesc.appendChild(liButt);
	liDesc.appendChild(document.createTextNode(input.value));
	liDesc.id="li"+input.value;
	liButt.innerHTML="delete";
	liButt.id="butt"+input.value;
	ul.appendChild(liDesc);
	input.value = "";
}
const delLiAfterClick=function(buttTarget){
	return ul.removeChild(buttTarget);
}
const inputLength=function(){
	return input.value.length;
}
const liModChoice=function(){
	let eTarget=document.getElementById(event.target.id);
	let liTarget=eTarget.parentNode;
	// failure to handle the li event outside the button
	// if (target id starts with "li"){
		// call togClass(which target)
	// } else {
		delLiAfterClick(liTarget);
	// }
}
const togClass=function(){
	console.log("invoked toggleDone");
	// 1. If you click on the list item, it toggles the .done  class on and off.
	// 	return eTarget.setAttribute("class","done");
}

enterButt.addEventListener("click", addLiAfterClick);
input.addEventListener("keypress", addLiAfterKey);
ul.addEventListener("click", liModChoice);
// ul.addEventListener("click", doneLiAfterClick);