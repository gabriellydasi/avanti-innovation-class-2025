// OPERADORES DE COMPARAÇÃO

// Usados para comparar dois valores e retornar um resultado booleano (true ou false).

// 1. Igualdade (==)
// Compara apenas o valor, sem considerar o tipo.
console.log(5 == "5")  // true

// 2. Estritamente igual (===)
// Compara o valor e o tipo. Mais seguro e recomendado.
console.log(5 === "5")  // false

// 3. Diferente (!=)
// Compara apenas o valor, ignora o tipo.
console.log(10 != "10")  // false

// 4. Estritamente diferente (!==)
// Compara valor e tipo.
console.log(10 !== "10")  // true

// 5. Maior que (>)
console.log(7 > 3)  // true

// 6. Maior ou igual (>=)
console.log(7 >= 7)  // true

// 7. Menor que (<)
console.log(2 < 10)  // true

// 8. Menor ou igual (<=)
console.log(5 <= 4)  // false

// Observações:
// - === e !== são preferíveis a == e != para evitar coerção de tipo.
// - Todos esses operadores retornam valores do tipo boolean.
// - Comparações entre strings, números, booleans e objetos podem se comportar de formas diferentes.

// COMPARAÇÕES ENTRE TIPOS DIFERENTES

// Strings: comparação é feita com base na ordem lexicográfica (alfabética)
console.log("banana" > "abacaxi")  // true, pois "b" vem depois de "a"
console.log("2" > "12")           // true, pois "2" vem depois de "1" (como texto)

// Números: comparação normal, valor numérico
console.log(10 > 5)  // true
console.log(3 < 1)   // false

// Booleans com números:
console.log(true == 1)   // true
console.log(false == 0)  // true
console.log(true === 1)  // false (tipos diferentes)

// Strings com números:
console.log("10" == 10)   // true (conversão implícita)
console.log("10" === 10)  // false (tipos diferentes)

// Objetos: são comparados por referência, não por conteúdo
const obj1 = { nome: "Gabi" }
const obj2 = { nome: "Gabi" }

console.log(obj1 == obj2)   // false (endereços diferentes na memória)
console.log(obj1 === obj2)  // false

// Mesmo que o conteúdo seja igual, objetos são diferentes se não forem o MESMO na memória

// Mas se apontarem para o mesmo objeto:
const obj3 = obj1
console.log(obj1 === obj3)  // true