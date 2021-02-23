//CALCOLO IL PRIMO NUMERO RANDOM
var firstNumber = Math.floor(Math.random()*6) + 1;
console.log(firstNumber);

//CREO UNA VARIABILE DADO E MODIFICO LA CLASSE AGGIUNGENDO IL NUMERO RANDOM
//IN MODO DA PRELEVARE LA FACCIA DEL DADO CORRISPONDENTE DAL CSS
var dice = document.getElementById("dice");
dice.className = dice.classList + firstNumber;
console.log(dice);

//RIPETO STESSA PROCEDURA PER IL SECONDO DADO
var secondNumber = Math.floor(Math.random() * 6) + 1;
console.log(secondNumber);

var diceTwo = document.getElementById("dice_two");
diceTwo.className = diceTwo.classList + secondNumber;
console.log(diceTwo);