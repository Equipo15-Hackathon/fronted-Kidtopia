import React from "react";
import { useState, useEffect } from "react";
import ImageCarousel from "../../components/Carousel/Carousel";
import CartButton from "../../components/ProductCard/CartButton/CartButton.jsx"
import "./ProductView.css";

export default function ProductView() {
  const [productName, setProductName] = useState("");
  const [images, setImages] = useState([]);
  const [brand, setBrand] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [activeTab, setActiveTab] = useState("descripcion");

  const brandHeader = "Fabricante: ";
  const ageHeader = "Edad Recomendada: ";
  const descriptionHeader = "Descripción";
  const featuresHeader = "Características Técnicas";

  useEffect(() => {
    //test data
    setProductName("Juguete 1");
    setImages([
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDgwNjE1fGltYWdlL2pwZWd8YUdSakwyaG1NeTh4TmpneE5ERTBNalU0TmpreE1BfGVkNzQ0OWE5MjIwN2U3MzIxMmFhOWI5YTliMTk4NTk4NTU2N2FiZDMyNzg5ODZmMmUzMTJjZjc0OTEwYWRkNmE",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDc0Nzc5fGltYWdlL2pwZWd8YURZMUwyZzFOeTh4TmpneE5ERXpOemcyT0RNeE9BfGY2NWU0Y2Q2OTJlMDk1MTQ5ZWExYWUxNTMzNDVkMjljNjEzYTg1MmI0MzU4Mjc2ZjFjYTdhM2ExZmU2N2ZlM2U",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDkzNDg5fGltYWdlL2pwZWd8YUdVMkwyaGxNaTh4TmpneE5ERXpPVFEwTVRFNE1nfDBiMjVlN2MyNWJjZTkxOWNmYjQ1YzZkNjM4OGE1NWE3Mjg5MmNlOWQxNmRkZWNkZDk0NzMwYjM2NDUxMWI5MDE",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDE5NDB8aW1hZ2UvanBlZ3xhRFJsTDJnNU55OHhOamd4TkRFME1USXhNRFkxTkF8ZTMwYzgxZGMyNjdhNjgyYTg2MDI2YWRmNzM0MjQzZjIyZTNlNjI5YjAwZmM5NjZiYWEzZWQ0NTc2ZjY3NmIzZA",
    ]);
    setBrand("Hasbro.");
    setAge("de 5 a 12 años.");
    setDescription(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    );
    setFeatures(
      "<b>Dimensiones:</b> 30 cm.<br><b>Material:</b> Plástico de alta calidad.<br><b>No requiere baterías.</b>"
    );
  }, []);

  return (
    <div className="main-div">
      <div className="main-left">
        <ImageCarousel images={images} />
      </div>
      <div className="main-right">
        <div className="content">
          {" "}
          <h1>
            <strong>{productName}</strong>
          </h1>
          <p className="brand">
            <strong>{brandHeader}</strong>
            {brand}
          </p>
          <p className="recommended-age">
            <strong>{ageHeader}</strong> {age}
          </p>
          <CartButton />
          <div className="tabs">
            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("descripcion")}
            >
              {descriptionHeader}
            </button>
            <button
              className={activeTab === "features" ? "active" : ""}
              onClick={() => setActiveTab("caracteristicas")}
            >
              {featuresHeader}
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "descripcion" ? (
              <p>{description}</p>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: features }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
