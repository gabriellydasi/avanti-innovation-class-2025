// PATCH - Atualiza parcialmente um post existente
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH", // Método HTTP PATCH para atualização parcial
    body: JSON.stringify({
        title: "foo" // Apenas o título será atualizado
        // Demais campos permanecem inalterados
    }),
    headers: {
        "Content-type": "application/json; charset-UTF-8"
    },
})
    .then((response) => response.json())
    .then((json) => console.log("Resposta da atualização parcial:", json))