// Tipo de dado: Array

// Arrays são listas ordenadas de elementos, que podem ser de qualquer tipo de dado.
// Cada elemento do array possui um índice, começando de 0 (zero).

let frutas = ["maçã", "banana", "laranja"]

console.log(frutas) // ["maçã", "banana", "laranja"]
console.log(frutas[0]) // "maçã" - primeiro elemento (índice 0)
console.log(frutas[1]) // "banana" - segundo elemento (índice 1)

// Arrays podem conter diferentes tipos de dados no mesmo array em js:

let misto = [42, "texto", true, [1, 2, 3]]

console.log(misto[1]) // "texto"
console.log(misto[3]) // [1, 2, 3] - subarray dentro do array

// Em js, arrays têm um tamanho dinâmico, ou seja, podem crescer ou diminuir conforme necessário.
// O método 'length' retorna o número de elementos do array.

let numeros = [0, 1, 2, 3]
console.log(numeros.length) // 4 - comprimento do array

// Arrays são mutáveis, ou seja, podemos modificar seus elementos diretamente:

frutas[0] = "abacaxi"
console.log(frutas) // ["abacaxi", "banana", "laranja"]