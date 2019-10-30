import functions from './functions'

// Exercise - Canadian Taxes
test('tax calculator', () => {
  let income=1;

  // let income=[0,1000,47630,95259,147667,210371,300000];
  // let tax=[0,150,7144.5,16908.445,30534.525,48718.685,78296.255]
  // expect(functions.helloTaxWorld(income)).toEqual(78296.255);
  // expect(functions.helloTaxWorld(income)).toEqual(7637.2);
  // let i=0;
  // do {
  //   console.log("i = ",i,income[i],tax[i]);
  //   console.log(expect(functions.helloTaxWorld(income[i])).toEqual(tax[i]));
  //   expect(functions.helloTaxWorld(income[i])).toEqual(tax[i]);
  //   i++;
  // }
  // while (i< income.length);
});
test("geoff's ", ()=> {
  let income = [1,2,50000];
  expect(functions.helloTaxWorld(income[0])).toBe(0.15);
  expect(functions.helloTaxWorld(income[1])).toBe(0.30);
  expect(functions.helloTaxWorld(income[2])).toBe(9);
});
// Exercise - Calculator

// Exercise - Basic Syntax

// Exercise - Enhancement

// Exercise - Working with HTML input
test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});