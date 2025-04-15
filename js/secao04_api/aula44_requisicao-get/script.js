// GET - Busca todos os posts da API e exibe no HTML
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((posts) => {
        console.log("Lista de posts recebida:", posts)
        const container = document.querySelector("#container") // Seleciona o container onde os posts serão inseridos
        
        // Para cada post, cria um elemento HTML e adiciona ao container
        posts.map(post => {
            const div = document.createElement("div")
            div.className = "post" // Adiciona classe para estilização

            // Cria e adiciona o título do post
            const h2 = document.createElement("h2")
            h2.textContent = post.title
            div.appendChild(h2)

            // Cria e adiciona o corpo do post
            const p = document.createElement("p")
            p.textContent = post.body
            div.appendChild(p)

            container.appendChild(div) // Adiciona o post completo ao container
        })
    })

// GET com filtro - Busca apenas posts do usuário com ID 1
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")   
    // A query parameter ?userId=1 filtra os resultados