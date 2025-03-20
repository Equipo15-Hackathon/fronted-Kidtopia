import './Header.css'
import { useCart } from '../../context/CartContext'
import Searcher from "./Searcher/Searcher.jsx";
import { Link } from 'react-router-dom';

const Header = () => {
    const { toggleCart } = useCart();

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/home" className="home-button">
                    <img src="/img/logo.png" alt="logo" className="logo" />
                    KidTopia
                </Link>
                <Link to="/catalog">
                    <p className="catalog">Catálogo</p>
                </Link>
            </div>
            <div className="right-section">
                <button className="searcher-button">
                    <Searcher />
                </button>
                <button className="cart-button" onClick={toggleCart}>
                    <img src="/img/cart.png" alt="cart-icon" className="cart-icon" />
                </button>
            </div>
        </div>
    )
}

export default Header;