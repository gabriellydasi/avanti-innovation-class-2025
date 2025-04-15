const inputForm = document.querySelector("#busca")
const botaoBusca = document.querySelector("#botaoBusca")
const resultadoDiv = document.querySelector("#resultado")

// Detecta qual tecla foi pressionada no campo de busca
inputForm.addEventListener("keydown", (e) => {
    console.log(e.key) 
    // Mostra no console a tecla pressionada
    // Pode ser útil para implementar funcionalidades como autocomplete
})

// Muda a cor de fundo quando o campo recebe foco
inputForm.addEventListener("focus", () => {
    inputForm.style.backgroundColor = "#FF0" 
})

// Restaura a cor original quando o campo perde o foco
inputForm.addEventListener("blur", () => {
    inputForm.style.backgroundColor = "" // Volta ao padrão
})

// Função que exibe o resultado da busca
function searchResult() {
    const valorBusca = inputForm.value.trim() // Remove espaços extras
    if (valorBusca) {
        resultadoDiv.textContent = "Voce buscou: " + valorBusca
    } else {
        resultadoDiv.textContent = "Por favor, insira algo na busca"
    }
}

// Chama a função de busca ao clicar no botão
botaoBusca.addEventListener("click", () => {
    searchResult()
})