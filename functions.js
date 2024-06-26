const cookieBtn = document.querySelector(".cookieBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
const clickMultiplierBtn = document.getElementById("clickMultiplier");
const costClickMultiplierDisplay = document.getElementById("costClickMultiplierDisplay");
const countClickMultiplierDisplay = document.getElementById("countClickMultiplierDisplay");
const autoclickerElmo = document.getElementById("autoclickerElmoBtn");
const costElmoDisplay = document.getElementById("costElmoDisplay");
const countElmoDisplay = document.getElementById("countElmoDisplay");
const autoclickerBirdie = document.getElementById("autoclickerBirdieBtn");
const costBirdieDisplay = document.getElementById("costBirdieDisplay");
const countBirdieDisplay = document.getElementById("countBirdieDisplay");
const autoclickerOscar = document.getElementById("autoclickerOscarBtn");
const costOscarDisplay = document.getElementById("costOscarDisplay");
const countOscarDisplay = document.getElementById("countOscarDisplay");
const autoclickerGrover = document.getElementById("autoclickerGroverBtn");
const costGroverDisplay = document.getElementById("costGroverDisplay");
const countGroverDisplay = document.getElementById("countGroverDisplay");
const autoclickerErnie = document.getElementById("autoclickerErnieBtn");
const costErnieDisplay = document.getElementById("costErnieDisplay");
const countErnieDisplay = document.getElementById("countErnieDisplay");
const bonusBtn = document.getElementById("bonusBtn");
const costBonusDisplay = document.getElementById("costBonusDisplay");
const bonusTimeDisplay = document.getElementById("bonusTimeDisplay");
const cookieSecondDisplay = document.querySelector(".clickPerSecondDisplay");
const elmoMultiplierBtn = document.getElementById("elmoMultiplier");
const costElmoMultiplierDisplay = document.getElementById("costElmoMultiplierDisplay");
const countElmoMultiplierDisplay = document.getElementById("countElmoMultiplierDisplay");
const birdieMultiplierBtn = document.getElementById("birdieMultiplier");
const costBirdieMultiplierDisplay = document.getElementById("costBirdieMultiplierDisplay");
const countBirdieMultiplierDisplay = document.getElementById("countBirdieMultiplierDisplay");
const oscarMultiplierBtn = document.getElementById("oscarMultiplier");
const costOscarMultiplierDisplay = document.getElementById("costOscarMultiplierDisplay");
const countOscarMultiplierDisplay = document.getElementById("countOscarMultiplierDisplay");
const groverMultiplierBtn = document.getElementById("groverMultiplier");
const costGroverMultiplierDisplay = document.getElementById("costGroverMultiplierDisplay");
const countGroverMultiplierDisplay = document.getElementById("countGroverMultiplierDisplay");
const ernieMultiplierBtn = document.getElementById("ernieMultiplier");
const costErnieMultiplierDisplay = document.getElementById("costErnieMultiplierDisplay");
const countErnieMultiplierDisplay = document.getElementById("countErnieMultiplierDisplay");
const cpsElmo = document.getElementById("cpsElmo");
const cpsBirdie = document.getElementById("cpsBirdie");
const cpsOscar = document.getElementById("cpsOscar");
const cpsGrover = document.getElementById("cpsGrover");
const cpsErnie = document.getElementById("cpsErnie");
const multiplierValue = 2;
const pseudo = document.getElementById("factoryName");
const nomPatisserie = document.querySelector(".nomPatisserie");
const hidePopUpBtn = document.getElementById("hidePopUp");
const popUp = document.querySelector(".popUp");
const showPopUpBtn = document.getElementById("showPopUp");
let clickValue = 1;
//Les arrays reprennent touts les couts et les comptages des multipliers dans cet ordre d'index : 0 = clickMultiplier, 1 = elmo, 2 = birdie, 3 = oscar, 4 = grover, 5 = ernie
const costMultipliers = [100, 1000, 10000, 100000, 300000, 500000];
const countMultipliers = [0, 0, 0, 0, 0, 0];
//Les arrays reprennent touts les couts et les comptages des autoclickers dans cet ordre d'index : 0 = elmo, 1 = birdie, 2 = oscar, 3 = grover, 4 = ernie
const costAutoclickers = [15, 100, 1100, 12000, 130000];
const countAutoclickers = [0, 0, 0, 0, 0];
const CpsAutoclicker = [1, 8, 47, 260, 1400];
let cookieSecond = 0;
let costBonus = 10;
let bool;
let bonusActivated = false;
let bonusTimeInterval;
let score = 0;
let money = false;

//Ajoute le montant du click au score
function click() {
  score += clickValue;
  updateScoreDisplay();
}
//Mettre le pseudo du joueur sur le html
function showPseudo() {
  if (pseudo.value.length > 0) {
    nomPatisserie.textContent = pseudo.value;
  }
}
//Cookie par seconde supplémentaire par autoclicker
function Cpsclick(i) {
  score += CpsAutoclicker[i];
  updateScoreDisplay();
}
//Mets à jour le label du score avec le nouveau montant
function updateScoreDisplay() {
  scoreDisplay.textContent = `Total : ${score}`;
  toggleButton(autoclickerElmo, costAutoclickers[0]);
  toggleButton(autoclickerBirdie, costAutoclickers[1]);
  toggleButton(autoclickerErnie, costAutoclickers[4]);
  toggleButton(autoclickerGrover, costAutoclickers[3]);
  toggleButton(autoclickerOscar, costAutoclickers[2]);
  toggleButton(elmoMultiplierBtn, costMultipliers[1]);
  toggleButton(clickMultiplierBtn, costMultipliers[0]);
  toggleButton(birdieMultiplierBtn, costMultipliers[2]);
  toggleButton(groverMultiplierBtn, costMultipliers[4]);
  toggleButton(oscarMultiplierBtn, costMultipliers[3]);
  toggleButton(ernieMultiplierBtn, costMultipliers[5]);
  toggleButton(bonusBtn, costBonus);
}
//fonction générique pour changer la valeur affichée dans un label
function updateValue(display, value) {
  display.textContent = value;
}
// fonction pour l'état de disabled d'un bouton en fonction de si activate vaut true ou false et de changer l'image.
function toggleButton(button, costButton) {
  if (score >= costButton) {
    button.disabled = false;
    button.classList.remove("btnDisabled");
  } else {
    button.disabled = true;
    button.classList.add("btnDisabled");
  }
}
//Multiplication du cout du bouton
function multiplyCost(cost) {
  return Math.floor(cost * 1.5);
}
//Conditionement pour savoir si le joueur est assez riche pour realiser un achat et lui enlever le montant si vrai :
function checkScore(cost) {
  if (score >= cost) {
    score -= cost;
    return true;
  } else {
    return false;
  }
}
//fonction pour ajouter à la var cookieSecond et l'afficher CHANGER LE COOKIESECOND += CLICKVALUE PAR LA NOUVELLE ECONOMIE DE JUAN QUAND DISPO
function cookieSecondShow() {
  cookieSecond =
    countAutoclickers[0] * CpsAutoclicker[0] +
    countAutoclickers[1] * CpsAutoclicker[1] +
    countAutoclickers[2] * CpsAutoclicker[2] +
    countAutoclickers[3] * CpsAutoclicker[3] +
    countAutoclickers[4] * CpsAutoclicker[4];
  cookieSecondDisplay.textContent = `${cookieSecond} cookies par seconde`;
}
//function pour savoir si le joueur a assez pour acheter le bouton bonus
function enoughMoney(cost) {
  if (score >= cost) {
    return true;
  }
}
//Comportement du bouton multiplicateur pour le click
clickMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[0]);
  if (bool) {
    costMultipliers[0] = multiplyCost(costMultipliers[0]);
    countMultipliers[0]++;
    updateValue(costClickMultiplierDisplay, costMultipliers[0]);
    updateValue(countClickMultiplierDisplay, countMultipliers[0]);
    clickValue = multiplierValue * clickValue;
    updateScoreDisplay();
  }
});
//Comportement du bouton multiplicateur pour elmo
elmoMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[1]);
  if (bool) {
    costMultipliers[1] = multiplyCost(costMultipliers[1]);
    countMultipliers[1]++;
    updateValue(costElmoMultiplierDisplay, costMultipliers[1]);
    updateValue(countElmoMultiplierDisplay, countMultipliers[1]);
    CpsAutoclicker[0] = multiplierValue * CpsAutoclicker[0];
    cookieSecondShow();
    updateScoreDisplay();
    updateValue(cpsElmo, CpsAutoclicker[0])
  }
});
//Comportement du bouton multiplicateur pour birdie
birdieMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[2]);
  if (bool) {
    costMultipliers[2] = multiplyCost(costMultipliers[2]);
    countMultipliers[2]++;
    updateValue(costBirdieMultiplierDisplay, costMultipliers[2]);
    updateValue(countBirdieMultiplierDisplay, countMultipliers[2]);
    CpsAutoclicker[1] = multiplierValue * CpsAutoclicker[1];
    cookieSecondShow();
    updateScoreDisplay();
    updateValue(cpsBirdie, CpsAutoclicker[1])
  }
});
//Comportement du bouton multiplicateur pour oscar
oscarMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[3]);
  if (bool) {
    costMultipliers[3] = multiplyCost(costMultipliers[3]);
    countMultipliers[3]++;
    updateValue(costOscarMultiplierDisplay, costMultipliers[3]);
    updateValue(countOscarMultiplierDisplay, countMultipliers[3]);
    CpsAutoclicker[2] = multiplierValue * CpsAutoclicker[2];
    cookieSecondShow();
    updateScoreDisplay();
    updateValue(cpsOscar, CpsAutoclicker[2])
  }
});
//Comportement du bouton multiplicateur pour grover
groverMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[4]);
  if (bool) {
    costMultipliers[4] = multiplyCost(costMultipliers[4]);
    countMultipliers[4]++;
    updateValue(costGroverMultiplierDisplay, costMultipliers[4]);
    updateValue(countGroverMultiplierDisplay, countMultipliers[4]);
    CpsAutoclicker[3] = multiplierValue * CpsAutoclicker[3];
    cookieSecondShow();
    updateScoreDisplay();
    updateValue(cpsGrover, CpsAutoclicker[3])
  }
});
//Comportement du bouton multiplicateur pour ernie
ernieMultiplierBtn.addEventListener("click", function () {
  bool = checkScore(costMultipliers[5]);
  if (bool) {
    costMultipliers[5] = multiplyCost(costMultipliers[5]);
    countMultipliers[5]++;
    updateValue(costErnieMultiplierDisplay, costMultipliers[5]);
    updateValue(countErnieMultiplierDisplay, countMultipliers[5]);
    CpsAutoclicker[4] = multiplierValue * CpsAutoclicker[4];
    cookieSecondShow();
    updateScoreDisplay();
    updateValue(cpsErnie, CpsAutoclicker[4])
  }
});
//Comportement du bouton autoclicker elmo
autoclickerElmo.addEventListener("click", function () {
  bool = checkScore(costAutoclickers[0]);
  if (bool) {
    costAutoclickers[0] = multiplyCost(costAutoclickers[0]);
    countAutoclickers[0]++;
    updateValue(costElmoDisplay, costAutoclickers[0]);
    updateValue(countElmoDisplay, countAutoclickers[0]);
    setInterval(function () {
      Cpsclick(0);
    }, 1000);
    cookieSecondShow();
    updateScoreDisplay();
  }
});
//Comportement du bouton autoclicker birdie
autoclickerBirdie.addEventListener("click", function () {
  bool = checkScore(costAutoclickers[1]);
  if (bool) {
    costAutoclickers[1] = multiplyCost(costAutoclickers[1]);
    countAutoclickers[1]++;
    updateValue(costBirdieDisplay, costAutoclickers[1]);
    updateValue(countBirdieDisplay, countAutoclickers[1]);
    setInterval(function () {
      Cpsclick(1);
    }, 1000);
    cookieSecondShow();
    updateScoreDisplay();
  }
});
//Comportement du bouton autoclicker oscar
autoclickerOscar.addEventListener("click", function () {
  bool = checkScore(costAutoclickers[2]);
  if (bool) {
    costAutoclickers[2] = multiplyCost(costAutoclickers[2]);
    countAutoclickers[2]++;
    updateValue(costOscarDisplay, costAutoclickers[2]);
    updateValue(countOscarDisplay, countAutoclickers[2]);
    setInterval(function () {
      Cpsclick(2);
    }, 1000);
    cookieSecondShow();
    updateScoreDisplay();
  }
});
//Comportement du bouton autoclicker grover
autoclickerGrover.addEventListener("click", function () {
  bool = checkScore(costAutoclickers[3]);
  if (bool) {
    costAutoclickers[3] = multiplyCost(costAutoclickers[3]);
    countAutoclickers[3]++;
    updateValue(costGroverDisplay, costAutoclickers[3]);
    updateValue(countGroverDisplay, countAutoclickers[3]);
    setInterval(function () {
      Cpsclick(3);
    }, 1000);
    cookieSecondShow();
    updateScoreDisplay();
  }
});
//Comportement du bouton autoclicker ernie
autoclickerErnie.addEventListener("click", function () {
  bool = checkScore(costAutoclickers[4]);
  if (bool) {
    costAutoclickers[4] = multiplyCost(costAutoclickers[4]);
    countAutoclickers[4]++;
    updateValue(costErnieDisplay, costAutoclickers[4]);
    updateValue(countErnieDisplay, countAutoclickers[4]);
    setInterval(function () {
      Cpsclick(4);
    }, 1000);
    cookieSecondShow();
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
//Quand on clique sur le timer, il n'empeche plus le joueur d'acceder au cookie
bonusTimeDisplay.addEventListener("click", () => {
  click();
});
//Comportement bouton sur le popup
hidePopUpBtn.addEventListener("click", () => {
  showPseudo();
  popUp.style.visibility = "hidden";
});
//Bouton pour montrer le popup
showPopUpBtn.addEventListener("click", () => {
  popUp.style.visibility = "visible";
});
//comportement du bouton bonus
bonusBtn.addEventListener("click", () => {
  money = enoughMoney(costBonus);
  if (money && !bonusActivated) {
    bool = checkScore(costBonus);
    bonusTimeDisplay.style.visibility = "visible";
    bonusActivated = true;
    costBonus = multiplyCost(costBonus);
    updateValue(costBonusDisplay, costBonus);
    updateScoreDisplay();
    //augmentation du click de 200%
    clickValue = Math.floor(clickValue * 2);
    // Création de bonusTimeDisplay en secondes
    let bonusTime = 30;
    bonusTimeDisplay.textContent = `${bonusTime}s \n Bonus Click : 200%`;
    //Décrémentation du bonusTimeDisplay
    bonusTimeInterval = setInterval(() => {
      bonusTime--;
      bonusTimeDisplay.textContent = `${bonusTime}s \n Bonus Click : 200%`;
      //Arret et disparition du timer du bonus
      if (bonusTime === 0) {
        clearInterval(bonusTimeInterval);
        bonusTimeDisplay.textContent = "";
      }
    }, 1000);
    setTimeout(() => {
      //diminution du click de 200%
      clickValue = Math.floor(clickValue / 2);
      bonusActivated = false;
      bonusTimeDisplay.style.visibility = "hidden";
    }, 30000);
  }
});