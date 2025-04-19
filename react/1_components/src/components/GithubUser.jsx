import React, { useState, useEffect } from 'react'

// Componente que exibe informações de um usuário do GitHub
const GithubUser = () => {
    // Estado para armazenar os dados do usuário
    const [data, setData] = useState([])

    // Hook useEffect para buscar os dados quando o componente é montado
    useEffect(() => {
        console.log("Executou github") 
        // Fazendo a requisição para a API do GitHub
        fetch("https://api.github.com/users/gabriellydasi")
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => setData(data)) // Atualiza o estado com os dados recebidos
            .catch(error => console.error(error)) // Trata possíveis erros
    }, []) // Array de dependências vazio = executa apenas uma vez (montagem)

    console.log("dados: ", data) 
    return (
        <>
            <img src={data.avatar_url} alt={data.name} />
            <h3>{data.name}</h3>
            <p>@{data.login}</p>
        </>
    )
}

export default GithubUser