import React, { useState } from 'react'

const ProductQuantity = () => {
    // useState aqui tá iniciando com um objeto que representa um produto
    // O estado 'product' tem duas propriedades: 'name' e 'quantity'
    const [product, setProduct] = useState({
        name: "Cadeira",
        quantity: 1
    })

    // Função para atualizar a quantidade do produto
    const updateQuantity = () => {
        setProduct((prevProduct) => ({
            // Fazemos uma cópia do objeto anterior usando o spread operator (...)
            ...prevProduct,

            // Alteramos só o valor da propriedade 'quantity'
            // Isso garante que o 'name' (e qualquer outra propriedade) continue igual
            quantity: prevProduct.quantity + 1
        }))
    }
    
    return (
        <>
            <p>Nome do Produto: {product.name}</p>
            <p>Quantidade do Produto: {product.quantity}</p>

            {/* Botão que, ao ser clicado, chama a função para aumentar a quantidade */}
            <button onClick={updateQuantity}>Aumentar Quantidade do Produto</button>
        </>
    )
}

export default ProductQuantity
