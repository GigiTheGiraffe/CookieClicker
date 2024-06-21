
const multiplierBtn = document.getElementById("clickMultiplier");
const multiplierValue = 2;
let clickValue = 1;
let costMultiplier = 15;
let countMultiplier = 0;

multiplierBtn.addEventListener("click", function () {
  let costMultiplierDisplay = document.getElementById("costMultiplierDisplay");
  let countMultiplierDisplay = document.getElementById(
    "countMultiplierDisplay"
  );
  costMultiplier = Math.floor(costMultiplier * 1.15);
  countMultiplier = countMultiplier + 1;
  costMultiplierDisplay.textContent = costMultiplier;
  countMultiplierDisplay.textContent = countMultiplier;

  clickValue = multiplierValue * clickValue;
});

console.log(costMultiplier);

let score = 0;
let clickValue = 1;
const cookieBtn = document.querySelector(".cookieBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");

function click() {
    score += clickValue;
};

function updateScoreDisplay() {
    scoreDisplay.textContent = `Total : ${score}`;
};

cookieBtn.addEventListener("click", () => {
    //ajout de clickValue à score
    click();
    //changer la valeur du score
    updateScoreDisplay();
});

//fonction qui change la source d'une image en lui donnant une nouvelle source
function changeSrcImg(image, source) {
    image.src = source
}

// fonction pour changer la class active/disabled d'un bouton en fonction de si activate vaut true ou false et de changer l'image. 
function toggleButton(button, classBtn, image, source, activate) {
    if (activate) {
        button.classList.add(classBtn);
    } else {
        button.classList.remove(classBtn);
    }
    changeSrcImg(image, source);
}


