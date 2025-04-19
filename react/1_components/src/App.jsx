import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Events from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/Counter'
import ProductQuantity from './components/ProductQuantity'
import GithubUser from './components/GithubUser'

function App() {


  return (
    <>
      {/* Github User  */}
      <section>
        <h2>Usuário do Github</h2>
        <GithubUser />
      </section>

      {/* Controle de quantidade de produto  */}
      <section>
        <h2>Controle de Quantidade do Produto</h2>
        <ProductQuantity />
      </section>
      <hr />

      {/* Contador  */}
      <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Contador</h1>
        <Counter />
      </section>  
      <hr />

      {/* Textos  */}
      <section>
        <h2>Meu Component CSS</h2>
        <MyCSSComponent />
      </section>
      <hr />

      <section>
        <h2>Eventos</h2>
        <Events />
      </section>
      <hr />

      <section>
        <TextComponent text="Meu Primeiro Texto" description="Descricao do primeiro texto"/>
        <TextComponent text="Meu Segundo Texto" description="Descricao do segundo texto"/>
        <TextComponent text="Meu Terceiro Texto" description="Descricao do terceiro texto"/>
      </section>
      <hr />

      <section>
        <SecondText />
        <ThirdText />
      </section>
      
    </>
  )
}

export default App
