import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/Counter'

function App() {


  return (
    <>
      <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Contador</h1>
        <Counter />
      </section>  

      <section>
        <h2>Meu Component CSS</h2>
        <MyCSSComponent />
      </section>

      <section>
        <h2>Eventos</h2>
        <Events />
      </section>

      <section>
        <TextComponent text="Meu Primeiro Texto" description="Descricao do primeiro texto"/>
        <TextComponent text="Meu Segundo Texto" description="Descricao do segundo texto"/>
        <TextComponent text="Meu Terceiro Texto" description="Descricao do terceiro texto"/>
      </section>

      <section>
        <SecondText />
        <ThirdText />
      </section>
      
    </>
  )
}

export default App
