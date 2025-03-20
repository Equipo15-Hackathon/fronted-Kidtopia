import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { Header } from './components/Header/Header'
import { CartProvider } from './context/CartContext'
function App() {


  return (
    <CartProvider>
      <Header />
      <Cart />
    </CartProvider>
  )
}

export default App
