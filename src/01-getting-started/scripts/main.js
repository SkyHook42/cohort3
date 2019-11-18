import functions from './functions.js';

// Add the event listeners
idCDNTaxNumIn.addEventListener("keypress", function(e) {
  if (e.which===13) {
    console.log("enter was pressed");
    
  }
});

idNumber.addEventListener('change', () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});