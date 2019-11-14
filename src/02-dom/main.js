import functions from "./functions.js"

subCard.addEventListener("click", () => {


  const newAddedDiv = functions.addCard();
  leftSide.appendChild(newAddedDiv);
})

window.leftSide.addEventListener('click', () => {
  console.log('my parent is', event.target.parentNode.id);//NICK! this is the key to moving forward Jen says hi;-)  what do you call a pile of kittens? A meow-tain! 
  // console.log("inside switch", event.target.id);
  switch (event.target.id) {
    case "idBefore":
      console.log("idbefore click");
      break;
    case "idAfter":
      console.log("idAfter click");
      break;
    case "idDelete":
      console.log("event target",event.target.id);
      let parentCard = document.getElementById(event.target.id).parentNode;
      console.log("parent Card ",parentCard);
      console.log("parent Card id", parentCard.id);
      // functions.delCard(parentCard.id);
      break;
  }
})

// makeCard = document.body.createElement("div");