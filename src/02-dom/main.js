import functions from "./functions.js"

subCard.addEventListener("click", () => {
  const newCard = functions.addCard();
  leftSide.appendChild(newCard);
})

window.leftSide.addEventListener('click', () => {
  let btnParent = event.target.parentNode;
  let newCardPlaced = functions.addCard();
  switch (event.target.id) {
    case "idBefore":
      leftSide.insertBefore(newCardPlaced,btnParent);
      break;
    case "idAfter":
        leftSide.insertAfter(newCardPlaced,btnParent);
      break;
    case "idDelete":
      btnParent.remove();
      break;
  }
})