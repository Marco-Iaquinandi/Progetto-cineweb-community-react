import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./pages/ImaginiSlider";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import VideoPopup from "./VideoPopups"; 
import "./ImageSlider.css";
import Popup from "./Popup";

function ImageSlider() {
  const [products, setProducts] = useState([]);
  const [showVideo, setShowVideo] = useState(false); 
  const [selectedVideo, setSelectedVideo] = useState(""); 
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  }, []);

  
  const handleTrailerClick = (videoUrl) => {
    setSelectedVideo(videoUrl); 
    setShowVideo(true); 
  };

  const handleInfoClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };
  
  const productTemplate = (product) => {
    return (
      <div id="ComingSoon" className="surface-border border-round m-2 text-center py-5 px-3">
        <div className="image-container">
          <img
            src={`../../src/assets/img/${product.image}`}
            alt={product.name}
            className="slider-image"
          ></img>
              <Button label="i" className="btn-info" onClick={() => handleInfoClick(product)} />
          <div className="buttons-buy-container">
            <Link to={`/product/${product.id}`}>
              <Button label="ACQUISTA ORA" className="btn-buy"></Button>
            </Link>
         
            <Button
              label="Trailer"
              className="btn-trailer"
              onClick={() => handleTrailerClick(product.trailerUrl)} 
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-content-center">
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

      {showVideo && (
        <VideoPopup
          videoSrc={selectedVideo} 
          onClose={() => setShowVideo(false)} 
        />
      )}

      {showPopup && selectedProduct && (
      <Popup
        title={selectedProduct.name}
        genere={selectedProduct.genre}
        durata={selectedProduct.duration}
        autore={selectedProduct.author}
        descrizione={selectedProduct.description}
        distribuzione={selectedProduct.distribution}
        onClose={() => setShowPopup(false)}
      />
    )}
    </div>
  );
}

export default ImageSlider;

