import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import Popup from "./Popup";  // Importa il componente Popup
import VideoPopup from "./VideoPopups";  // Importa il componente VideoPopup
import "./Locandine.css";

function Locandine({ title, copertina, id, descrizione, autore, durata, genere, distribuzione, videoSrc }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  // Funzione per aprire e chiudere il popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Funzione per aprire e chiudere il popup del video
  const toggleVideoPopup = () => {
    setShowVideoPopup(!showVideoPopup);
  };

  return (
    <div className="film-item">
      <div className="image-container">
        <img src={copertina} alt="" />
        <Button label="i" className="btn-info" onClick={togglePopup} />
        <div className="buttons-buy-container">
          <Link to={`/Filmdescrizione/${id}`}>
            <Button label="ACQUISTA ORA" className="btn-buy" />
          </Link>
          <Button 
            label="Guarda Trailer" 
            className="btn-trailer" 
            onClick={toggleVideoPopup}
          />
        </div>
      </div>
      <a className="title-film">{title}</a>

      {/* Mostra il popup dettagli solo se showPopup è true */}
      {showPopup && (
        <Popup
          title={title}
          genere={genere}
          durata={durata}
          autore={autore}
          descrizione={descrizione}
          distribuzione={distribuzione}
          onClose={togglePopup}  // Passa la funzione per chiudere il popup
        />
      )}

      {/* Mostra il popup video solo se showVideoPopup è true */}
      {showVideoPopup && (
        <VideoPopup
          videoSrc={videoSrc}
          onClose={toggleVideoPopup}  // Passa la funzione per chiudere il popup video
        />
      )}
    </div>
  );
}

export default Locandine;
