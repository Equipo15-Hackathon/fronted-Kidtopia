import './Header.css'
import { useCart } from '../../context/CartContext'

export const Header = () => {
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
                <button className="header-button">
                    <img src="/img/search.png" alt="search-icon" className="search-icon" />
                </button>
                <button className="header-button" onClick={toggleCart}>
                    <img src="/img/cart.png" alt="cart-icon" className="cart-icon" />
                </button>
            </div>
        </div>
    )
}