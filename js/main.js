
//STABILISCO AZIONI CON BUTTON START
var start = document.getElementById("start");
start.addEventListener("click",
    function() {

        //CREO UNA VARIABILE CON IL NOME INSERITO IN INPUT
        var playerName = document.getElementById("name_player").value;
        document.getElementById("player").innerHTML = playerName;
        
        //RESET DEI RISULTATI OGNI VOLTA CHE SI PREME START
        document.getElementById("player_win").innerHTML = "";
        document.getElementById("cpu_win").innerHTML = "";

        //ASSEGNO ALLE VARIABILI DICE E DICETWO LA CLASSE IMAGE
        //IN MODO DA AZZERARE OGNI VOLTA CHE PREMO START
        var dice = document.getElementById("dice");
        dice.className = "image";

        var diceTwo = document.getElementById("dice_two");
        diceTwo.className = "image";

        //CONTROLLO SE E' STATO INSERITO UN NOME USER IN INPUT
        if (playerName == "") {
            playerName = "User";
            document.getElementById("player").innerHTML = playerName;
        }
        //CALCOLO IL PRIMO NUMERO RANDOM
        var firstNumber = Math.floor(Math.random()*6) + 1;
        
        //CAMBIO CLASSE IMAGE AGGIUNGENDO IL NUMERO RANDOM USCITO
        dice.className = dice.classList + firstNumber;
        
        //RIPETO STESSA PROCEDURA PER IL SECONDO DADO
        var secondNumber = Math.floor(Math.random() * 6) + 1;
        
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