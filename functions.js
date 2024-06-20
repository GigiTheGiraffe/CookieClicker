let score = 0;
let clickValue = 1;
const cookieBtn = document.querySelector(".cookieBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
console.log(cookieBtn);

function click() {
    score += clickValue;
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Total : ${score}`;
}

cookieBtn.addEventListener("click", () => {
    //ajout de clickValue à score
    click();
    //changer la valeur du score
    updateScoreDisplay();
})