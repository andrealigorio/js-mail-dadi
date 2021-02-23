var check = document.getElementById("btn_check");
check.addEventListener("click",
    function() {
        var mailArray = ["pippo@libero.it", "pluto@libero.it", "paperino@libero.it", "topolino@libero.it", "paperone@libero.it"];
        var mailUser = document.getElementById("mail_check").value;
        var cont = false;
        for (var i=0; i < mailArray.length; i++) {
            if (mailUser == mailArray[i]){
            cont = true;
            } 
        }
        if (cont == true) {
            alert("Complimenti puoi accedere al portale!");
        } else {
            alert("Mi dispiace la tua mail non è autorizzata!");
        }
    }
);
