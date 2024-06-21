let score = 0; // Stocke le score actuel du joueur
let clickValue = 2; // Valeur ajoutée au score à chaque clic sur le cookie
let costMultiplier = 0; // Coût initial pour acheter un multiplicateur
let countMultiplier = 0; // Nombre de multiplicateurs achetés
let costAutoclicker = 0; // Coût initial pour acheter un auto-clicker
let countAutoclicker = 0; // Nombre d'auto-clickers achetés
let costBonus = 0; // Coût initial pour acheter un bonus

// Éléments HTML
const cookieBtn = document.getElementById('cookieBtn'); // Bouton du cookie
const scoreDisplay = document.getElementById('scoreDisplay'); // Zone d'affichage du score
const multiplierBtn = document.getElementById('multiplierBtn'); // Bouton pour acheter un multiplicateur
const countMultiplierDisplay = document.getElementById('count-multiplier-display'); // Zone d'affichage du nombre de multiplicateurs
const costMultiplierDisplay = document.getElementById('cost-multiplier-display'); // Zone d'affichage du coût du multiplicateur
const costAutoclickerDisplay = document.getElementById('cost-autoclicker-display'); // Zone d'affichage du coût de l'auto-clicker
const timeBonusDisplay = document.getElementById('time-bonus-display'); // Zone d'affichage du temps restant du bonus
const costBonusDisplay = document.getElementById('cost-bonus-display'); // Zone d'affichage du coût du bonus


/*Etape 6
Afficher le solde du score dans le scoreDisplay après un achat, après que le joueur click sur btnMultiplier
SI le score est plus grand ou égal a costMultiplier, on peut acheter*/

//Conditionement pour savoir si les conditions se remplisent pour realiser un achat :
multiplierBtn.addEventListener('click', () => {
    if (score >= costMultiplier) {
        score -= costMultiplier;
        clickValue *= multiplierValue;
        MAJ_compteurs();
    }
    else  { 
        alert("#")
    }

});
//fonction qui  met a jour l'affichage du score, on peut rajouter d'autres compteurs a metre cero egalement
function MAJ_compteurs(){
    scoreDisplay.innertext = score
};
function checkscore(cost){
    return score >= cost; 

};


/*Etape 8 Augmenter costMultiplier à chaque achat d’un multiplicateur
*/

multiplierBtn.addEventListener(click, () =>{
    Math.floor(costMultiplier*1.15);
});

/*Etape 10 Créer autoclicker qui augmenter click une fois le cookie toutes les x secondes. 
Rajouter cout, count à l’autoclicker sur le addeventlistener click
*/
variable cout qui augmente quand j'achete 
variable qui compte quand j'ai achete 


const cookieBtn = document.getElementById('cookieBtn');
setInterval(function(){
    button.click()
}.100)






Etape 11
Cliquer sur le bonus pour augmenter le clickValue de 200% pendant 30 secondes puis enlever 
200% après 30 secondes. 
Afficher le timer dans la timeBonusDisplay
creer une variable qui comptabilise tout le score ..












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