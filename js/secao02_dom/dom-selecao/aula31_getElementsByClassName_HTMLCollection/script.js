// Seleção de elementos por classe
const classText = document.getElementsByClassName("text")

console.log("Classe text ->", classText) // Retorna uma HTMLCollection (lista de elementos)

// Não é possível aplicar estilo diretamente na coleção inteira
// É necessário percorrer cada elemento individualmente por métodos como 'map()' 'for of' ou 'for',

for (const text of classText) {
    text.style.color = "#9bb" // Altera a cor do texto de cada elemento com a classe "text"
}