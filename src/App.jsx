import './App.css';
import { Cart } from './components/Header/Cart/Cart';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeView } from './pages/HomeView';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<HomeView />} />
                </Routes>

                <Cart />
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;

