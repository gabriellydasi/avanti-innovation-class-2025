import { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  // Estado para armazenar e atualizar o horário atual
  
  useEffect(() => {
    // Cria um intervalo que atualiza o horário a cada segundo (1000ms)
    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)
    
    // Função de limpeza: remove o intervalo quando o componente é desmontado
    // Isso prevaz vazamentos de memória e garante que o temporizador
    // não continue rodando após o componente sair da tela
    return () => clearInterval(timer)
  }, [])

  return (
    <h2>Hora Atual: {time}</h2>
  )
}

export default Clock