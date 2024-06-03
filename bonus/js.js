// bottone input
let buttonSub = document.getElementById('buttonSubmit');
// input
let contNome = document.getElementById('validationCustom01').value;
let contCognome = document.getElementById('validationCustom02').value;
let contCittà = document.getElementById('validationCustom03').value;
let contZipCode = document.getElementById('validationCustom05').value;
// testo da cambiare
let testoDaInput = document.getElementById('dettagliInput');
let nome, cognome, citta, codPost;

buttonSub.addEventListener('click', (event) => {
    event.preventDefault()
    let testoCompleto = `Ti chiami ${contNome} e il tuo cognome è ${contCognome}, abiti a ${contCittà} zip code:${contZipCode} `
    testoDaInput.textContent = testoCompleto
})
