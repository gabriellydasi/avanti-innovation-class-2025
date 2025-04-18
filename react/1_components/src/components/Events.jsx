import React from 'react'

const Events = () => {

    const handleGreetings = (name) => {
        alert(`Olá, ${name}!`)
    }
  return (
    <>
        <button onClick={() => alert("Clicado")}>Alert</button>
        {/* É necessário transformar em função para que o alert carregue apenas quando clicar no botão */}

        <button onClick={() => handleGreetings("Gabrielly")}>Alert chamado da função</button>
    </>
  )
}

export default Events