// SPREAD OPERATOR (...)

// Operador de espalhamento. Copia elementos de arrays ou propriedades de objetos.
// Utilizado para clonar, juntar arrays ou objetos, ou passar valores individuais.

const a = [1, 2, 3]
const b = [4, 5, 6]

// Junta os dois arrays
const juntos = [...a, ...b]
console.log(juntos) // [1, 2, 3, 4, 5, 6]

// Copiando um array
const copia = [...a]
console.log(copia) // [1, 2, 3]

// Exemplo com objetos
const pessoa = { nome: "Gabrielly", idade: 22 }
const dadosExtras = { cidade: "Recife", ativo: true }

const perfil = { ...pessoa, ...dadosExtras }
console.log(perfil)
// { nome: 'Gabrielly', idade: 22, cidade: 'Recife', ativo: true }

const num = [1, 2, 3]

// Adicionando elementos
const adicionaElementos = [10, ...num, 30]
console.log(adicionaElementos) // [ 10, 1, 2, 3, 30 ]