/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/
alert("preparati a giocare a dadi col computer!");
// generate a random number between 1 and 6
var pcFirstDice = Math.floor(Math.random() * 6 + 1);
console.log("pc first dice has " + pcFirstDice);
var pcSecondDice = Math.floor(Math.random() * 6 + 1);
console.log("pc second dice has " + pcSecondDice);
var pcSum = pcFirstDice + pcSecondDice;
console.log("pc has done " + pcSum);

var userFirstDice = Math.floor(Math.random() * 6 + 1);
console.log("user first dice has " + userFirstDice);
var  userSecondDice = Math.floor(Math.random() * 6 + 1);
console.log("user second dice has " + userSecondDice);
var userSum = userFirstDice + userSecondDice;
console.log("pc has done " + userSum);

if (pcSum > userSum) {
    alert("mi dispiace il computer ha vinto.");
    document.getElementById("diceWinner").innerHTML = "mi dispiace il computer ha vinto."
} else if (pcSum < userSum) {
    alert("Complimenti hai vinto!");
    document.getElementById("diceWinner").innerHTML = "Complimenti hai vinto!"
} else {
    alert("avete pareggiato, riprovate!")
    document.getElementById("diceWinner").innerHTML = "avete pareggiato, riprovate!"
}

