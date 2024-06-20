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

