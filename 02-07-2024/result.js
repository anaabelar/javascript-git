console.log(!true);
console.log(!false);

// exercicio 1
const animals = ["macaco", "tucano", "elefante", "pavão", "hipótamo", "leão"];

if (animals.includes("leão")) {
    console.log("Existe um leão no array animals");
} else {
    console.log("Leão não existe no array animals");

}

//exercicio 2 
const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
];

let phrase = '';
for (let i = 0; i < functions.length, i++) {
    phrase += ${functions[i]()}`
}

console.log(phrase);
