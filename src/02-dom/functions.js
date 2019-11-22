const functions = {
  // decide button selected
  fBtnChooser: (e) => {
    const cardSlot = e.target.parentNode;
    switch (e.target.innerText) {
      case "Add Card":
        functions.fCardLast(e);
        break;
      case "Add Before":
        functions.fCardBefore(cardSlot);
        break;
      case "Add After":
        functions.fCardAfter(cardSlot);
        break;
      case "Delete":
        functions.fCardDelete(cardSlot);
        break;
    }
  },

  i: 0,
  // create new card  
  fCreateCard: () => {
    functions.i++;
    const card = document.createElement("DIV");
    card.className = "card";
    card.innerText = "Card " + functions.i;
    const btnCardDel = document.createElement("BUTTON");
    btnCardDel.setAttribute("type", "button");
    btnCardDel.setAttribute("class", "btnR");
    btnCardDel.innerText = "Delete";
    const btnCardBF = document.createElement("BUTTON");
    btnCardBF.setAttribute("type", "button");
    btnCardBF.setAttribute("class", "btnL");
    btnCardBF.innerText = "Add Before";
    const btnCardAF = document.createElement("BUTTON");
    btnCardAF.setAttribute("type", "button");
    btnCardAF.setAttribute("class", "btnL");
    btnCardAF.innerText = "Add After";

    card.appendChild(btnCardBF);
    card.appendChild(btnCardDel);
    card.appendChild(btnCardAF);
    return card;
  },

  // insert new card after current card
  fCardAfter: (nodeCard) => {
    return nodeCard.after(functions.fCreateCard());
  },

  // insert new card before current card
  fCardBefore: (nodeCard) => {
    return nodeCard.before(functions.fCreateCard());
  },

  // current card deleted
  fCardDelete: (nodeCard) => {
    return nodeCard.remove();
  },

  // insert new card end of all cards
  fCardLast: (e) => {
    return e.target.parentNode.appendChild(functions.fCreateCard());
  },
};
export default functions;