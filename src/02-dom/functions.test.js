import functions from "./functions.js"

test('card builder', () => {
  const testCreate = functions.createCard();
  expect(testCreate.nodeType).toEqual(1);
  expect(testCreate.getAttribute("key")).toEqual("1");
  expect(testCreate.tagName).toEqual("DIV");
  expect(testCreate.classList.contains("card")).toEqual(true);
  expect(testCreate.parentNode).toEqual(null);

  const testParent = document.createElement("DIV");
  const testChild = testParent.appendChild(testCreate);
  expect(testParent.children[0].getAttribute("key")).toEqual("1");
  expect(functions.cardLast(testParent).parentNode.children[1].getAttribute("key")).toEqual("2");

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
