import './App.css'
import  Cart from './components/Header/Cart/Cart'
import  Header from './components/Header/Header'
import HomeView from './views/HomeView/HomeView';
import CatalogView from './views/CatalogView/CatalogView';
import ProductView from './views/ProductView/ProductView';
import { CartProvider } from './context/CartContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './views/ContactView/ContactView';
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <CartProvider>   
      <Router>
        <Header />
        <Cart />         
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/catalog" element={<CatalogView />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>           
   </CartProvider>
  )
}

export default App;