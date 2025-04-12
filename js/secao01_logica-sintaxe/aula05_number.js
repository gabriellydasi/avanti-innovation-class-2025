// Tipo de dado: Number

// Em JavaScript, o tipo 'number' representa tanto números inteiros quanto números decimais (ponto flutuante).

let inteiro = 42
let flutuante = 3.14
let negativo = -7

console.log(typeof inteiro) // "number"
console.log(typeof flutuante) // "number"
console.log(typeof negativo) // "number"

// Não há distinção entre int, float ou double como em outras linguagens.
// Todos os valores numéricos são tratados como 'number'.

let x = 10        // inteiro
let y = 0.5       // flutuante
let z = 2.0       // ainda é considerado number

console.log(typeof x) // "number"
console.log(typeof y) // "number"
console.log(typeof z) // "number"

// O tipo number também inclui valores especiais como:
// - Infinity
// - -Infinity
// - NaN (Not a Number)

console.log(typeof Infinity) // "number"
console.log(typeof NaN)      // "number"