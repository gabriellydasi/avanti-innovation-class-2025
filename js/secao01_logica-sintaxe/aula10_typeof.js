// O operador 'typeof' é usado para determinar o tipo de dado de uma variável ou valor.
// Ele retorna uma string indicando o tipo do operando.

let numero = 42
let texto = "Olá, mundo!"
let ativo = true
let objeto = { nome: "Gabi" }

console.log(typeof numero)  // "number"
console.log(typeof texto)   // "string"
console.log(typeof ativo)   // "boolean"
console.log(typeof objeto)  // "object"

// O 'typeof' também pode ser usado em valores literais:

console.log(typeof 123)        // "number"
console.log(typeof "texto")    // "string"
console.log(typeof null)       // "object" (isso é uma peculiaridade do JavaScript)
console.log(typeof undefined)  // "undefined"

// O operador 'typeof' retorna uma string com o tipo primitivo de valores:

let func = function() {}
console.log(typeof func)  // "function" (função é um tipo especial de objeto)

let arr = [1, 2, 3]
console.log(typeof arr)  // "object" (arrays também são considerados objetos em JavaScript)

// Importante: 'typeof' pode ter comportamentos inesperados em alguns casos, como no caso de 'null':

console.log(typeof null) // "object" (isso é uma peculiaridade do JavaScript)

// E em funções, que são do tipo 'function':

console.log(typeof function() {}) // "function"

// 'typeof' é útil para validação de tipos em tempo de execução, especialmente quando se lida com entradas dinâmicas.

let variavel = 42

if (typeof variavel === "number") {
  console.log("É um número!")
} else {
  console.log("Não é um número!")
}

// Exemplo de uso de 'null' em validações e retorno de dados de APIs:

// muito encontrado em retorno de dados de APIs
const vazio = null // valor nulo/vazio, usado para fazer validações
console.log(typeof vazio) // "object" - comportamento histórico