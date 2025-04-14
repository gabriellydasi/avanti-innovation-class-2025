// ESTRUTURAS CONDICIONAIS: IF-ELSE

// A estrutura de controle "if-else" permite executar um bloco de código dependendo de uma condição ser verdadeira ou falsa

// 1. IF - IF simples

const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade!")
}  // Vai imprimir "Você é maior de idade!" se a condição for verdadeira

// 2. IF-ELSE - Se a condição do "if" não for atendida, executa o código do "else"

const numero = 5;

if (numero % 2 === 0) {
  console.log("O número é par")
} else {
  console.log("O número é ímpar")  // Vai imprimir "O número é ímpar"
}

// 3. ELSE IF - Usado para verificar múltiplas condições

const nota = 7;

if (nota >= 9) {
  console.log("Aprovado com louvor!")
} else if (nota >= 7) {
  console.log("Aprovado!")
} else {
  console.log("Reprovado!")  // Vai imprimir "Aprovado!" porque a nota é 7
}

// 4. IF-ELSE dentro de funções

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade"
  } else {
    return "Você é menor de idade"
  }
}

console.log(verificarIdade(20))  // Vai imprimir "Você é maior de idade"

// 5. IF-ELSE sem bloco de código (uma linha apenas)

const resultado = 5;

if (resultado > 3) console.log("Resultado é maior que 3")  // Não precisa de chaves se for uma linha só no bloco

// 6. IF com operadores lógicos

const salario = 3000;
const temFilhos = true;

if (salario > 2500 && temFilhos) {
  console.log("A pessoa tem filhos e um salário acima de R$2500")
} else {
  console.log("Condição não atendida")
}

// 7. IF-ELSE com expressão

const num = 10;

if (num > 5)
  console.log("Número maior que 5")  // Vai imprimir "Número maior que 5"
else
  console.log("Número menor ou igual a 5")