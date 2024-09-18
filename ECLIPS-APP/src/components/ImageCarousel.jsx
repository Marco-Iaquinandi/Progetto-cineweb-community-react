// import React, { useState, useEffect } from "react";
// import { Carousel } from "primereact/carousel";
// import { ProductService } from "./pages/ImmaginiCarousel";
// import "./ImageCarousel.css";

// function ImageCarousel() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ProductService.getProductsSmall().then((data) =>
//       setProducts(data.slice(0, 9))
//     );
//   }, []);

//   const productTemplate = (product) => {
//     return (
//       <div className="carousel-item">
//         <img
//           src={`../../src/assets/img/${product.image}`}
//           alt={product.name}
//           className="carousel-image"
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="carousel-adjust flex justify-content-center ">
//       <Carousel
//         value={products}
//         numVisible={1}
//         numScroll={1}
//         orientation="horizontal"
//         autoplayInterval={3000}
//         itemTemplate={productTemplate}
//         headerTemplate={<div className="carousel-header"></div>}
//         footerTemplate={<div className="carousel-footer"></div>}
//       />
//     </div>
//   );
// }

// export default ImageCarousel;

import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./pages/ImmaginiCarousel";
import "./ImageCarousel.css";

function ImageCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="carousel-item">
        <img
          src={`../../src/assets/img/${product.image}`}
          alt={product.name}
          className="carousel-image"
        />
      </div>
    );
  };

  return (
    <div className="carousel-adjust flex justify-content-center">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        orientation="horizontal"
        autoplayInterval={3000}
        itemTemplate={productTemplate}
        headerTemplate={<div className="carousel-header"></div>}
        footerTemplate={<div className="carousel-footer"></div>}
      />
    </div>
  );
}

export default ImageCarousel;
