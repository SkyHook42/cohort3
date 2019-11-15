const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  counter: 0,
  addCard: () => {
    functions.counter++;
    const newCard = document.createElement("div");
    newCard.className="card";
    newCard.id=functions.counter;
    newCard.innerHTML=`Card Number ${functions.counter}
    <br><button id="idBefore" class="btnL">Add Card Before</button>
    <br><button id="idAfter" class="btnL">Add Card After</button>
    <button id="idDelete"class="btnR">Delete Card</button>`;
    return newCard;
  },
  delCard:(idIn)=>{
    // idIn.removeParent
    // var x = document.getElementById("card2").previousSibling.innerHTML; 
    idIn.remove();
    // return console.log("inside delCard");
    // return 0;
  },
};

export default functions;