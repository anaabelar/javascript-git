
// EXERCICIO 1

const hours = 13;

if (hours >= 6 && hours <= 11) {
    console.log("Bom dia!");
} else if (hours >= 12 && hours <= 17) {
    console.log("Boa tarde");
}else {
    console.log("Boa noite!");
}

// CORREÇÃO

let hours2 = 17;
let isBomDia = hours >= 6 && hours <= 11;
let isBoaTarde = hours >= 12 && hours <= 17;

if(isBomDia){
    console.log("Bom dia!");
} else if (isBoaTarde) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// EXERCICIO 2

const idade = 5;
const grátis = idade <= 7 || idade >= 65;

if (grátis) {
    console.log("Entrada gratuita");
} else {
    console.log("Entrada 30,00");
}

// CORREÇÃO

const age = 65;

if (age <= 7 || age >= 65) {
    console.log("entrada grátis");
} else {
    console.log("entrada é 30 reais");
}
