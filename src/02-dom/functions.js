const functions = {
  // #region cards
  // decide button selected
  fBtnChooser: e => {
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
    const cardLabel = document.createElement("SPAN");
    cardLabel.className = "label";
    cardLabel.innerText = "Card " + functions.i;
    const btnCardAF = document.createElement("BUTTON");
    btnCardAF.setAttribute("type", "button");
    btnCardAF.setAttribute("class", "btnL");
    btnCardAF.innerText = "Add After";
    const btnCardBF = document.createElement("BUTTON");
    btnCardBF.setAttribute("type", "button");
    btnCardBF.setAttribute("class", "btnL");
    btnCardBF.innerText = "Add Before";
    const btnCardDel = document.createElement("BUTTON");
    btnCardDel.setAttribute("type", "button");
    btnCardDel.setAttribute("class", "btnR");
    btnCardDel.innerText = "Delete";

    card.appendChild(cardLabel);
    card.appendChild(btnCardBF);
    card.appendChild(btnCardAF);
    card.appendChild(btnCardDel);
    return card;
  },

  // insert new card after current card
  fCardAfter: nodeCard => {
    return nodeCard.after(functions.fCreateCard());
  },

  // insert new card before current card
  fCardBefore: nodeCard => {
    return nodeCard.before(functions.fCreateCard());
  },

  // current card deleted
  fCardDelete: nodeCard => {
    return nodeCard.remove();
  },

  // insert new card end of all cards
  fCardLast: e => {
    return e.target.parentNode.appendChild(functions.fCreateCard());
  },
  // #endregion cards

  // #region DOM
  // DOM exercise playground
  fDOMSandbox: e => {
    console.log("fDOMSandbox says hi", e);
  },

  fDOMShow: e => {
    console.log("fDOMShow says hi", e);
    // 	// add an event on the show button that displays all the “Children” of the <ol> tag
    let nodeAllChildren = e.target.parentNode.createElement(Text);
    console.log();
    // nodeAllChildren.innerText("")
    // e.target.parentNode.appendChild
  },

  fDOMAdd: e => {
    console.log("fDOMAdd says hi", e);
    // 	// add an event on the add button that will add a <li> tag to the end of the list
  }
  // #endregion DOM
};
export default functions;

