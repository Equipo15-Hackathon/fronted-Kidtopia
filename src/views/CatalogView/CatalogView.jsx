import './CatalogView.css';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filters/Filter';
import { useFilters } from '../../../hooks/useFilters';
import SideBar from '../../components/SideBar/SideBar';
import { categoriesRequest } from '../../services/api/categories';
import { productsRequest } from '../../services/api/products';

const CatalogView = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categoriesRequest.getCategories()
      .then(data => setCategories(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    productsRequest.getProducts()
      .then(data => setProducts(data.map(({ id, name, price, image, category_id }) => ({ id, name, price, image, category_id }))))
      .catch(console.error);
  }, []);

  const { filteredProducts, filterProducts, resetFilters } = useFilters(products);
  
  console.log("Selected Category:", selectedCategory, typeof selectedCategory);
  console.log("Categories:", categories);
  console.log("Products:", products);
  console.log("Product Categories:", products.map(p => p.category_id), typeof products[0]?.category_id);
  console.log("Filtered Products Before Filter:", products);
  console.log("Filtered Products After Filter:", products.filter(product => Number(product.category_id) === Number(selectedCategory)));

  const productsToDisplay = selectedCategory
    ? products.filter(product => Number(product.category_id) === Number(selectedCategory))
    : products;

  return (
    <div className={`catalog-view ${open ? "sidebar-open" : ""}`}>
      <button className={`categories-button ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        {open ? "☰" : "☰ Categorías"}
      </button>

      <SideBar 
        open={open} 
        setOpen={setOpen} 
        setSelectedCategory={(id) => setSelectedCategory(Number(id))} 
        categories={categories.map(cat => ({ id: cat.id, name: cat.name }))} 
      />

      <div className="catalog-container">
        <h1 className="category-title">{selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.name : "Todos"}</h1>
        <Filter filterProducts={filterProducts} resetFilters={resetFilters} />

        <div className="products-container">
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatalogView;
