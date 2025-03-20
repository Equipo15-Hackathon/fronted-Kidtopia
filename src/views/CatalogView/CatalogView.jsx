import './CatalogView.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';

const CatalogView = () => {
    
    const products = [
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", },
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", },
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", },
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", },
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", },
        { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
        { name: "Coche", price: 19.99, image: "/img/car.png", }
    ];

    const categoryTitle = ["Juguetes", "Juegos", "Libros", "Peluches"];

    return (
        <div className="catalog-view">
          <h1 className="category-title">{categoryTitle}</h1>
          <Filter />
        
          <div className="products-container">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
      </div>
    )
}

export default CatalogView;