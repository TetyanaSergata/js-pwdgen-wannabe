// Il tuo nome
var nomeUtente = prompt('Il tuo nome');
console.log(nomeUtente);
// Il tuo cognome
var cognomeUtente = prompt('Il tuo cognome');
console.log(cognomeUtente);
// Il colore preferito
var colorePreferito = prompt('Il tuo colore preferito');
console.log(colorePreferito);
// number
var number = 19;

// Generatore password
var password = nomeUtente +
               cognomeUtente +
               colorePreferito + number;
console.log(password);

document.getElementById('password').innerHTML = password;
// document.getElementById('cognome_utente').innerHTML = cognomeUtente;
// document.getElementById('colore_preferito').innerHTML = colorePreferito;
// document.getElementById('numero_preferito').innerHTML = 19;
