import React from 'react'
import { useAuth } from './AuthContext'

const Login = () => {
    const { user, login, logout } = useAuth()

    return (
        <div>
            {user ? (
                <>
                    <h2>Bem vindo, {user.name}!</h2>
                    <button onClick={logout}>Sair</button>
                </>
            ) : (
                <>
                    <h2>Você não está logado!</h2>
                    <button onClick={() => login("Gabrielly")}>Entrar</button>
                </>
            ) }
        </div>    
    )
}

export default Login