// FUNÇÕES EM JAVASCRIPT 

// 1. FUNÇÃO DECLARATIVA (Function Declaration)

// O "this" dentro de uma função declarativa depende de como a função é chamada
function saudacao() {
    console.log(this)  // "this" depende do contexto de onde a função é chamada
  }
  
  const obj = {
    nome: "Gabi",
    saudacao: saudacao
  }
  
  // Chamada direta
  saudacao()  // "this" vai ser o global, o que no navegador é o "window"
  
  // Chamada no objeto
  obj.saudacao()  // "this" vai ser o objeto 'obj'

  // 2. ARROW FUNCTION (Função de seta)
  
  // O "this" em arrow functions é léxico, ou seja, ele herda o "this" do contexto onde foi criado
  const saudacaoArrow = () => {
    console.log(this)  // "this" vai ser o contexto onde a função foi definida
  }
  
  const objArrow = {
    nome: "Gabi",
    saudacao: saudacaoArrow
  }
  
  saudacaoArrow()  // "this" vai ser o contexto global, no caso "window" no navegador
  objArrow.saudacao()  // "this" ainda será o contexto global, por ser uma arrow function
  
  // 3. FUNÇÃO ARMAZENADA EM UMA VARIÁVEL
  
  // Uma função pode ser armazenada em uma variável (expressão de função)
  const saudacaoFunc = function(nome) {
    return "Olá, " + nome + "!"
  }
  
  console.log(saudacaoFunc("Gabi"))  // Olá, Gabi!
  
  // Arrow function também pode ser armazenada em variáveis
  const multiplicar = (a, b) => a * b
  console.log(multiplicar(2, 5))  // 10
  
  // 4. FUNÇÃO ARMAZENADA EM UMA VARIÁVEL E COM THIS
  
  // Aqui, usamos uma função armazenada em uma variável
  const objWithFunc = {
    nome: "Gabi",
    saudacao: function() {
      console.log("Olá, " + this.nome)
    }
  }
  
  objWithFunc.saudacao()  // Olá, Gabi (this é o objeto)
  
  const objWithArrowFunc = {
    nome: "Gabi",
    saudacao: () => {
      console.log("Olá, " + this.nome)
    }
  }
  
  objWithArrowFunc.saudacao()  // Olá, undefined (this é o contexto global)