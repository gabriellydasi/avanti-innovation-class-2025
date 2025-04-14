// MÉTODO FILTER()

// Cria um NOVO array com os elementos que passam em uma condição (true).
// Utilizado para filtrar os dados, ex: só os maiores de idade, só os pares, etc.

const idades = [12, 25, 30, 17, 15];

const maioresDeIdade = idades.filter(age => age >= 18)
console.log(maioresDeIdade); // [ 25, 30 ]