// querySelectorAll

// querySelectorAll seleciona todos os elementos que combinam com o seletor CSS

const links = document.querySelectorAll("#links a")

console.log("Links ->", links)
// Retorna uma NodeList (semelhante a um array)

for (const link of links) {
  // Adiciona a classe 'feature-links' a cada <a>
  link.classList.add("feature-links")

  // Pega o valor do atributo href
  console.log(link.getAttribute("href"))

  // Faz com que o link abra em uma nova aba
  link.target = "_blank"

  // Define o título do link com base no href, removendo os últimos 5 caracteres
  // slice(0, -5) => pega a string desde o início (índice 0) até 5 caracteres antes do final
  // Ex: "index.html".slice(0, -5) => "index"
  link.title = link.getAttribute("href").slice(0, -5)
}