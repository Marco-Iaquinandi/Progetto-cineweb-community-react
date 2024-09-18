import React from "react";
import { Button } from 'primereact/button';
import "./Popup.css";

function Popup({ title, genere, durata, autore, descrizione, distribuzione, onClose }) {
  return (
    <div className="popup">
      <div className="popup-contents">
      <Button className="btn-popup-close" onClick={onClose}>
          &times;
        </Button>
        <h2 className="popup-film-title">{title}</h2>
        <p className="popup-film-description"><strong>Descrizione:</strong> {descrizione}</p>
        <p className="popup-film-genre" ><strong>Genere:</strong> {genere}</p>
        <p className="popup-film-duration"><strong>Durata:</strong> {durata}</p>
        <p className="popup-film-author"><strong>Regista:</strong> {autore}</p>
        <p className="popup-film-distribution"><strong>Distribuzione:</strong> {distribuzione}</p>
      </div>
    </div>
  );
}

export default Popup;
