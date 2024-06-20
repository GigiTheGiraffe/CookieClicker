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
