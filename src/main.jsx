import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/canvas.css"
import "./styles/palette.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
  </StrictMode>,
)
