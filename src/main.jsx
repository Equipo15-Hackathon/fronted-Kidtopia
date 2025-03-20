import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactView from './views/ContactView/ContactView.jsx'
import TestApi from "./services/api/testApi.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestApi />
  </StrictMode>,
)
