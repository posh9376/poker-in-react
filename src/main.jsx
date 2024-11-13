

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import About from './About'
import GamePage from './gamePage'
import Navbar from './navbar'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <Step1 />
    <Step2/>
    <Step3 />
    <Step4/>
    <GamePage />
  </StrictMode>,
)



