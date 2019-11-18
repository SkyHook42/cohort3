import functions from "./functions.js"

test('card builder', () => {
  const testFunc = functions.createCard();
  expect(testFunc.nodeType).toEqual(1);
  expect(testFunc.id).toEqual("1");
  expect(testFunc.tagName).toEqual("DIV");
  expect(testFunc.classList.contains("card")).toEqual(true);
  // console.log(testFunc.parentNode);
  // expect(functions.cardLast(testFunc.parentNode)).toEqual("leftSide");
  // expect(functions.cardAfter()).toEqual();
  // expect(functions.cardBefore()).toEqual();
  // expect(functions.cardDelete()).toEqual();
  // expect(functions.btnCardPoser()).toEqual();
});

// document.createElement("div")
// expect(functions.addCard.id).toEqual(functions.i++);
