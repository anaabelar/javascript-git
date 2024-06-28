const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

  // Criando uma função
  button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputNota.value);
    
    if (inputNota.value >= 7){
    alert("Aprovado(a) DIVO(A)!");
   } else { (inputNota <= 6) 
    alert("Reprovado(a) BURRO(A)!");
   }
  });

   