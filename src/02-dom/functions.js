const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  btnCardPoser: (e) => {
    const cardSlot = e.target.parentNode;
    switch (e.target.getAttribute.key) {
      case "keyBefore":
        functions.cardBefore(cardSlot);
        break;
      case "keyAfter":
        functions.cardAfter(cardSlot);
        break;
      case "keyDelete":
        functions.cardDelete(cardSlot);
        break;
    }
  },

  i: 0,
  createCard: () => {
    functions.i++;
    const card = document.createElement("DIV");
    card.className = "card";
    card.setAttribute("key", functions.i);
    let cardHead = document.createTextNode("Card " + functions.i);
    // cardHead.setAttribute("class","bobby");//maybe later, not requirement
    card.appendChild(cardHead);

    const btnCardBF = document.createElement("BUTTON");
    btnCardBF.setAttribute("key", "keyBefore");
    btnCardBF.setAttribute("class", "btnL");
    btnCardBF.setAttribute("type", "button");
    btnCardBF.innerText = "Add Before";
    card.appendChild(btnCardBF);
    const btnCardAF = document.createElement("BUTTON");
    btnCardAF.setAttribute("key", "keyAfter");
    btnCardAF.setAttribute("class", "btnL");
    btnCardAF.setAttribute("type", "button");
    btnCardAF.innerText = "Add After";
    card.appendChild(btnCardAF);
    const btnCardDel = document.createElement("BUTTON");
    btnCardDel.setAttribute("key", "keyDelete");
    btnCardDel.setAttribute("class", "btnR");
    btnCardDel.setAttribute("type", "button");
    btnCardDel.innerText = "Delete";
    card.appendChild(btnCardDel);
    return card;
  },

  cardAfter: (cardNode) => {
    cardNode.parentNode.insertBefore(functions.createCard(), cardNode.nextSibling);
  },

  cardBefore: (cardNode) => {
    cardNode.parentNode.insertBefore(functions.createCard(), cardNode);
  },

  cardDelete: (cardNode) => {
    console.log("cardDelete", cardNode.remove());
    return cardNode.remove();
  },

  cardLast: (parNode) => {
    return parNode.appendChild(functions.createCard());
  },
};

export default functions;