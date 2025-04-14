// ESTRUTURAS DE REPETIÇÃO: FOR e WHILE

// 1. LAÇO FOR

// O laço "for" é utilizado quando sabemos o número de iterações que precisamos realizar.

// Sintaxe do for:
// for (inicialização; condição; incremento) {
//     bloco de código
// }

for (let i = 0; i < 5; i++) {
    console.log(i);  // Vai imprimir de 0 a 4
}
  
// A inicialização (let i = 0) acontece uma única vez antes do laço começar.
// A condição (i < 5) é verificada a cada iteração. Quando for falsa, o laço termina.
// O incremento (i++) aumenta o valor de "i" em 1 após cada iteração.
  
// 2. LAÇO FOR com arrays
  
const frutas = ["maçã", "banana", "laranja", "uva"];
  
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);  // Vai imprimir cada fruta do array
}

// 3. LAÇO WHILE
  
// O "while" é utilizado quando não sabemos exatamente o número de iterações, mas sim uma condição que deve ser atendida.
  
// Sintaxe do while:
// while (condição) {
//     bloco de código
// }
  
let j = 0;
  
while (j < 5) {
    console.log(j);  // Vai imprimir de 0 a 4
    j++;  // Incremento é necessário para evitar loop infinito
}
  
// 4. LAÇO DO-WHILE
  
// O "do-while" é semelhante ao "while", mas neste caso a condição é verificada depois da execução do código, garantindo que o código seja executado pelo menos uma vez.
  
let k = 0;
  
do {
    console.log(k);  // Vai imprimir de 0 a 4
    k++;
} while (k < 5);  // Condição é verificada após o código ser executado
  
// 5. BREAK e CONTINUE
  
// BREAK: Interrompe o loop imediatamente e sai dele.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // O loop termina quando i for igual a 5
    }
    console.log(i);
}
  
// CONTINUE: Pula a iteração atual e vai para a próxima.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;  // O código abaixo não será executado quando i for igual a 5
    }
    console.log(i);
}
  