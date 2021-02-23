
//STABILISCO AZIONI CON BUTTON START
var start = document.getElementById("start");
start.addEventListener("click",
    function() {

        //CREO UNA VARIABILE CON IL NOME INSERITO IN INPUT
        var playerName = document.getElementById("name_player").value;
        document.getElementById("player").innerHTML = playerName;
        
        //CONTROLLO SE E' STATO INSERITO UN NOME USER IN INPUT
        if (playerName == "") {
            playerName = "User";
            document.getElementById("player").innerHTML = playerName;
        }
        //CALCOLO IL PRIMO NUMERO RANDOM
        var firstNumber = Math.floor(Math.random()*6) + 1;
        
        //CREO UNA VARIABILE DADO E MODIFICO LA CLASSE AGGIUNGENDO IL NUMERO RANDOM
        //IN MODO DA PRELEVARE LA FACCIA DEL DADO CORRISPONDENTE DAL CSS
        var dice = document.getElementById("dice");
        dice.className = dice.classList + firstNumber;
        
        //RIPETO STESSA PROCEDURA PER IL SECONDO DADO
        var secondNumber = Math.floor(Math.random() * 6) + 1;
        
        var diceTwo = document.getElementById("dice_two");
        diceTwo.className = diceTwo.classList + secondNumber;

        //CONTROLLO QUALE DEI 2 DADI VINCE
        if (firstNumber > secondNumber) {
            document.getElementById("player_win").innerHTML = playerName + " ha vinto";
        } else if (firstNumber < secondNumber) {
            document.getElementById("cpu_win").innerHTML = "La CPU ha vinto";
        } else {
            document.getElementById("player_win").innerHTML = "pareggio";
            document.getElementById("cpu_win").innerHTML = "pareggio";
        }
    }
);

//STABILISCO AL BUTTON RESET IL REFRESH DELLA PAGINA
var reset = document.getElementById("reset");
reset.addEventListener("click", 
    function() {
        location.reload();
    }
);