import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { CartProvider } from './context/CartContext'
function App() {


  return (
    <CartProvider>
      <Cart />           
    </CartProvider>
  )
}

export default App
