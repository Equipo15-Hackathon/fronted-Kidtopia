import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { Header } from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    
    <Router>
    <Routes>
    <CartProvider>
      <Header />
      <Cart />            
      <Footer />
   </CartProvider>
   </Routes>
   </Router>           
    
  )

const Contact = () => <h1>Formulario de Contacto (Próximamente)</h1>;
}

export default App;