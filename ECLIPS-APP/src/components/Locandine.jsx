import "./Locandine.css";
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

function Locandine({ title, copertina , id }) {
  return (
    <div className="film-item">
      <div className="image-container">
        <img src={copertina} alt=""></img>
        <div className="buttons-buy-container">
          <Link to={`/Filmdescrizione/${id}`}>
          <Button label="ACQUISTA ORA" className="btn-buy" ></Button>
          </Link>
          <Button label="Trailer" className="btn-trailer" ></Button>
         
        </div>
      </div>
      <a className="title-film"> {title}</a>
    </div>
  );
}
export default Locandine;
