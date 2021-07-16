/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//ask user to insert his email

var email = prompt("Per favore inserisca la sua email");

// check if the email is in the mailing list

var mailingList = ["stefano@gmail.com", "paolo@hotmail.it", "boris@libero.it","phil.anselmo@gmail.com", "bernadette@yahoo.com","kenshiro@hokuto.jp"];

for (var i = 0; i < mailingList.length; i++) {  
   
        
    document.getElementById("mailChecked").innerHTML = "welcome back " + email;        
    console.log(mailingList[i]);
    if (email === mailingList[i]) {break;}

}

