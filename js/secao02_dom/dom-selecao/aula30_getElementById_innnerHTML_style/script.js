// Seleção de elemento pelo ID
const content = document.getElementById("content")

console.log("Elemento ->", content)

// Modifica o conteúdo HTML do elemento
// Aceita tanto uma string vazia quanto uma string com tags HTML
content.innerHTML = `<p>Parágrafo de texto</p>`

// Modificação de estilos diretamente via JS
content.style.backgroundColor = "#f00" // altera a cor de fundo
content.style.fontSize = "2rem" // altera o tamanho da fonte