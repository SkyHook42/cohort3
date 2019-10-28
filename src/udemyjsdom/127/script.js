let enterButt = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

const addLiAfterClick=function(){
	// check input isn't blank
	if (inputLength() > 0){
		createListElement();
	}
}

const addLiAfterKey=function(event){
	// check for enter key after field input
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
	liButt.innerHTML="delete";
	ul.appendChild(liDesc);
	input.value = "";
	input.focus();
}

const delLiAfterClick=function(evElement){
	// delete list item
	return evElement.parentNode.remove();
}

const inputLength=function(){
	// get field input length
	return input.value.length;
}

const liModChoice=function(ev){
	// choose which li element child was selected
	if (ev.target.tagName==="LI"){
		return togClass(ev.target);
	}
	return delLiAfterClick(ev.target);
}

const togClass=function(evElement){
	// toggle strikethrough appearance with class
	if(evElement.className==="done"){
		return evElement.removeAttribute("class");
	}
	return evElement.setAttribute("class","done");
}

enterButt.addEventListener("click", addLiAfterClick);
input.addEventListener("keypress", addLiAfterKey);
ul.addEventListener("click", liModChoice);