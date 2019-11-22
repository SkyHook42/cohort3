import functions from "./functions.js"

test('card builder', () => {
  // create card
  const testCreate1 = functions.fCreateCard();
  expect(testCreate1.nodeType).toEqual(1);
  expect(testCreate1.innerText).toEqual("Card 1");
  expect(testCreate1.classList.contains("card")).toEqual(true);
  expect(testCreate1.parentNode).toEqual(null);
  //create parent add more cards 
  const testParent = document.createElement("DIV")
  testParent.appendChild(testCreate1);
  const testCreate2 = functions.fCreateCard();
  testParent.appendChild(testCreate2);
  const testCreate3 = functions.fCreateCard();
  testParent.appendChild(testCreate3);
  // delete card
  functions.fCardDelete(testCreate2);
  expect(testParent.children[1].innerText).toEqual("Card 3");
  // insert card before
  functions.fCardBefore(testCreate3);
  expect(testParent.children[1].innerText).toEqual("Card 4");
  // insert card after
  functions.fCardAfter(testCreate1);
  expect(testParent.children[1].innerText).toEqual("Card 5");
});
