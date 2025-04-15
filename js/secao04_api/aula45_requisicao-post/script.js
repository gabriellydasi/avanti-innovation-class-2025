// POST - Cria um novo post na API
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // Define o método HTTP como POST
    body: JSON.stringify({ // Converte o objeto para JSON
        title: "foo",    // Título do novo post
        body: "bar",     // Conteúdo do novo post
        userId: 1,       // ID do usuário dono do post
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8", // Define o tipo de conteúdo
    },
}) 
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((json) => console.log("Resposta da criação:", json)) // Exibe a resposta do servidor