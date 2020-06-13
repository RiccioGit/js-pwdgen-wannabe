/* OBIETTIVO DELLO SCRIPT:

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito.
Infine scrivi sulla pagina nomecognomecolorepreferito19

*/

// ** CHIEDERE ALL'UTENTE IL SUO NOME **

var name = prompt("Qual'è il tuo nome?");

// ** CHIEDERE ALL'UTENTE IL SUO COGNOME **

var familyName = prompt("E invece il tuo cognome?")


// ** CHIEDERE IL COLORE PREFERITO **

var colour = prompt("E per quanto riguarda il tuo colore preferito?")

// ** RISULTATO FINALE: **

document.getElementById('welcome').innerHTML = name+familyName+colour+19
