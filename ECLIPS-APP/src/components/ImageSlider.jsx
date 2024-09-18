import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./pages/ImaginiSlider";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./ImageSlider.css";

function ImageSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div
        id="ComingSoon"
        className="surface-border border-round m-2 text-center py-5 px-3"
      >
        <div className="slider-container">
          <img
            src={`../../src/assets/img/${product.image}`}
            alt={product.name}
            className="slider-image"
          ></img>
          <div className="buy-container">
            <Link to={`/product/${product.id}`}>
              <Button label="PROSSIMAMENTE" className="btn-buy"></Button>
            </Link>
            <Button label="Trailer" className="btn-trailer"></Button>
          </div>
        </div>
        <a className="coming-title">{product.name}</a>
      </div>
    );
  };

  // const responsiveOptions = [
  //   {
  //     breakpoint: "1200px",
  //     numVisible: 4,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "1024px",
  //     numVisible: 3,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "768px",
  //     numVisible: 2,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "576px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  // ];

  return (
    <div className=" flex justify-content-center">
      <Carousel
        showIndicators={false}
        value={products}
        numVisible={4}
        numScroll={1}
        // responsiveOptions={responsiveOptions}
        orientation="horizontal"
        verticalViewPortHeight="360px"
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export default ImageSlider;
