// Case Sensitive (sensível a maiúsculas e minúsculas)

// Em JavaScript, os nomes de variáveis, funções, objetos etc. diferenciam letras maiúsculas de minúsculas!
// Ou seja: "nome" e "Nome" são coisas completamente diferentes 

let nome = "Gabi"
let Nome = "Gabrielly"

console.log(nome) // Gabi
console.log(Nome) // Gabrielly

// Ao digitar com uma letra maiúscula/minúscula diferente, vai dar erro ou mostrar outro valor

console.log(nomE) // ReferenceError: nomE is not defined

// Camel Case (formato de escrita de nomes)

// É um padrão de nomenclatura muito usado em JavaScript (e em várias linguagens)
// A primeira palavra vai toda minúscula, e cada nova palavra começa com letra MAIÚSCULA

// Exemplos de camelCase:
let nomeCompleto = "Gabrielly Silva"
let idadeDoUsuario = 22
let corFavorita = "azul pastel"

// Evitar esses estilos em JavaScript:
let nome_completo = "snake_case" // mais usado em Python
let NomeCompleto = "PascalCase"  // comum em classes