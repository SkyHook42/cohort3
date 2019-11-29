const fetchy = {
  // create a method called ‘getFirstName(data)’ to return the first persons' name (in the correct TDD order of course)
  getFirstName: (data) => {
    return data[0].name;
  },

  // create a method called ‘getAllFirstNames(data)’ to return an array of all the first names
  getAllFirstNames: (data) => {
    let aDataOut = [];
    while (aDataOut.length < data.length) {
      aDataOut.push(data[aDataOut.length].name);
    };
    return aDataOut;
  },
};
export default fetchy;