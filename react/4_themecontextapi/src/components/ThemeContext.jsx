import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()
// Criando o contexto. Ele vai permitir que a gente compartilhe dados (tipo tema claro/escuro)
// com vários componentes sem precisar ficar passando por props (evitando props drilling)

export const ThemeProvider = ({ children }) => {
// Esse componente é o provedor do tema. Ele envolve a aplicação e fornece os dados do contexto.
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    // Retorna o Provider do contexto, que vai "envolver" os componentes filhos
    // O value contém os dados que queremos compartilhar: o estado atual do tema e a função de alternar
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook personalizado pra facilitar o uso do contexto
// Com ele, em vez de escrever useContext(ThemeContext) direto, a gente só chama useTheme()
export const useTheme = () => {
    const context = useContext(ThemeContext)
    // Aqui usamos o hook useContext pra pegar o valor atual do ThemeContext

    // Se alguém tentar usar esse hook fora do ThemeProvider, vai dar erro
    // Isso ajuda a evitar bugs 
    if (!context) {
        throw new Error("userTheme deve ser usado com o ThemeProvider")
    }

    // Retorna o que está dentro do value do Provider: o tema e a função de alternar
    return context
}
