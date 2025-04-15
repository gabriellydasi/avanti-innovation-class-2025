function fetchGitHubUser(username) {
    // Faz a requisição para a API do GitHub
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            // Verifica se a resposta da API foi bem-sucedida 
            if (!response.ok) {
                console.error(error)
            }
            return response.json() // Converte a resposta para JSON
        })
        .then((user) => {
            // Se obtivermos os dados do usuário, cria o card
            createUserCard(user)
        })
        .catch((error) => {
            // Em caso de erro 
            console.error('Erro na requisição:', error)
            const app = document.getElementById("app")
            // Exibe mensagem de erro para o usuário
            app.innerHTML = `<p style="color: red">Erro: ${error.message}</p>`
        })
}

// Cria e exibe um card com as informações do usuário do GitHub
function createUserCard(user) {
    const app = document.getElementById("app")
    
    // Cria o elemento principal do card
    const card = document.createElement("div")
    card.className = "card" // Adiciona classe para estilização CSS

    // Cria e configura a imagem do avatar
    const avatar = document.createElement("img")
    avatar.src = user.avatar_url // Define a URL da imagem
    avatar.alt = `${user.login}'s avatar` // Texto alternativo para acessibilidade

    // Cria e configura o elemento para o nome completo
    const name = document.createElement("h2")
    name.textContent = user.name 

    // Cria e configura o elemento para o nome de usuário
    const login = document.createElement("p")
    login.textContent = `@${user.login}`

    // Adiciona os elementos ao card na ordem desejada
    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)

    // Limpa o conteúdo anterior e adiciona o novo card
    app.innerHTML = ""
    app.appendChild(card)
}

/* Parâmetros utilizados */
// user - Objeto contendo os dados do usuário
// user.avatar_url - URL da imagem de perfil
// user.name - Nome completo do usuário
// user.login - Nome de usuário (login)

// Testando
// fetchGitHubUser("gabriellydasi")