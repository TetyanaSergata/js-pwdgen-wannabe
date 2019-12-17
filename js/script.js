// Il tuo nome
var nomeUtente = prompt('Il tuo nome');
console.log(nomeUtente);
// Il tuo cognome
var cognomeUtente = prompt('Il tuo cognome');
console.log(cognomeUtente);
// Il colore preferito
var colorePreferito = prompt('Il tuo colore preferito');
console.log(colorePreferito);

var password = nomeUtente + cognomeUtente + colorePreferito;
console.log(password);

document.getElementById('nome_utente').innerHTML = nomeUtente;
document.getElementById('cognome_utente').innerHTML = cognomeUtente;
document.getElementById('colore_preferito').innerHTML = colorePreferito;
