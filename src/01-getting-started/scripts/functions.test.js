import functions from './functions'

// Exercise - Canadian Taxes
test('tax calculator', () => {
  expect(functions.pctRate(55)).toEqual(0.55);
  const income=[0,1000,47630,95259,147667,210371,300000];
  const tax=[0,150,7144.5,16908.445,30534.525,48718.685,78296.255];
  let i=0;
  do {
    expect(functions.cdnTaxes(income[i])).toEqual(tax[i]);
    i++;
  }
  while (i < 4);
  // console.log("i = ",i,income[i],tax[i]);
  // expect(functions.cdnTaxes(income[1])).toEqual(tax[1]);
  // expect(functions.cdnTaxes(income[2])).toEqual(tax[2]);
  // expect(functions.cdnTaxes(income[3])).toEqual(tax[3]);
});

// expect(functions.cdnTaxes(income)).toEqual();
// expect(functions.helloTaxWorld(income)).toEqual(78296.255);
// expect(functions.helloTaxWorld(income)).toEqual(7637.2);

// Exercise - Calculator

// Exercise - Basic Syntax

// Exercise - Enhancement

// Exercise - Working with HTML input
test('check sizes', () => {
  expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});