

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import About from './About'
import GamePage from './gamePage'
import Navbar from './navbar'
import Step1 from './step1'
import Step5 from './step5'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <Step1 />
    <Step5/>
    <GamePage />
  </StrictMode>,
)



