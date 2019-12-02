import fetchy from "./fetch.js";

test("Fetch API", () => {
  expect(fetchy.getFirstName(data)).toEqual("Pratima");
  expect(fetchy.getAllFirstNames(data)).toEqual(["Pratima", "Ελλάδιος", "Giulio", "Lutécia", "Lioara", "Paulien de", "Sania", "Sara", "Iacob", "Gloria"]);
  
});

const data = [
  { "name": "Pratima", "surname": "Mahat", "gender": "female", "region": "Nepal" }, { "name": "Ελλάδιος", "surname": "Ταμτάκος", "gender": "male", "region": "Greece" }, { "name": "Giulio", "surname": "Ruggiero", "gender": "male", "region": "Italy" }, { "name": "Lutécia", "surname": "Boulanger", "gender": "female", "region": "France" }, { "name": "Lioara", "surname": "Manicatide", "gender": "female", "region": "Romania" }, { "name": "Paulien de", "surname": "Graaf", "gender": "female", "region": "Netherlands" }, { "name": "Sania", "surname": "Shah", "gender": "female", "region": "Pakistan" }, { "name": "Sara", "surname": "Jackson", "gender": "female", "region": "United States" }, { "name": "Iacob", "surname": "Chelcea", "gender": "male", "region": "Romania" }, { "name": "Gloria", "surname": "Castro", "gender": "female", "region": "Spain" }
];

const me = { 
  "name": "Dale", 
  "surname": "Oldham", 
  "gender": "male", 
  "region": "Canada" 
};

const sMe = JSON.stringify(me);
console.log(sMe);
