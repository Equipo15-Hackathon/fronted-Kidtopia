import './CartButton.css'
import { useCart } from '../../../context/CartContext';

const CartButton = ({ name, price }) => {

     const { addProduct } = useCart();

    return (
        <button className="add-cart-button" onClick={() => addProduct(name, price)}>Añadir a la cesta</button>
    )
}

export default CartButton;