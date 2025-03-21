import './CatalogView.css';
import { useState } from 'react';
import { toys } from '../../services/temporal/localProducts';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';
import { useFilters } from '../../hooks/useFilters';
import SideBar from '../../components/Sidebar/Sidebar';
import Cart from "../../components/Header/Cart/Cart";
import { useProducts } from '../../hooks/useProducts';

const CatalogView = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { products, loading, error } = useProducts();  

  const { filteredProducts, filterProducts, resetFilters } = useFilters(toys);
  const productsToDisplay = selectedCategory
    ? filteredProducts.filter(toy => toy.category === selectedCategory)
    : filteredProducts;

  return (
    <div className={`catalog-view ${open ? "sidebar-open" : ""}`}>
        <Cart />         
      <button className={`categories-button ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        {open ? "☰" : "☰ Categorías"}
      </button>

      <SideBar open={open} setOpen={setOpen} setSelectedCategory={setSelectedCategory} />

      <div className="catalog-container">
        <h1 className="category-title">{selectedCategory || "Todos"}</h1>
        <Filter filterProducts={filterProducts} resetFilters={resetFilters} />

        <div className="products-container">
        {(productsToDisplay.length > 0 ? productsToDisplay : toys).map((toy) => (
          <ProductCard key={toy.id || toy.name} {...toy} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogView;
