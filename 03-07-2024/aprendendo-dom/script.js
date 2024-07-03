//obtem o elemento do DOM com o 'idNome'
let nome = document.getElementById("idNome");

function mudar(event) {
    //Previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();



    document.getElementById("titulo").innerHTML = nome.ariaValueMax;

    nome.value = '';
}
let nome = document.getElementById("Cidade");

function mudar(event) {
    //Previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();



    document.getElementById("titulo").innerHTML = nome.ariaValueMax;

    nome.value = '';
}