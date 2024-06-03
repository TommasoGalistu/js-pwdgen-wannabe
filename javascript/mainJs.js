// inizio variabili
// creazione variabile di h2 dal dom
let testoVisibileUtente = document.getElementById('password')

// variabili input
// variabile del nome inserito dall'imput dell'utente
let nome = prompt('scrivi il tuo nome')
// variabile del cognome inserito dall'input dell'utente
let cognome = prompt('scrivi il tuo cognome')
// variabile del colore inserito da input utente
let colorePref = prompt("Qual'è il tuo colore preferito?")
// variabile di numero casuale da inserire alla password
let numeroCasuale = Math.floor(Math.random() * 23)


// inserimento effettivo del testo 
testoVisibileUtente.innerHTML = nome + cognome + colorePref + numeroCasuale
