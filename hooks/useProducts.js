import { useEffect, useState } from "react";
import { productsRequest } from "../src/services/api/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await productsRequest.getProducts();
      if (data) {
        setProducts(data);
      } else {
        setError("Error al cargar productos.");
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
