// OPERADOR TERNÁRIO

// O operador ternário é uma alternativa compacta ao uso do if-else, especialmente em casos de simples atribuições ou retornos.

// Sintaxe do operador ternário: (condição) ? valor_se_verdadeiro : valor_se_falso;

// 1. Exemplo básico de ternário

const idade = 18;

const resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(resultado);  // Vai imprimir "Maior de idade"

// 2. Usando ternário para atribuições simples

const numero = 10;

const parOuImpar = (numero % 2 === 0) ? "Par" : "Ímpar";

console.log(parOuImpar);  // Vai imprimir "Par"

// 3. Ternário dentro de funções

function verificarAprovacao(nota) {
  return (nota >= 7) ? "Aprovado" : "Reprovado";
}

console.log(verificarAprovacao(8));  // Vai imprimir "Aprovado"

// 4. Ternário com múltiplas condições (encadeado)

const salario = 3000;

const faixaSalarial = (salario > 5000) ? "Alto" :
                      (salario > 2000) ? "Médio" : 
                      "Baixo";

console.log(faixaSalarial);  // Vai imprimir "Médio"

// 5. Usando ternário para lógica simples

const logado = false;

const mensagem = logado ? "Bem-vindo!" : "Por favor, faça login.";

console.log(mensagem);  // Vai imprimir "Por favor, faça login."

// 6. Ternário com valores booleanos

const estaChovendo = true;

const resultadoChuva = estaChovendo ? "Leve um guarda-chuva" : "Dia ensolarado";

console.log(resultadoChuva);  // Vai imprimir "Leve um guarda-chuva"

// 7. Ternário em expressões

const notaAluno = 6;

const resultadoAluno = (notaAluno >= 7) ? "Aprovado" : (notaAluno >= 5) ? "Recuperação" : "Reprovado";

console.log(resultadoAluno);  // Vai imprimir "Recuperação"