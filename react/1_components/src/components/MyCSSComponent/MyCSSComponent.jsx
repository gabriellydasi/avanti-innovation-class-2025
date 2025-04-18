import React from 'react'

// Importando o arquivo de estilos CSS para o componente
// import './MyCSSComponent.module.css'

// Importando os estilos como um objeto usando CSS Modules
// Cada classe definida no CSS vira uma propriedade de 'styles'
import styles from './MyCSSComponent.module.css'

// Quando usamos CSS externo assim, pode rolar o risco de estilos vazarem
// e afetarem outros componentes que usam a mesma tag, tipo um <h1> por exemplo.

const MyCSSComponent = () => {

    // Criando um objeto com estilos inline (aplicados diretamente no elemento)
    const cssInline = {
        backgroundColor: "#000000", // fundo preto
        color: "#f00000",           // texto vermelho
        fontSize: "1.25rem",        // tamanho da fonte
        borderRadius: "8px",        // bordas arredondadas
        padding: "20px"             // espaço interno
    }

    return (
        <>
            {/* <h1>Meu título</h1> */}

            <h1 className={styles.title}>Meu título</h1>
            {/* 
                Usando a classe 'title' definida no CSS Module.
                Aqui, styles.title é como acessar a propriedade 'title' do objeto styles.
                Isso garante que o estilo fique escopado só pra esse componente,
                evitando que outros <h1> em outros arquivos sejam afetados 
            */}

            {/* Aplicando os estilos diretamente no parágrafo com o objeto 'cssInline' */}
            <p style={cssInline}>Meu Parágrafo</p>
        </>
    )
}

export default MyCSSComponent