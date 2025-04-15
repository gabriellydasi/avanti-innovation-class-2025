// getElementsByClassName e getElementsByTagName podem ser substituídos 
// por querySelector/querySelectorAll

// querySelector aceita qualquer seletor CSS (id, classe, tag...)
// Ex: "#id", ".classe", "tag"
const elementFeature = document.querySelector("#feature")

// Criação de um novo elemento <p>
const newElement = document.createElement("p")

// textContent adiciona apenas texto, diferente de innerHTML (que interpreta tags HTML)
newElement.textContent = "Um novo parágrafo"

// Adiciona o elemento criado como último filho dentro do elemento selecionado
elementFeature.append(newElement)

// Outra forma de inserir conteúdo HTML diretamente (sem criar elementos manualmente)
// insertAdjacentHTML(posição, conteúdo HTML)
elementFeature.insertAdjacentHTML("beforeend", `
  <div>
    <p>Outro parágrafo criado dinamicamente</p>
  </div>
`)

// insertBefore insere um elemento antes de outro já existente
// Sintaxe: parent.insertBefore(novoElemento, elementoDeReferencia)
document.body.insertBefore(newElement, elementFeature)