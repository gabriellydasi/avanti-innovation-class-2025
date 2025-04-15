fetch("https://api.github.com/users/gabriellydasi")
// Faz uma requisição para a API do GitHub buscando informações do usuário 

    .then(response => response.json())
    // Quando a resposta chegar, ela vem em um formato "cru" (Response)
    // Aqui a gente transforma essa resposta em um objeto JavaScript (JSON)

    .then(data => console.log("Dados: ", data))
    // Depois que os dados estiverem prontos em formato JSON,
    // a gente imprime eles no console 


/* RESUMO */

// fetch(...): é uma função que faz requisições HTTP (tipo GET, POST...) para um servidor. Nesse caso, estamos selecionando informações da API do GitHub. 

// .then(...): é uma forma de encadear ações quando a promessa (Promise) do fetch for resolvida com sucesso (status 200). Usamos isso pra esperar os dados chegarem antes de fazer qualquer coisa com eles.
    
// response.json(): pega a resposta da API (que vem em formato bruto) e converte pra JSON, que é um formato fácil de trabalhar no JavaScript (Object)
    
// console.log("Dados: ", data): simplesmente mostra no console do navegador os dados que a API devolveu