import './CatalogView.css';
import { useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';
import { useFilters } from '../../../hooks/useFilters';
import SideBar from '../../components/SideBar/SideBar';

const CatalogView = () => {
  const [open, setOpen] = useState(false);
    const products = [
        { name: "Muñeca", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Carro", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
        { name: "Coche", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Fisher-Price" },
        { name: "Patata", price: 10.99, image: "/img/doll.png", ageRange: "9-12 años", brand: "Lego" },
        { name: "Patata1", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Playmobil" },
        { name: "Patata2", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Barbie" },
        { name: "Patata3", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Patata4", price: 15.50, image: "/img/cart-toy.png", ageRange: "9-12 años", brand: "Hasbro" },
        { name: "Patata5", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Playmobil" },
        { name: "Patata6", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
        { name: "Patata7", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
        { name: "Patata8", price: 19.99, image: "/img/car.png", ageRange: "9-12 años", brand: "Fisher-Price" },

    ];

  const { filteredProducts, filterProducts, resetFilters } = useFilters(products);
  const categoryTitle = ["Juguetes"];
  
  return (
      <div className={`catalog-view ${open ? "sidebar-open" : ""}`}>
        <SideBar open={open} setOpen={setOpen}/>
        <div className="catalog-container">
          <h1 className="category-title">{categoryTitle}</h1>
          <Filter filterProducts={filterProducts} resetFilters={resetFilters}/>

          <div className="products-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default CatalogView;