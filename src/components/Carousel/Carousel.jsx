import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div
      className="carousel-container"
      style={{ width: "85%", margin: "0 auto" }}
    >
      <Slider {...settings}>
        {Array.isArray(images) && images.length > 0 ? (
          images.map((img, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  maxHeight: "80vh",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
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
