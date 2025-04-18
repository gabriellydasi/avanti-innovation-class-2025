import React from 'react'

// const TextComponent = (props) => {
//     return (
//         <>
//         {/* <h1>Texto do meu componente</h1> */}

//         <h1>{props.text}</h1>
//         {/* Torna o conteúdo do elemento dinâmico */}

//         <p>{props.description}</p>
//         </>
//     )
// }

// Outra forma de escrever, de maneira desestruturada e mais simples
const TextComponent = ({text, description}) => {
    return (
        <>
        {/* <h1>Texto do meu componente</h1> */}

        <h1>{text}</h1>
        {/* Torna o conteúdo do elemento dinâmico */}

        <p>{description}</p>
        </>
    )
}

export default TextComponent