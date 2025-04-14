// OPERADORES ARITMÉTICOS

// Os operadores aritméticos são utilizados para realizar operações matemáticas básicas com valores numéricos.

// 1. ADIÇÃO (+)
let a = 10
let b = 5
let soma = a + b  // 15
console.log(soma)

// Também pode ser usado para concatenação de strings
let nome = "Gabi"
let saudacao = "Olá, " + nome
console.log(saudacao)  // "Olá, Gabi"

// 2. SUBTRAÇÃO (-)
let subtracao = a - b  // 5
console.log(subtracao)

// 3. MULTIPLICAÇÃO (*)
let multiplicacao = a * b  // 50
console.log(multiplicacao)

// 4. DIVISÃO (/)
let divisao = a / b  // 2
console.log(divisao)

// Divisão por zero retorna Infinity
let infinito = 10 / 0
console.log(infinito)  // Infinity

// 5. RESTO DA DIVISÃO (%)
let resto = 10 % 3  // 1
console.log(resto)

// 6. EXPONENCIAÇÃO (**)
let potencia = 2 ** 3  // 8
console.log(potencia)

// 7. INCREMENTO (++)
let contador = 0
contador++
console.log(contador)  // 1

// Pré-incremento vs Pós-incremento
let x = 5
let y = ++x  // pré-incremento: x = 6, y = 6
console.log("x:", x)  // 6
console.log("y:", y)  // 6

let z = x++  // pós-incremento: z = 6, x = 7
console.log("x:", x)  // 7
console.log("z:", z)  // 6

/*
++variável ou --variável -> pré-incremento/decremento: a variável é atualizada antes de ser usada na expressão.

variável++ ou variável-- -> pós-incremento/decremento: a variável é usada antes, depois o valor é atualizado.
*/

// 8. DECREMENTO (--)
let cont = 5
cont--
console.log(cont)  // 4