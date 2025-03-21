import './Cart.css'
import { useCart } from '../../../context/CartContext'; 

const Cart = () => {
    const { cartItems, updateQuantity, removeProduct, isCartOpen, toggleCart } = useCart();
    
    if (!isCartOpen) return null;

    const total = cartItems && Object.keys(cartItems).length > 0
    ? Object.values(cartItems)
        .filter(item => item.price !== undefined)
        .reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)
        .toFixed(2)
    : "0.00";
    console.log(cartItems);
    console.log("Object.entries(cartItems):", Object.entries(cartItems));
    return (
        <div className="cart-container">
            <div className="superior-container">
            <button className="close-btn" onClick={toggleCart}>
                <img src="/img/close-icon.png" alt="close-icon" className="close-cart" />
            </button>
            <h2 className="title">Mi cesta</h2>
            {cartItems && Object.keys(cartItems).length > 0 ? (
              Object.entries(cartItems).map(([name, item]) => (
                <div key={name} className="product-container">
                  <div className="product-details">
                    <h3 className="toy-name">{name}</h3>
                    <h3 className="toy-price">{item.price?.toFixed(2)}€</h3>
                  </div>
                  <div className="quantity-container">
                    <div className="quantity-selection">
                      <button className="decrease" onClick={() => updateQuantity(name, -1)}>-</button>
                      <p className="quantity">{item.quantity}</p>
                      <button onClick={() => updateQuantity(name, 1)}>+</button>
                    </div>
                    <div className="delete-product">
                      <button className="delete-btn" onClick={() => removeProduct(name)}>
                        <img src="/img/delete-icon.png" alt="delete-icon" className="delete-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>El carrito está vacío</p>
            )}
                        </div>
                        <h3 className="total">Total: {total}€</h3>
                    </div>
    );
}

export default Cart;