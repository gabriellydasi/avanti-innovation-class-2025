// Navegações dentro das hierarquias do elemento

// Navegação pelo DOM: subindo e descendo na hierarquia dos elementos

const lista = document.querySelector("#links ul") // Seleciona a <ul> dentro da div #links

console.log("Pai da lista:", lista.parentNode)
// parentNode retorna o elemento pai

lista.parentNode.style.backgroundColor = "#0f0f" // Modifica o estilo do elemento pai

// children retorna os elementos filhos (HTMLCollection)
console.log("Filhos da lista:", lista.children)

// Percorre cada <li> da lista e aplica um estilo
for (const list of lista.children) {
  list.style.fontSize = ".6rem"
}

// firstElementChild retorna o primeiro filho elemento (ignora nós de texto)
lista.firstElementChild.style.fontSize = "1rem"