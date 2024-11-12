
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import About from './About'
import GamePage from './gamePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <About />
    <GamePage />
  </StrictMode>,
)

