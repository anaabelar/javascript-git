const times = ["Bangu", "Paulista", "Cotia"];

// includes
console.log(times.includes("Santos"));

// Exercícios 

const fruits = ["Morango", "Banana", "Mamão", "Pera"];

if (fruits.includes("Abacaxi")) {
    console.log("A string abacaxi existe no array fruits");
} else if (fruits.includes("Pera")) {
    console.log("A string pera existe no array fruits");
} else {
    console.log("Nem pera, nem abacaxi existem no array fruits");
}