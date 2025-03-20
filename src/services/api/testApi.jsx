import React, { useState } from "react";
import { productsRequest } from "./products";
import { brandsRequest } from "./brands";
import { categoriesRequest } from "./categories";

const TestApi = () => {
  const [response, setResponse] = useState(null);

  // Función para manejar las peticiones
  const handleRequest = async (requestFunction) => {
    try {
      const data = await requestFunction();
      setResponse(data);
    } catch (error) {
      console.error("Error en la petición:", error);
      setResponse(error.message);
    }
  };

  return (
    <div>
      <h2>Prueba de API</h2>

      {/* Productos */}
      <h3>Productos</h3>
      <button onClick={() => handleRequest(productsRequest.getProducts)}>GET Products</button>
      
      <button
        onClick={() =>
          handleRequest(() =>
            productsRequest.createProduct({
              name: "Producto de Prueba",
              description: "Descripción del producto de prueba",
              price: 19.99,
              stock: 50,
              image: "https://via.placeholder.com/150",
              category_id: 1, // Asegúrate de que esta categoría exista en la DB
              brand_id: 1, // Asegúrate de que esta marca exista en la DB
              age_range_id: 1, // Asegúrate de que este rango de edad exista en la DB
            })
          )
        }
      >
        POST Product
      </button>

      <button onClick={() => handleRequest(() => productsRequest.updateProduct(1, { name: "Producto Actualizado" }))}>PUT Product</button>
      <button onClick={() => handleRequest(() => productsRequest.deleteProduct(1))}>DELETE Product</button>

      {/* Marcas */}
      <h3>Marcas</h3>
      <button onClick={() => handleRequest(brandsRequest.getBrands)}>GET Brands</button>
      <button onClick={() => handleRequest(() => brandsRequest.createBrand({ name: "Nueva Marca" }))}>POST Brand</button>
      <button onClick={() => handleRequest(() => brandsRequest.updateBrand(1, { name: "Marca Actualizada" }))}>PUT Brand</button>
      <button onClick={() => handleRequest(() => brandsRequest.deleteBrand(1))}>DELETE Brand</button>

      {/* Categorías */}
      <h3>Categorías</h3>
      <button onClick={() => handleRequest(categoriesRequest.getCategories)}>GET Categories</button>
      <button onClick={() => handleRequest(() => categoriesRequest.createCategory({ name: "Nueva Categoría" }))}>POST Category</button>
      <button onClick={() => handleRequest(() => categoriesRequest.updateCategory(1, { name: "Categoría Actualizada" }))}>PUT Category</button>
      <button onClick={() => handleRequest(() => categoriesRequest.deleteCategory(1))}>DELETE Category</button>

      {/* Área de respuesta */}
      <h3>Respuesta:</h3>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default TestApi;
