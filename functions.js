const cookieBtn = document.querySelector(".cookieBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
const multiplierBtn = document.getElementById("clickMultiplier");
const costMultiplierDisplay = document.getElementById("costMultiplierDisplay");
const countMultiplierDisplay = document.getElementById("countMultiplierDisplay");
const multiplierValue = 2;
let clickValue = 1;
let costMultiplier = 15;
let countMultiplier = 0;
let score = 0;
//Ajoute le montant du click au score
function click() {
  score += clickValue;
};
//Mets à jour le label du score avec le nouveau montant
function updateScoreDisplay() {
  scoreDisplay.textContent = `Total : ${score}`;
};
//fonction générique pour changer la valeur affichée dans un label
function updateValue(display, value) {
  display.textContent = value;
};
//fonction qui change la source d'une image en lui donnant une nouvelle source
function changeSrcImg(image, source) {
  image.src = source
};
// fonction pour l'état de disabled d'un bouton en fonction de si activate vaut true ou false et de changer l'image. 
function toggleButton(button, image, source, activate) {
  if (activate) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  changeSrcImg(image, source);
};
//Multiplication du cout du bouton
function multiplyCost(cost) {
  return Math.floor(cost * 1.15);
}
//Comportement du bouton multiplicateur
multiplierBtn.addEventListener("click", function () {
  costMultiplier = multiplyCost(costMultiplier);
  countMultiplier++;
  updateValue(costMultiplierDisplay, costMultiplier);
  updateValue(countMultiplierDisplay, countMultiplier);
  clickValue = multiplierValue * clickValue;
});
cookieBtn.addEventListener("click", () => {
  //ajout de clickValue à score
  click();
  //changer la valeur du score
  updateScoreDisplay();
});




