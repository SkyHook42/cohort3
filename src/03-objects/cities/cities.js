const City = class {
  // four attributes on the constructor: Name, Latitude, Longitude, Population
  constructor(sName, nLat, nLong, nPop) {
    this.name = sName;
    this.lat = nLat;
    this.long = nLong;
    this.pop = nPop
  }

  // create a method “show” which creates a single string with the 4 attributes 
  show() {
    return `${this.name},${this.lat},${this.long},${this.pop}`;
  }

  // create a method “movedIn” which receives a number that will be added to the city’s population 
  movedIn(popIn) {
    this.pop = this.pop + popIn;
  }

  // create a method “movedOut” which receives a number that will be subtracted from the city’s population
  movedOut(popIn) {
    this.pop = this.pop - popIn;
  }

  // create a method “howBig” that will return one of the following:
  // City – a population > 100,000
  // Large town – a large town has a population of 20,000 to 100,000
  // Town – a town has a population of 1,000 to 20,000
  // Village – larger than a hamlet but smaller than a town
  // Hamlet – population 1 - 100
  howBig() {
    switch (true) {
      case (this.pop >= 100000):
        return "City";
      case (this.pop < 100000 && this.pop >= 20000):
        return "Large Town";
      case (this.pop < 20000 && this.pop >= 1000):
        return "Town";
      case (this.pop < 100 && this.pop >= 1):
        return "Hamlet";
      case (this.pop < 1000 && this.pop >= 100):
        return "Village";
      default:
        return "shouldn't be here";
    }
  }

}

const Controller = class {
  constructor() {
    this.cities = [];
  }

  // in the controller class create methods:
  // “whichSphere” to return either the Northern Hemisphere or Southern Hemisphere--"for any given city"
  whichSphere(sCheck) {
    let sHemi;
    let compare = this.cities.filter(city => city.name == sCheck)[0];
    if (compare.lat > 0) {
      sHemi = "Northern Hemisphere";
    } else if (compare.lat < 0) {
      sHemi = "Southern Hemisphere";
    } else {
      sHemi = "Equatorial";
    }
    return sHemi;
  }

  // createCity
  createCity(sName, nLat, nLong, nPop) {
    const city = new City(sName, nLat, nLong, nPop);
    this.cities.push(city);
  }

  // getMostNorthern
  getMostNorthern() {
    const arrCityN = this.cities.sort(function (a, b) {
      return Number(b.lat - a.lat);
    });
    return arrCityN[0].name;
  }

  // getMostSouthern
  getMostSouthern() {
    const arrCityS = this.cities.sort(function (a, b) {
      return Number(a.lat - b.lat);
    });
    return arrCityS[0].name;
  }

  // getPopulation ⇒ total for all…
  getPopulation() {
    const cityTotPop = this.cities.reduce((sum, city) => {
      return sum + Number(city.pop)
    }, 0);
    return cityTotPop;
  }

  // deleteCity
  deleteCity(cityIn) {
    this.cities = this.cities.filter(city => city.name != cityIn);
    return this.cities;
  }
}

export { City, Controller };