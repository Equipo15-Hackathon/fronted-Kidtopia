import './ProductCard.css'
import { CartButton } from "./CartButton/CartButton"

export const ProductCard = ({ name, price, image }) => {

    return (
        <div className="product-card">
            <img src={image} alt={name} className="toy-img" />
            <p className="name">{name}</p>
            <p className="price"> {price}€</p>
            <CartButton name={name} price={price} />
        </div>
    );
};