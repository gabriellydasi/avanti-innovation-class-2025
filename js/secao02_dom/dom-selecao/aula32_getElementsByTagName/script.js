// Seleção de elementos por tags
const titles = document.getElementsByTagName("h2")

console.log("Titles -> ", titles) // Retorna uma HTMLCollection (lista de elementos)

for (const title of titles) {
    title.style.fontSize = "2.5rem" // altera o tamanho da fonte
}