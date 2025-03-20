import './Cart.css'
import { useCart } from '../../../context/CartContext'; 

export const Cart = () => {
    const { cartItems, updateQuantity, removeProduct, isCartOpen, toggleCart } = useCart();
    
    if (!isCartOpen) return null;

    const total = Object.values(cartItems).length
    ? Object.values(cartItems).reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    : "0.00";

    return (
        <div className="cart-container">
            <h2 className="title">Mi cesta</h2>
            <button className="close-btn" onClick={toggleCart}>
                <img src="/img/close-icon.png" alt="close-icon" className="close-cart" />
            </button>
            {Object.entries(cartItems).map(([name, { price, quantity }]) => (
                <div key={name} className="product-container">
                    <div className="product-details">
                        <h3 className="toy-name">{name}</h3>
                        <h3 className="toy-price">{price.toFixed(2)}€</h3>
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-selection">
                            <button className="decrease" onClick={() => updateQuantity(name, -1)}>-</button>
                            <p className="quantity">{quantity}</p>
                            <button onClick={() => updateQuantity(name, 1)}>+</button>
                        </div>
                        <div className="delete-product">
                            <button className="delete-btn" onClick={() => removeProduct(name)}>
                                <img src="/img/delete-icon.png" alt="delete-icon" className="delete-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <h3 className="total">Total: {total}€</h3>
        </div>
    );
}