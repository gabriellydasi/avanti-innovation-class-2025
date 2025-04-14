// HOISTING (içamento) em JavaScript

// O JavaScript "move" declarações de variáveis e funções para o topo do escopo,
// antes mesmo de executar o código. Esse comportamento é chamado de HOISTING.

// IMPORTANTE:
// - Apenas as declarações são içadas, não os valores/atribuições
// - Isso acontece com var (mas não com let/const da mesma forma)
// - Também acontece com funções declaradas (mas não com arrow ou function expressions)

// 1. Exemplo com var
console.log(x) // undefined -> a variável foi declarada "lá em cima", mas sem valor ainda

var x = 10;
console.log(x) // 10

// O código acima é interpretado pelo JavaScript assim:
var x         // hoisting da declaração
console.log(x) // undefined
x = 10         // valor é atribuído agora
console.log(x) // 10

// 2. Exemplo com let e const
console.log(y) // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z) // ReferenceError: Cannot access 'z' before initialization
const z = 30

// let e const também são "movidas" para o topo,
// mas ficam numa fase chamada "temporal dead zone" até a linha em que são declaradas.
// Só podem ser usadas após sua declaração real.

// 3. Hoisting com funções declaradas
digaOi() // Funciona normalmente

function digaOi() {
  console.log("Olá, Gabi!")
}

// Funções declaradas são içadas com corpo e tudo,
// então podem ser chamadas mesmo antes de sua posição no código.

// 4. Function expression e arrow functions
dizerTchau() // TypeError: dizerTchau is not a function

var dizerTchau = function() {
  console.log("Tchau!")
}

// Neste caso, apenas a variável 'dizerTchau' é içada (como undefined),
// mas a função só é atribuída a ela depois da linha original.

// O mesmo vale para arrow functions:

falar() // TypeError: falar is not a function

var falar = () => {
  console.log("Oi de novo!");
}