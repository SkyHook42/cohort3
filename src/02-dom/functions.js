const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  i: 0,
  addCard: () => {
    functions.i++;
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = functions.i;
    newCard.innerHTML = `Card ${functions.i}
    <br><button id="idBefore" class="btnL">Add Card Before</button>
    <br><button id="idAfter" class="btnL">Add Card After</button>
    <button id="idDelete"class="btnR">Delete Card</button>`;
    return newCard;
  },

  btnRunner: (e) => {
    let btnParent = e.target.parentNode;
    let newCardPlace = functions.addCard;
    switch (e.target.id) {
      case "idBefore":
        leftSide.insertBefore(newCardPlace(), btnParent);
        break;
      case "idAfter":
        btnParent.parentNode.insertBefore(newCardPlace(), btnParent.nextSibling);
        break;
      case "idDelete":
        btnParent.remove();
        break;
    }
  },
};

export default functions;