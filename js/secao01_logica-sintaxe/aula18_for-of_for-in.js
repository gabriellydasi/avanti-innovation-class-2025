// 1. for-of
// O loop for-of é utilizado para iterar sobre os valores iteráveis como arrays, strings, Map, etc.
const frutas = ["maçã", "banana", "laranja", "uva"];

for (let fruta of frutas) {
  console.log(fruta);  // Vai imprimir cada fruta: maçã, banana, laranja, uva
}

const palavra = "JavaScript";

for (let letra of palavra) {
  console.log(letra);  // Vai imprimir cada letra da string: J, a, v, a, S, c, r, i, p, t
}

const mapa = new Map([
    ["nome", "Gabrielly"],
    ["idade", 24],
    ["cidade", "Bezerros"]
]);
  
for (let [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);  // Vai imprimir: nome: Gabrielly, idade: 24, cidade: Bezerros
}

// 2. for-in
// O loop for-in é utilizado para iterar sobre as propriedades (ou chaves) de um objeto.
const pessoa = {
  nome: "Gabrielly",
  idade: 24,
  cidade: "Recife"
};

for (let key in pessoa) {
  console.log(key + ": " + pessoa[key]);  // Vai imprimir chave e valor
  // Saída: nome: Gabrielly, idade: 24, cidade: Bezerros
}

// 3. forEach
// O método forEach é uma função de array que executa uma função de callback para cada item do array.
// Diferença importante: o forEach não pode ser interrompido com break ou continue.
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);  // Vai imprimir os números 1 a 5
});

// Exemplo com arrow function
numeros.forEach(numero => {
  console.log(numero);  // Vai imprimir os números 1 a 5
});

// Exemplo com índice (opcional)
numeros.forEach(function(numero, index) {
  console.log(`Índice ${index}: Número ${numero}`);  // Vai imprimir o índice e o número
  // Saída: Índice 0: Número 1, Índice 1: Número 2, etc.
});

const precos = [100, 200, 300];

// Alterando valores dentro de um array com forEach
precos.forEach(function(preco, index, array) {
  array[index] = preco * 1.1;  // Aumenta 10% em cada preço
});

console.log(precos);  // Vai imprimir: [110, 220, 330]

// RESUMO
// 1. for-of: Itera sobre os valores de iteráveis (arrays, strings, Map, etc).
// 2. for-in: Itera sobre as propriedades de um objeto.
// 3. forEach: Método de array que itera sobre itens do array e executa uma função de callback para cada item, mas não permite controle como break ou continue.