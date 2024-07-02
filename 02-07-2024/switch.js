let teste = 2;

switch (teste) {
    case 1:
        console.log("Foi de primeira");
        break;
    case 2:
        console.log("Foi na segunda vez!");
        break;
    default:
        console.log("Não foi nem na primeira e nem na segunda");
        break;
}

//Exercicio 1

const drinkType = `vinho`;

switch (drinkType) {
case "água": 
   console.log("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.");
   break;
case "refrigerante":
    console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, á base de água mineral e açucar.");
    break;
case "suco":
    console.log("Bebida produzida do liquido extraído de frutos.");
    break;
default:
    console.log("Bebida desconhecida.");
    break;
}