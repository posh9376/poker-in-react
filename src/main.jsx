

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import About from './About'
import GamePage from './gamePage'
import Navbar from './navbar'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <GamePage />
  </StrictMode>,
)



