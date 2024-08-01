import "./Locandine.css";
import React, { useState, useEffect } from "react";
import Button from "./Button";

function Locandine({ title, copertina }) {
  return (
    <div className="film-item">
      <div className="image-container">
        <img src={copertina} alt=""></img>
        <div className="buttons-buy-container">
          <Button text="ACQUISTA ORA" cssClass={"btn-buy"} />
          <Button text="Vedi Trailer" cssClass={"btn-trailer"} />
        </div>
      </div>
      <a className="title-film"> {title}</a>
    </div>
  );
}
export default Locandine;
