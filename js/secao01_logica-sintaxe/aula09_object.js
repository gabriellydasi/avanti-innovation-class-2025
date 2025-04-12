// Tipo de dado: Object

// Um objeto em JavaScript é uma coleção de pares chave-valor.
// As chaves são chamadas de propriedades e os valores podem ser qualquer tipo de dado (strings, números, arrays, outros objetos, etc.).

let pessoa = {
    nome: "Gabrielly",
    idade: 24,
    estado: "Pernambuco"
  }
  
console.log(pessoa) // { nome: 'Gabrielly', idade: 24, estado: 'Pernambuco' }

// Acessando propriedades de um objeto:

// Usando a notação de ponto:
console.log(pessoa.nome)  // Gabrielly

// Ou usando a notação de colchetes (útil quando a chave é dinâmica ou contém caracteres especiais):
console.log(pessoa["idade"]) // 24

// Objetos são mutáveis, ou seja, podemos alterar ou adicionar propriedades após a criação:

pessoa.idade = 23 // alterando a propriedade 'idade'
pessoa.email = "gabrielly@exemplo.com" // adicionando nova propriedade

console.log(pessoa) 
/*
{
  nome: 'Gabrielly',
  idade: 23,
  estado: 'Pernambuco',
  email: 'gabrielly@exemplo.com'
}
*/

// Objetos podem ter propriedades de qualquer tipo de dado, incluindo outros objetos e arrays:

let carro = {
    modelo: "Fusca",
    ano: 1968,
    proprietario: {
      nome: "João",
      idade: 40
    },
    cores: ["azul", "branco"]
}
  
console.log(carro.proprietario.nome) // "João"
console.log(carro.cores[0]) // "azul"
console.log(carro) 
/*
{
  modelo: 'Fusca',
  ano: 1968,
  proprietario: { nome: 'João', idade: 40 },
  cores: [ 'azul', 'branco' ]
}
*/