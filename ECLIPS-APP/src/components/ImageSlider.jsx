import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./pages/ImaginiSlider";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./ImageSlider.css";

function ImageSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  }, []);

  const productTemplate = (product) => {
    return (
      <div
        id="ComingSoon"
        className="surface-border border-round m-2 text-center py-5 px-3"
      >
        <div className="image-container">
          <img
            src={`../../src/assets/img/${product.image}`}
            alt={product.name}
            className="slider-image"
          ></img>
          <div className="buttons-buy-container">
            <Link to={`/product/${product.id}`}>
              <Button label="ACQUISTA ORA" className="btn-buy"></Button>
            </Link>
            <Button label="Trailer" className="btn-trailer"></Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Carousel
        showIndicators={false}
        value={products}
        numVisible={4}
        numScroll={1}
        orientation="horizontal"
        verticalViewPortHeight="360px"
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export default ImageSlider;
