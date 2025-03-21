import { useState, useEffect } from "react";
import { productsRequest} from "../../services/api/products";
import {ProductCard} from "../../components/ProductCard/ProductCard";
import "./HomeView.css";

const HomeView = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productsRequest.getProducts();
            if (data) {
                setFeaturedProducts(data.slice(0, 4));
            }
        };
        fetchProducts();
    }, []);

    const images = [
        "/img/banner.png",
        "/img/banner2.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="home-container">
            <section className="banner">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <img src={images[currentIndex]} alt="Banner" className="banner-img" />
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </section>

            <section className="featured-products">
                <h2 className="section-title">Destacados</h2>
                <div className="products-container">
                    {featuredProducts.map((product) => (
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
