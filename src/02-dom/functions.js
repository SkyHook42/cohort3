const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  counter: 0,

  addCard: () => {
    functions.counter++;
    const newDiv = document.createElement("div");
    newDiv.className="sally";
    newDiv.id=functions.counter;
    newDiv.innerHTML=`Card Number ${functions.counter}
    <button id="idBefore">Add Before</button>
    <button id="idAfter">Add After</button>
    <button id="idDelete">Delete</button>`;
    return newDiv;
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