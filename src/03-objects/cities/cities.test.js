import { City, Controller } from "./cities";

test('city construct', () => {
  const city = new City("citiname", 1, 2, 3);
  expect(city.name).toBe("citiname");
  expect(city.lat).toBe(1);
  expect(city.long).toBe(2);
  expect(city.pop).toBe(3);
});

// show() {
// return `${this.name},${this.lat},${this.long},${this.pop}`;
// }
test("show test", () => {
  const city = new City("citiname", 1, 2, 3);
  expect(city.show()).toBe("citiname,1,2,3");
  city.movedIn(10);
  expect(city.pop).toBe(13);
  city.movedOut(10);
  expect(city.pop).toBe(3);
});

test("city size1", () => {
  const city = new City("citiname", 1, 2, 120000);
  expect(city.howBig()).toBe("City");
});

test("city size2", () => {
  const city = new City("citiname", 1, 2, 20000);
  expect(city.howBig(city.pop)).toBe("Large Town");
});

test("city size3", () => {
  const city = new City("citiname", 1, 2, 1000);
  expect(city.howBig(city.pop)).toBe("Town");
});

test("city size4", () => {
  const city = new City("citiname", 1, 2, 1);
  expect(city.howBig(city.pop)).toBe("Hamlet");
});

test("city size5", () => {
  const city = new City("citiname", 1, 2, 100);
  expect(city.howBig(city.pop)).toBe("Village");
});

test("city hemi", () => {
  const ctrlr = new Controller();
  expect(ctrlr.whichSphere()).toBe("Northern");
});

// createCity(sName, nLat, nLong, nPop){
  test("city push", () => {
    const ctrlr = new Controller();
    ctrlr.createCity("Shedden",0,0,300);
    expect(Object.values(ctrlr.cities[0])).toEqual(["Shedden",0,0,300]);
  });

  test("city north", () => {
    const ctrlr = new Controller();
    ctrlr.createCity("Shedden",0,0,300);
    ctrlr.createCity("Calgary",10,-10,500);
    ctrlr.createCity("Edmonchuck",200,-20,17);
    expect(ctrlr.getMostNorthern).toEqual("Edmonchuck");
  });

  // test("city push", () => {
  //   const ctrlr = new Controller();
  //   ctrlr.createCity("Shedden",0,0,300);
  //   expect(Object.values(ctrlr.cities[0])).toEqual(["Shedden",0,0,300]);
  // });
      