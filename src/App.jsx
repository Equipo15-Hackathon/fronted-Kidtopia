import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { Header } from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import CatalogView from './views/CatalogView/CatalogView'
function App() {


  return (
    <CartProvider>
      <Header />
      <Cart />
      <CatalogView />           
    </CartProvider>
  )
}

export default App;