import './CatalogView.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';
import { useFilters } from '../../../hooks/useFilters';

const CatalogView = () => {
  
    const products = [
        { name: "Muñeca", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
        { name: "Coche", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Fisher-Price" },
        { name: "Patataa", price: 10.99, image: "/img/doll.png", ageRange: "9-12 años", brand: "Lego" },
        { name: "Patata1", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Playmobil" },
        { name: "Patata2", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Barbie" },
        { name: "Patataa3", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Patata4", price: 15.50, image: "/img/cart-toy.png", ageRange: "9-12 años", brand: "Hasbro" },
        { name: "Patata5", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Playmobil" },
        { name: "Patataa6", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Patata7", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
        { name: "Patata8", price: 19.99, image: "/img/car.png", ageRange: "9-12 años", brand: "Fisher-Price" },

    ];

  const { filteredProducts, filterProducts, resetFilters } = useFilters(products);
  const categoryTitle = ["Juguetes"];
  
  return (
      <div className="catalog-view">
        <h1 className="category-title">{categoryTitle}</h1>
        <Filter filterProducts={filterProducts} resetFilters={resetFilters}/>
      
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
    </div>
  )
}

export default CatalogView;