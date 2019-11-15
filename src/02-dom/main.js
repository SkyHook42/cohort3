import functions from "./functions.js"

subCard.addEventListener("click", () => {
  const newCard = functions.addCard();
  leftSide.appendChild(newCard);
})

window.leftSide.addEventListener('click', (e) => {
  functions.btnRunner(e);
})