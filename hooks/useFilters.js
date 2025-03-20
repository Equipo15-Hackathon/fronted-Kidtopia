import { useState } from "react";

export const useFilters = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({ ageRange: null, brand: null });


  const filterProducts = (ageRange, brand) => {
    setFilters({ ageRange, brand });

    let filtered = initialProducts;

    if (ageRange) {
      filtered = filtered.filter(product => product.ageRange === ageRange);
    }

    if (brand) {
      filtered = filtered.filter(product => product.brand === brand);
    }

    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilters({ ageRange: null, brand: null });
    setFilteredProducts(initialProducts);
  };

  return { filteredProducts, filterProducts, resetFilters };
};
