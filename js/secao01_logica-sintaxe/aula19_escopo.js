// Escopo em JavaScript

// Escopo Global
// Variáveis declaradas fora de funções ou blocos estão no escopo global
let nome = "Gabrielly"; // escopo global

function mostrarNome() {
  console.log(nome); // acessa a variável global
}

mostrarNome(); // Gabrielly
console.log(nome); // Gabrielly


// Escopo de Função (local)
function saudacao() {
  let mensagem = "Olá"; // escopo local
  console.log(mensagem); // acessível aqui
}

saudacao();
console.log(mensagem); // Erro! mensagem is not defined

// Escopo de Bloco
if (true) {
  let x = 1;
  const y = 2;
  var z = 3;
  console.log(x, y, z); // 1 2 3
}

console.log(x); // Erro! x is not defined
console.log(y); // Erro! y is not defined
console.log(z); // 3 -> var ignora o escopo de bloco (não recomendado)

// Diferença entre var, let e const no escopo
function testeVarLetConst() {
  if (true) {
    var a = 10;     // escopo de função
    let b = 20;     // escopo de bloco
    const c = 30;   // escopo de bloco
  }

  console.log(a); // 10
  console.log(b); // Erro! b is not defined
  console.log(c); // Erro! c is not defined
}

testeVarLetConst();