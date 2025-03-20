import './CatalogView.css';
import { useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';
import { useFilters } from '../../../hooks/useFilters';
import SideBar from '../../components/SideBar/SideBar';

const CatalogView = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = [
    { category: "Muñecas y Figuras de Acción", name: "Muñeca", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
    { category: "Juegos de Mesa", name: "Carro", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
    { category: "Vehículos y Pistas", name: "Coche", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Fisher-Price" },
    { category: "Juegos de Construcción", name: "Patata", price: 10.99, image: "/img/doll.png", ageRange: "9-12 años", brand: "Lego" },
    { category: "Juguetes Educativos", name: "Patata1", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Playmobil" },
    { category: "Juguetes Electrónicos", name: "Patata2", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Barbie" },
    { category: "Peluches y Marionetas", name: "Patata3", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
    { category: "Arte y Manualidades", name: "Patata4", price: 15.50, image: "/img/cart-toy.png", ageRange: "9-12 años", brand: "Hasbro" },
    { category: "Instrumentos Musicales", name: "Patata5", price: 19.99, image: "/img/car.png", ageRange: "6-8 años", brand: "Playmobil" },
    { category: "Muñecas y Figuras de Acción", name: "Patata6", price: 10.99, image: "/img/doll.png", ageRange: "3-5 años", brand: "Mattel" },
    { category: "Muñecas y Figuras de Acción", name: "Patata7", price: 15.50, image: "/img/cart-toy.png", ageRange: "0-2 años", brand: "Hasbro" },
    { category: "Muñecas y Figuras de Acción", name: "Patata8", price: 19.99, image: "/img/car.png", ageRange: "9-12 años", brand: "Fisher-Price" },
  ];

  const { filteredProducts, filterProducts, resetFilters } = useFilters(products);
  const productsToDisplay = selectedCategory
    ? filteredProducts.filter(product => product.category === selectedCategory)
    : filteredProducts;

  return (
    <div className={`catalog-view ${open ? "sidebar-open" : ""}`}>
      {/* Sidebar button */}
      <button className="sidebar-toggle-button" onClick={() => setOpen(!open)}>
        {/* At your choice */}
        ☰ Categorías
      </button>

      <SideBar open={open} setOpen={setOpen} setSelectedCategory={setSelectedCategory} />

      <div className="catalog-container">
        <h1 className="category-title">{selectedCategory || "Todos"}</h1>
        <Filter filterProducts={filterProducts} resetFilters={resetFilters} />

        <div className="products-container">
          {productsToDisplay.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogView;
