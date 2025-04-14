// MÉTODO REDUCE()

// Reduz o array a um único valor, acumulando os resultados a cada iteração.
// Utilizado para somar, multiplicar, concatenar ou qualquer operação acumulativa.

const valores = [10, 5, 2]

const total = valores.reduce(function (acumulador, atual) { // Outra forma de escrever
  return acumulador + atual                                       
}, 0)
console.log(total) // 17

// Dá pra começar de outro valor inicial, tipo 100:
const totalComBonus = valores.reduce((acc, n) => acc + n, 100)
console.log(totalComBonus) // 117