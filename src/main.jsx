import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameSide from './Compontents/gameSide'
import Game from './Compontents/explain'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameSide />
    <Game/>
  </StrictMode>,
)