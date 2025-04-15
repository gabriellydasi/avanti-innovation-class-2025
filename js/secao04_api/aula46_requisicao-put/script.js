// PUT - Atualiza completamente um post existente
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // O ID 1 na URL indica qual post será atualizado
    method: "PUT", // Método HTTP PUT para substituição completa
    body: JSON.stringify({
        id: 1,          // ID do post a ser atualizado
        title: "foo",    // Novo título
        body: "bar",     // Novo conteúdo
        userId: 1       // ID do usuário (deve ser mantido)
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((response) => response.json())
    .then((json) => console.log("Resposta da atualização completa:", json))