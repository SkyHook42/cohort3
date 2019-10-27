/* testing the plumbing */
import functions from "./10_25_tdd.js";

idDoIt.addEventListener("click", () => {
document.getElementById("resultField").innerHTML = "addition result: "+functions.sum(idNum1.value,idNum2.value);
});