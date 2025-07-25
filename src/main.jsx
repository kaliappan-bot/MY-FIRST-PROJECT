import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Hello as Jagananthan, App as Gowri} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jagananthan />
    <Gowri />
  </StrictMode>,
)
