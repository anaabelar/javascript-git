// Obtém os elementos do DOM 
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");


//Botões
let btnSomar = document.getElementById("btnSomar");


//Botão resultado
const resultado = document.getElementById("resultado");

//Adiciona um evento de click no botão
btnSomar.addEventListener("click", function() {
    //Converte os valores dos inputs para números e soma
   let soma =Number(valor1.value) + Number(valor2.value);

   //Exibe o resultado na tela
   resultado.textContent = soma;

   valor1.value = "";
   valor2.value = "";

   setTimeout(function() {
     resultado.innerHTML = 0;
   }, 2000);

});

let btnSubtrair = document.getElementById("btnSubtrair");

btnSubtrair.addEventListener("click", function() {

let subtração = valor1.value - valor2.value;

resultado.textContent = subtração;

valor1.value = "";
valor2.value = "";

setTimeout(function() {
    resultado.innerHTML = 0;
  }, 2000);

});

let btnMultiplicar = document.getElementById("btnMultiplicar");

btnMultiplicar.addEventListener("click", function() {

    let multiplicar = valor1.value * valor2.value;

    resultado.textContent = multiplicar;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.innerHTML = 0;
      }, 2000);
});

let btnDividir = document.getElementById("btnDividir");

btnDividir.addEventListener("click", function() {

    let dividir = valor1.value / valor2.value;

    resultado.textContent = dividir;

    valor1.value = "";
    valor2.value = "";
    
    setTimeout(function() {
        resultado.innerHTML = 0;
      }, 2000);
});
