import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './views/Product/ProductView';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
  </StrictMode>,
)
