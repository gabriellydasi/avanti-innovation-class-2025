// Tipo de dado: String

// Uma string é uma cadeia de caracteres. Pode ser declarada usando aspas simples (' '), duplas (" ") ou crase (` `).
// Usada para representar textos.

let nome = "Gabrielly"
let saudacao = 'Olá, mundo!'
let exemplo = "" // string vazia

// É possível usar qualquer um dos três formatos, mas é importante manter consistência no projeto.

// Concatenação de Strings

// A concatenação é o processo de juntar duas ou mais strings. Pode ser feita com o operador de adição (+).

let primeiroNome = "Gabi"
let sobrenome = "Silva"

let nomeCompleto = primeiroNome + " " + sobrenome
console.log(nomeCompleto) // Gabi Silva

// Também é possível concatenar strings com outros tipos de dados. O JavaScript converte automaticamente os valores em string.

let idade = 24
let frase = "Idade: " + idade + " anos"
console.log(frase) // Idade: 24 anos

// Template String (Template Literal)

// Introduzido no ES6, permite interpolar variáveis dentro da string usando a sintaxe ${ }.
// Para isso, é necessário usar crase (` `) em vez de aspas comuns.

let name = "Gabi"
let age = 24

let phrase = `Olá! Meu nome é ${name} e tenho ${age} anos.`
console.log(phrase) // Olá! Meu nome é Gabi e tenho 24 anos.

// Também permite quebras de linha sem necessidade de caracteres especiais:
let texto = `
Este é um exemplo
de string com múltiplas linhas.
`
console.log(texto)