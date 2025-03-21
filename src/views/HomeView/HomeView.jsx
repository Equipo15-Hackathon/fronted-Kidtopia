import { useState, useEffect } from "react";
import "./HomeView.css";
import Cart from "../../components/Header/Cart/Cart";
import { productsRequest } from "../../services/api/products";
import { toys } from "../../services/temporal/localProducts";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const HomeView = () => {

    const images = [
        "/img/banner.png",
        "/img/banner2.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productsRequest.getProducts();
            if (data) {
                setFeaturedProducts(data.slice(0, 3));
            }
        };
        fetchProducts();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="home-container">
        <Cart />        
            <section className="banner">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <img src={images[currentIndex]} alt="Banner" className="banner-img" />
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </section>


            <section className="featured-products">
                <h2 className="section-title">Destacados</h2>
                <div className="products-container">
                {(featuredProducts.length > 0 ? featuredProducts.slice(0, 4) : toys).slice(0, 4).map((product) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                    </div>
            </section>
        </div>
    );
};

export default HomeView;