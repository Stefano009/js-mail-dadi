/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//ask user to insert his email

var email = prompt("Per favore inserisca la sua email");

// check if the email is in the mailing list

var mailingList = ["stefano@gmail.com", "paolo@hotmail.it", "boris@libero.it","phil.anselmo@gmail.com", "bernadette@yahoo.com","kenshiro@hokuto.jp"];

var found = false; 

for (var i = 0; i < mailingList.length; i++) {          
          
    console.log(mailingList[i]);
    if (email === mailingList[i]) {
        //print positive check
        document.getElementById("mailChecked").innerHTML = "welcome back " + mailingList[i];
        found = true;
        //break;
        
    }
}
//print negative check 
if (found == false) {
        document.getElementById("wrongMail").innerHTML = email + " " + "is not in our database, please subscribe";
}
