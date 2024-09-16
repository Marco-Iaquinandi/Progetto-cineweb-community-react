import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import filmsData from "../Listafilms.json";
import SeatMap from "./SeatMap";
import "./FilmDesc.css";

function FilmDesc() {
  const { id } = useParams();
  const film = filmsData.films.find((film) => film.idFilm === parseInt(id));
  const [showSeatMap, setShowSeatMap] = useState(false);

  if (!film) {
    return <h2>Film non trovato</h2>;
  }

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const toggleSeatMap = () => {
    setShowSeatMap((prev) => !prev);
  };

  return (
    <>
      <div
        className="film-background"
        style={{ backgroundImage: `url(/src/assets/img/${film.background})` }}
      >
        <div className="film-content">
          <h1 style={{ color: "#b69b70", textAlign: "center" }}>
            SCHEDA DEL FILM
          </h1>
          <div className="film-container">
            <img
              src={`/src/assets/img/${film.copertina}`}
              alt={film.titolo}
              className="film-image"
            />
            <div className="film-details">
              <h2 className="film-title">{film.titolo}</h2>
              <p className="film-description">{film.descrizione}</p>
              <p className="film-genre">
                <strong>Genere:</strong> {film.genere}
              </p>
              <p className="film-duration">
                <strong>Durata:</strong> {film.durata}
              </p>
              <p className="film-author">
                <strong>Regista:</strong> {film.autore}
              </p>
              <p className="film-distribution">
                <strong>Distribuzione:</strong> {film.distribuzione}
              </p>
              <div className="film-times">
                <strong>Orari:</strong> {film.orari.join(", ")}
              </div>
              <button className="btn-buy" onClick={toggleSeatMap}>
                ACQUISTA ORA
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSeatMap && (
        <div className="seat-map-popup">
          <div className="popup-overlay" onClick={toggleSeatMap}></div>{" "}
          <div className="popup-content">
            <button className="close-btn" onClick={toggleSeatMap}>
              X
            </button>{" "}
            <SeatMap />
          </div>
        </div>
      )}
    </>
  );
}

export default FilmDesc;
