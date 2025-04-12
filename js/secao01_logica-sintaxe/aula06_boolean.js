// Tipo de dado: Boolean

// O tipo boolean representa um valor lógico: verdadeiro ou falso (binário)
// Pode ser usado em comparações, condições e estruturas de controle.

let ligado = true
let desligado = false

console.log(typeof ligado)   // "boolean"
console.log(typeof desligado) // "boolean"

// Booleans são comumente usados em expressões condicionais:

let maiorDeIdade = 18 >= 18
console.log(maiorDeIdade) // true

let senhaCorreta = "1234" === "abcd"
console.log(senhaCorreta) // false

// Valores que são implicitamente considerados false (falsy):
// - false
// - 0
// - "" (string vazia)
// - null
// - undefined
// - NaN

// Qualquer outro valor é considerado true (truthy).

let teste = Boolean(0)        // false
let teste2 = Boolean("Gabi")  // true

// O tipo boolean é muito usado em controle de fluxo com if, while, etc.

let ativo = true

if (ativo) {
  console.log("Usuário ativo")
} else {
  console.log("Usuário inativo")
}