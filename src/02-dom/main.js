import functions from "./functions.js"

subCard.addEventListener("click",() => {
  const newAddedDiv = functions.addCard();
  leftSide.appendChild(newAddedDiv);
})


// makeCard = document.body.createElement("div");