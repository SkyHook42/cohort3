let enterButt = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let liButt=document.createElement("button");
		liButt.innerHTML="delete";
	li.appendChild(liButt);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKey(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDelButt(){
	console.log("invoked addDelButt");
}

function toggleDone(){
	console.log("invoked toggleDone");
}

enterButt.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKey);