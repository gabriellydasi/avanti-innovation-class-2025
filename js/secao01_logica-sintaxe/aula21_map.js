// MÉTODO MAP()

// Cria um NOVO array com os resultados da função aplicada em cada item do array original.
// [E utilizado para transformar os elementos (ex: dobrar, formatar, etc) SEM alterar o array original.

// Exemplo>
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(numero => numero * 2)
console.log(dobrados) // [ 2, 4, 6,  ]

// O array original não muda
console.log(numeros) // [ 1, 2, 3, 4 ]