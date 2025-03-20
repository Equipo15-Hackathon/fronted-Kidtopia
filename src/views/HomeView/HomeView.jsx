import { useState } from "react";
import "./HomeView.css";
import Cart from "../../components/Header/Cart/Cart";

const HomeView = () => {

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
        <Cart />        
            <section className="banner">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <img src={images[currentIndex]} alt="Banner" className="banner-img" />
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </section>


            <section className="featured-products">
                <h2 className="section-title">Destacados</h2>
                <div className="products-container">
                    <div className="product-card">
                        <img src="/img/bloques.png" alt="Set Bloques Magnéticos" />
                        <p>Set Bloques Magnéticos</p>
                    </div>

                    <div className="product-card">
                        <img src="/img/dinosaurio.png" alt="Figuras Dinosaurios Táctiles" />
                        <p>Figuras Dinosaurios Táctiles</p>
                    </div>

                    <div className="product-card">
                        <img src="/img/slime.png" alt="Laboratorio de Slime" />
                        <p>Laboratorio de Slime</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeView;