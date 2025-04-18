import React from 'react'

const MyCSSComponent = () => {

    // Construímos um objeto com as propriedades CSS 
    const cssInline = {
        backgroundColor: "#000000",
        color: "#f00000",
        fontSize: "1.25rem",
        borderRadius: "8px",
        padding: "20px"
    }

    return (
        <>
            {/* Passamos o objeto 'cssInline' como referência para a propriedade 'style'  */}
            <p style={cssInline}>Meu Parágrafo</p>
        </>
    )
}

export default MyCSSComponent