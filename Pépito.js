

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


const cookieBtn = document.getElementById('cookieBtn');
setInterval(function(){
    button.click()
}.100;
costAutoclicker*=1.15);
function MAJ_compteurs(){
    scoreDisplay.innertext = score
}


/*Etape 11 Cliquer sur le bonus pour augmenter le clickValue de 200% pendant 30 secondes puis enlever 
200% après 30 secondes.*/

/*on va aller chercher le bonusBtn via getElementById | 
mettre un écouteur 'click' sur bonusBtn | 
On verifie si le code est suffisant pour achéter le bonus avec if, else|
Comme resultat des copnditions remplies par le if |
On va creer une nouvella variable pour restaurer la valeur de clickValue apres les 30sec avec setTimeOut
multiplier clickvalue *500 pendant 30 sec
On va ensuite soustraire le costBonus dans score
*/




let costBonus = 1000;
const bonusBtn = document.getElementById('bonusBtn');
bonusBtn.addEventListener('click', () => {
    if (score >= costBonus){
        let vraieClickValue = clickValue;
        clickValue *500;
        setTimeout(() => {
            clickValue = vraieClickValue;
        }, 30000);
 score -= costBonus;



    }else{
        alert('#')
    };
   MAJ_compteurs();
});

