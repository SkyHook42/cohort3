import functions from "./functions.js";

btnAddCard.addEventListener("click", (e) => {
  functions.cardLast(e.target.parentNode);
})

leftSide.addEventListener('click', (e) => {
  functions.btnCardPoser(e);
})

// leftSide.addEventListener('hover', (e) => {
//   functions.btnCardPoser(e);
// })

