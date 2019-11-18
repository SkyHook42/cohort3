const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  btnCardPoser: (e) => {
    const cardSlot = e.target.parentNode;
    switch (e.target.id) {
      case "idBefore":
        functions.cardBefore(cardSlot);
        break;
      case "idAfter":
        functions.cardAfter(cardSlot);
        break;
      case "idDelete":
        functions.cardDelete(cardSlot);
        break;
    }
  },

  i: 0,
  createCard: () => {
    functions.i++;
    const card = document.createElement("DIV");
    card.className = "card";
    card.id = functions.i;
    card.innerHTML = `Card ${functions.i}
    <br><button id="idBefore" class="btnL">Add Card Before</button>
    <br><button id="idAfter" class="btnL">Add Card After</button>
    <button id="idDelete" class="btnR">Delete Card</button>`;
    return card;
  },

  cardAfter: (cardNode) => {
    cardNode.parentNode.insertBefore(functions.createCard(), cardNode.nextSibling);
  },

  cardBefore: (cardNode) => {
    cardNode.parentNode.insertBefore(functions.createCard(), cardNode);
  },

  cardDelete: (cardNode) => {
    cardNode.remove();
  },

  cardLast: (parNode) => {
    parNode.appendChild(functions.createCard());
  },
};

export default functions;