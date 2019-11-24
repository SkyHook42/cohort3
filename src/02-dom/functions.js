const functions = {
  // #region Working with Cards
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

  // current card delete
  fCardDelete: nodeCard => {
    return nodeCard.remove();
  },

  // insert new card end of all cards
  fCardLast: e => {
    return e.target.parentNode.appendChild(functions.fCreateCard());
  },
  // #endregion Working with Cards

  // #region The Basic DOM
  // show on the console the parameter passed to the event listener
  fDOM: e => {
    console.log("fDOM says hi", e);
  },

  // add an event on the show button that displays all the “Children” of the <ol> tag
  fDOMShow: e => {
    // remove old report if present
    const nOldList = document.getElementById("idListReport");
    if (nOldList) {
      nOldList.remove();
    }

    //  build new report
    const oChildren = idOList.childNodes;
    let sList = "";
    for (functions.i = 0; functions.i < oChildren.length; functions.i++) {
      sList =
        sList +
        "<br>" +
        "node: " +
        oChildren[functions.i].nodeName +
        ", " +
        "value: " +
        oChildren[functions.i].textContent;
    }

    // render report
    const nChildList = document.createElement("DIV");
    nChildList.setAttribute("id", "idListReport");
    nChildList.innerHTML = "<br>" + "List children: " + sList;
    const btnBox = e.target.parentNode.parentNode;
    btnBox.appendChild(nChildList);
  },

  // add an event on the add button that will add a <li> tag to the end of the list
  fDOMAdd: e => {
    const nLastChild = document.createElement("LI");
    idOList.appendChild(nLastChild);
  }
  // #endregion The Basic DOM
};
export default functions;
