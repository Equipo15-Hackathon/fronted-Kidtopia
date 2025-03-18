import React from "react";
import { useState, useEffect } from "react";
import ImageCarousel from "../components/Carousel/Carousel";

export default function Product() {
  const [productName, setProductName] = useState(" ");
  const [images, setImages] = useState(" ");

  useEffect(() => {
    setProductName("Juguete 1");

    // Test Images
    setImages([
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDgwNjE1fGltYWdlL2pwZWd8YUdSakwyaG1NeTh4TmpneE5ERTBNalU0TmpreE1BfGVkNzQ0OWE5MjIwN2U3MzIxMmFhOWI5YTliMTk4NTk4NTU2N2FiZDMyNzg5ODZmMmUzMTJjZjc0OTEwYWRkNmE",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDc0Nzc5fGltYWdlL2pwZWd8YURZMUwyZzFOeTh4TmpneE5ERXpOemcyT0RNeE9BfGY2NWU0Y2Q2OTJlMDk1MTQ5ZWExYWUxNTMzNDVkMjljNjEzYTg1MmI0MzU4Mjc2ZjFjYTdhM2ExZmU2N2ZlM2U",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDkzNDg5fGltYWdlL2pwZWd8YUdVMkwyaGxNaTh4TmpneE5ERXpPVFEwTVRFNE1nfDBiMjVlN2MyNWJjZTkxOWNmYjQ1YzZkNjM4OGE1NWE3Mjg5MmNlOWQxNmRkZWNkZDk0NzMwYjM2NDUxMWI5MDE",
      "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDE5NDB8aW1hZ2UvanBlZ3xhRFJsTDJnNU55OHhOamd4TkRFME1USXhNRFkxTkF8ZTMwYzgxZGMyNjdhNjgyYTg2MDI2YWRmNzM0MjQzZjIyZTNlNjI5YjAwZmM5NjZiYWEzZWQ0NTc2ZjY3NmIzZA"
    ]);
  }, []);

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
    <div className="main-div">
      <div className="main-left">
        <ImageCarousel images={images} />
      </div>
      <div className="main-right">
        <h1>{productName}</h1>
      </div>
    </div>
  );
}
