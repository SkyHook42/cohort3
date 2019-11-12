const functions = {
  helloworld: () => {
    console.log("hello World from functions")
  },

  counter: 0,

  addCard: () => {
    functions.counter++;
    const newDiv = document.createElement("div");
    newDiv.className="sally";
    newDiv.innerHTML=`Card Number ${functions.counter}
    <button id="idBefore">Add Before</button>
    <button id="idAfter">Add After</button>
    <button id="idDelete">Delete</button>`;
    return newDiv;
  },
};

export default functions;