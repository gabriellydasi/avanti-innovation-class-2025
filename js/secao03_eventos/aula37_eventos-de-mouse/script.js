const content = document.querySelector("#content")
const showButton = document.querySelector("#show")
const hiddenButton = document.querySelector("#hide")
const hideShowButton = document.querySelector("#hideShowContent")

// Mostra o conteúdo ao clicar no botão "show"
showButton.addEventListener("click", () => {
    content.classList.add("show")   // Adiciona a classe que exibe o conteúdo
    content.classList.remove("hide") // Remove a classe que esconde o conteúdo
})

// Esconde o conteúdo ao dar duplo clique no botão "hide"
hiddenButton.addEventListener("dblclick", () => {
    content.classList.add("hide")   // Adiciona a classe que esconde o conteúdo
    content.classList.remove("show") // Remove a classe que exibe o conteúdo
})

// Alterna entre mostrar e esconder ao clicar no botão "hideShowContent"
hideShowButton.addEventListener("click", () => {
    content.classList.toggle("hide") 
    // A função toggle verifica se a classe está presente:
    // Se estiver, ela remove
    // Se não estiver, ela adiciona
})

// Eventos comuns de mouse:

// onclick -> clique simples
// ondblclick -> clique duplo
// onmousedown -> ao pressionar o botão do mouse
// onmouseup -> ao soltar o botão do mouse
// onmousemove -> ao mover o mouse sobre o elemento
// onmouseenter -> quando o mouse entra na área do elemento
// onmouseleave -> quando o mouse sai da área do elemento