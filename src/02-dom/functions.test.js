import functions from "./functions.js"

test('card builder', () => {
  const testCreate = functions.createCard();
  expect(testCreate.nodeType).toEqual(1);
  expect(testCreate.id).toEqual("1");
  expect(testCreate.tagName).toEqual("DIV");
  expect(testCreate.classList.contains("card")).toEqual(true);
  expect(testCreate.parentNode).toEqual(null);
  
  const testParent = document.createElement("DIV");
  const testChild = testParent.appendChild(testCreate);
  expect(testParent.children[0].tagName).toEqual("DIV");
  expect(testChild.tagName).toEqual("DIV");
  
  console.log("Maverick's hawk");
  // parent node in, new card last child  
  console.log(functions.cardLast(testParent));//undefined
  // expect(functions.cardLast(testParent).parentNode.children[1].tagname).toEqual("DIV");


  // expect(functions.cardAfter()).toEqual();
  // expect(functions.cardBefore()).toEqual();
  // expect(functions.cardDelete()).toEqual();
  // expect(functions.btnCardPoser()).toEqual();
});

// document.createElement("div")
// expect(functions.addCard.id).toEqual(functions.i++);
