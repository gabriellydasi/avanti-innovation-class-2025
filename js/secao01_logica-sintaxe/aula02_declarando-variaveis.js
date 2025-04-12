// Variáveis em JavaScript

// Uma variável armazena informações na memória e permite que a gente recupere esses dados ao longo do código 

// --- VAR ---
// Forma antiga de declarar variáveis (hoje é considerada depreciada)
var name
console.log(name) // undefined (a variável foi criada, mas ainda não recebeu um valor)

name = "Gabrielly"
// O sinal de "=" é o operador de atribuição
console.log(name) // Gabrielly

// Problema do var: permite declarar a mesma variável mais de uma vez (isso pode gerar bugs e confusão)
var number = 10
var number = 5
console.log(number) // 5 (o valor antigo foi sobrescrito sem erro!)


// --- LET ---
// Forma moderna de declarar variáveis (desde 2015)
// Não permite redeclarar a mesma variável no mesmo escopo (mais seguro e organizado!)
let user = "Gabi"
console.log(user) // Gabi

user = 24 // Tipagem dinâmica! Podemos trocar conteúdo, bem como o tipo do valor (string -> number)
console.log(user) // 24


// --- CONST ---
// Também moderna (chegou com o ES6 em 2015) 
// Não permite reatribuir um novo valor depois de definido
const integer = 24
integer = 23 // Erro! Não podemos mudar o valor de uma const 


// RESUMO
// var   -> antigo, permite redeclaração 
// let   -> moderno, seguro, permite reatribuição
// const -> moderno, fixo, não permite reatribuição