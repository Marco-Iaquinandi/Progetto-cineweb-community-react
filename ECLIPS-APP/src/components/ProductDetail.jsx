import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ProductService } from "./pages/ImaginiSlider";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductService.getProducts().then((data) => {
      const foundProduct = data.find((product) => product.id === id);
      setProduct(foundProduct);
    });
  }, [id]);

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="film-background">
      <div className="film-content">
        <div className="film-container">
          <h1 className="page-title">SCHEDA DEL FILM</h1>
          <img
            src={`../../src/assets/img/${product.image}`}
            alt={product.name}
            className="film-image"
          />
          <div className="film-details">
            <h2 className="film-title">{product.name}</h2>
            <p className="film-description">{product.description}</p>
            <p className="film-genre">
              <strong>Genere:</strong> {product.genre}
            </p>
            <p className="film-duration">
              <strong>Durata:</strong> {product.duration}
            </p>
            <p className="film-author">
              <strong>Regista:</strong> {product.quantity}
            </p>
            <p className="film-distribution">
              <strong>Distribuzione:</strong> {product.distribution}
            </p>
            <p className="film-times">
              <strong>Orari:</strong> {product.times}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
