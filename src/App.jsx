import './App.css'
import { Cart } from './components/Header/Cart/Cart'
import { ProductCard } from './components/ProductCard/ProductCard'
import { CartProvider } from './context/CartContext'
function App() {
  const products = [
    { name: "Muñeca", price: 10.99, image: "/img/doll.png" },
    { name: "Carro", price: 15.50, image: "/img/cart-toy.png" },
    { name: "Coche", price: 19.99, image: "/img/car.png", }
];

  return (

    <CartProvider>
      <Cart />          
      <div className="catalog-view">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </CartProvider>
  )
}

export default App
