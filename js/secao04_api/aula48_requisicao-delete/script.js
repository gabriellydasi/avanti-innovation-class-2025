// DELETE - Remove um post existente
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE", // Método HTTP DELETE para remoção
    // O ID 1 na URL indica qual post será deletado
    // Não é necessário body ou headers para uma operação simples de DELETE
})
    .then(response => {
        if (response.ok) {
            console.log("Post deletado com sucesso")
        } else {
            console.error(error)
        }
    })