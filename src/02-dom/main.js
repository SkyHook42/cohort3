import functions from "./functions.js"

subCard.addEventListener("click", () => {
  const newAddedDiv = functions.addCard();
  leftSide.appendChild(newAddedDiv);
})

window.leftSide.addEventListener('click', () => {
  let btnParent = event.target.parentNode;
  console.log(btnParent);
  // let newNode = document.createElement(functions.addCard);
  switch (event.target.id) {
    case "idBefore":
      console.log("event target parent", btnParent);
      // leftSide.insertBefore(functions.addCard,btnParent);
      // event.target.parentNode.remove();
      break;
    case "idAfter":
      // console.log("event target parent", btnParent);
      // element.parentNode.insertBefore(newElement, element.nextSibling);
      // event.target.parentNode.remove();
      break;
    case "idDelete":
      btnParent.remove();
      break;
  }
})