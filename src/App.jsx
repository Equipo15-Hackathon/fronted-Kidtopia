import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { Header } from './components/Header/Header'
import { Searcher } from './components/Header/Searcher/Searcher'
import { CartProvider } from './context/CartContext'
function App() {


  return (
    <CartProvider>
      <Header />
      <Searcher />
      <Cart />           
    </CartProvider>
  )
}

export default App
