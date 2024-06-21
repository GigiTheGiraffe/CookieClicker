const cookieBtn = document.querySelector(".cookieBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
const multiplierBtn = document.getElementById("clickMultiplier");
const costMultiplierDisplay = document.getElementById("costMultiplierDisplay");
const countMultiplierDisplay = document.getElementById("countMultiplierDisplay");
const autoclickerBtn = document.getElementById("autoclickerBtn");
const costAutoclickerDisplay = document.getElementById("costAutoclickerDisplay");
const countAutoclickerDisplay = document.getElementById("countAutoclickerDisplay");
const bonusBtn = document.getElementById("bonusBtn");
const costBonusDisplay = document.getElementById("costBonusDisplay");
const bonusTimeDisplay = document.getElementById("bonusTimeDisplay");

const multiplierValue = 2;
let clickValue = 1;
let costMultiplier = 15;
let countMultiplier = 0;
let costAutoclicker = 15;
let countAutoclicker = 0;
let cookieSecond = 0;
let costBonus = 1;
let bool;
let bonusActivated = false;
let bonusTimeInterval;
let score = 0;

//Ajoute le montant du click au score
function click() {
  score += clickValue;
  updateScoreDisplay();
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
//Conditionement pour savoir si le joueur est assez riche pour realiser un achat et lui enlever le montant si vrai :
function checkScore(cost) {
  if (score >= cost) {
    score -= cost;
    return true
  }
  else {
    return false
  }
}
//Comportement du bouton multiplicateusr
multiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultiplier);
  if (bool) {
    costMultiplier = multiplyCost(costMultiplier);
    countMultiplier++;
    updateValue(costMultiplierDisplay, costMultiplier);
    updateValue(countMultiplierDisplay, countMultiplier);
    clickValue = multiplierValue * clickValue;
    updateScoreDisplay();
  }
});
//Comportement du bouton autoclicker
autoclickerBtn.addEventListener("click", function () {
  bool = checkScore(costAutoclicker);
  if (bool) {
    costAutoclicker = multiplyCost(costAutoclicker);
    countAutoclicker++;
    updateValue(costAutoclickerDisplay, costAutoclicker);
    updateValue(countAutoclickerDisplay, countAutoclicker);
    setInterval(click, 1000);
    cookieSecond += clickValue;
    updateScoreDisplay();
  }
});
//Comportement du cookie cliquable
cookieBtn.addEventListener("click", () => {
  //ajout de clickValue à score
  click();
  //changer la valeur du score
  updateScoreDisplay();
});

//comportement du bouton bonus
//LE BONUS EST FIXE A 1 COOKIE AU costBonus
//LES // DES COMMENTAIRES SUR LES LIGNES 107 113 118 123 DOIVENT ETRE ENLEVEES QUE QUAND LES ZONES SONT CREES DANS LE HTML
//LE CONSOLE.LOG DE LA LIGNE 118 DOIT ETRE ENLEVE QUAND TOUTES LES ZONES SONT LIEES ENTRE ELLE VIA JS ET CREES SUR LE HTML
bonusBtn.addEventListener("click", () => {
  bool = checkScore(costBonus);
  if (bool && !bonusActivated) {
    bonusActivated = true;
    costBonus = multiplyCost(costBonus);
    //updateValue(costBonusDisplay, costBonus);
    updateScoreDisplay();
    //augmentation du click de 200%
    clickValue = Math.floor(clickValue * 2);
    // Création de bonusTimeDisplay en secondes
    let bonusTime = 30;
    //bonusTimeDisplay.textContent = `Il te reste ${bonusTime} secondes de bonus 200% au click!`;
    //Décrémentation du bonusTimeDisplay
    bonusTimeInterval = setInterval(() => {
      bonusTime--;
      console.log(bonusTime);
      //bonusTimeDisplay.textContent = `Il te reste ${bonusTime} secondes de bonus 200% au click!`;
      //Arret et disparition du timer du bonus 
      if (bonusTime === 0) {
        clearInterval(bonusTimeInterval);
        //bonusTimeDisplay.textContent = "";
      }
    }, 1000);
    setTimeout(() => {
      //diminution du click de 200%
      clickValue = Math.floor(clickValue / 2);
      bonusActivated = false;
    }, 30000);
  }
});




