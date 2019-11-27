// arrays
// - add to the front
// - add to the end
// update values
// loops 
// - for
//- for/in
//-  while
// - do while
// - forEach (with array and function)
// Objects / Dictionaries
// - declare object
//-  lookup key to retrieve value
const syntax = {
	fDefAtt: (pTest) => {
		switch (typeof pTest) {
			case "number":
				return "I'm a number.";
			case "string":
				return "I'm a string.";
			case "boolean":
				return "I'm a boolean.";
			case "object":
				if (Array.isArray(pTest)) {
					return "I'm an array.";
				}
				return "I'm an object.";
			case "undefined":
				return "I'm an undefined.";
			default:
				return "";
		};
	}
	// sample if / else
	// functions
	// - parameters
	// - returns

}

export default syntax;