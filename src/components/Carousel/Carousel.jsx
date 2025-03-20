import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {Array.isArray(images) && images.length > 0 ? (
          images.map((img, index) => (
            <div className="images-container" key={index}>
              <img
                className="image-display"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <p>No hay imágenes disponibles</p>
        )}
      </Slider>
    </div>
  );
}
