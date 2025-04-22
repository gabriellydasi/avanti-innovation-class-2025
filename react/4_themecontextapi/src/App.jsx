import React from 'react'

import { ThemeProvider, useTheme } from './components/ThemeContext'

import './App.css'
import Header from './components/Header'
import Content from './components/Content'

const ThemeApp = () => {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Content />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  )
}

export default App