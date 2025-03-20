import './CartButton.css'
import { useCart } from '../../../context/CartContext';

export const CartButton = ({ name, price }) => {

     const { addProduct } = useCart();

    return (
        <button className="CartButton" onClick={() => addProduct(name, price)}>Añadir a la cesta</button>
    )
}