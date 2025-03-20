import './Header.css'
import { useCart } from '../../context/CartContext'
import Searcher from "./Searcher/Searcher.jsx";

const Header = () => {
    const { toggleCart } = useCart();

    return (
        <div className="header">
            <div className="left-section">
                <button className="home-button">
                    <img src="/img/logo.png" alt="logo" className="logo" />
                    KidTopia
                </button>
                <p className="catalog">Catálogo</p>
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