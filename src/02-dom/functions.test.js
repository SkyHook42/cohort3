import functions from "./functions.js"

test('card builder', () => {
  // create card
  const testCreate = functions.fCreateCard();
  expect(testCreate.nodeType).toEqual(1);
  expect(testCreate.innerText).toEqual("Card 1");
  expect(testCreate.tagName).toEqual("DIV");
  expect(testCreate.classList.contains("card")).toEqual(true);
  expect(testCreate.parentNode).toEqual(null);
  //add card to parent
  const testParent = document.createElement("DIV")
  const testChild = testParent.appendChild(testCreate);
  expect(testParent.children[0].innerText).toEqual("Card 1");
  // expect(functions.fCardLast(testParent).parentNode.children;//fail

  console.log("Maverick's hawk");
  // functions.cardDelete();//undefined
  // expect(document.parentNode.children[0]).toEqual("2");
  // expect(functions.cardLast(testParent).parentNode.children[2].tagname).toEqual("DIV");
  
  // console.log(functions.cardLast(testParent).tagName);
  // expect(functions.cardAfter()).toEqual();
  // expect(functions.cardBefore()).toEqual();
  // expect(functions.cardDelete()).toEqual();
  // expect(functions.btnCardPoser()).toEqual();
});

// document.createElement("div")
// expect(functions.addCard.id).toEqual(functions.i++);
