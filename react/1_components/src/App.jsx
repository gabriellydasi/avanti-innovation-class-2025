import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'

function App() {


  return (
    <>
      <TextComponent text="Meu Primeiro Texto" description="Descricao do primeiro texto"/>
      <TextComponent text="Meu Segundo Texto" description="Descricao do segundo texto"/>
      <TextComponent text="Meu Terceiro Texto" description="Descricao do terceiro texto"/>
      <SecondText />
      <ThirdText />
      
    </>
  )
}

export default App
