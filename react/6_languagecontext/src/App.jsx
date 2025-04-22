import { LanguageProvider } from './components/LanguageContext'
import Header from './components/Header'

import './App.css'

function App() {
    return (
      <>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </>
    )
}

export default App
