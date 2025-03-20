import './App.css'
import  Cart from './components/Header/Cart/Cart'
import  Header from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <CartProvider>   
      <Router>
        <Header />
        <Cart />            
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>           
   </CartProvider>
  )
}

export default App;