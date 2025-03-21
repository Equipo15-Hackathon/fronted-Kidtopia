import './ProductCard.css'
import CartButton from "./CartButton/CartButton"
import { Link } from 'react-router-dom'

export const ProductCard = ({ id, name, price, image }) => {

    return (
        <div className="product-card">
        <Link to={`/product/${id}`} className="product-card">
            <img src={image} alt={name} className="toy-img" />
            <p className="name">{name}</p>
            <p className="price">{price}€</p>
        </Link>
        <CartButton name={name} price={price} />
        </div>
    )
};