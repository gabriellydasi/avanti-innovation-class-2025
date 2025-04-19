import React, { useState } from 'react'

const Counter = () => {
    // useState é um hook do React, ou seja, uma função especial que permite adicionar
    // e controlar estados dentro de componentes funcionais

    // Aqui foi criado um estado chamado 'counter', com valor inicial 0
    // A função 'setCounter' é usada pra atualizar esse valor
    const [counter, setCounter] = useState(0)

    // Função pra incrementar o contador em 1
    const increment = () => {
        // É utilizado o valor anterior do estado (prevState) pra garantir que sempre vamos
        // trabalhar com o dado mais atualizado, evitando comportamentos inesperados
        setCounter((prevState) => prevState + 1)
    }

    // Função pra decrementar o contador em 1
    const decrement = () => {
        // Mesma lógica do incremento: atualiza com base no valor anterior
        setCounter((prevState) => prevState - 1)
    }

    return (
        <>
            {/* Exibe o valor atual do contador na tela */}
            <p>{counter}</p>
            <div style={{ display: "flex", gap: "4px" }}>
                {/* Botão que chama a função de incremento quando clicado */}
                <button onClick={increment}>+</button>
                {/* Botão que chama a função de decremento quando clicado */}
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counter