import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './pages/Product';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
  </StrictMode>,
)
