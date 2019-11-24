import functions from "./functions.js";

leftSide.addEventListener("click", e => {
  functions.fBtnChooser(e);
});

idDomProject.addEventListener("click", e => {
  functions.fDOM(e);
});

idShow.addEventListener("click", e => {
  functions.fDOMShow(e);
});

idAdd.addEventListener("click", e => {
  functions.fDOMAdd(e);
});
