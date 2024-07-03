//obtem  os botões do DOM
let btnMudarCor = document.getElementById("Mudar");
let btnVoltarCor = document.getElementById("Voltar");

//Adiciona um evento de clique ao botão 'Mudar cor de fundo'
btnMudarCor.addEventListener("click", function() {
     document.body.style.backgroud = "#EE30A7";
});

btnVoltarCor.addEventListener("click", function() {
    document.body.style.backgroud = "";
});