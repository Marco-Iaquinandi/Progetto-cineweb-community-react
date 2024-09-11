import React from "react";
import { useParams } from "react-router-dom";
import filmsData from "../Listafilms.json";
import "./FilmDesc.css"; // Importa il file CSS

function FilmDesc() {
  const { id } = useParams();
  const film = filmsData.films.find((film) => film.idFilm === parseInt(id));

  if (!film) {
    return <h2>Film non trovato</h2>;
  }

  return (
    <div className="film-background" style={{ backgroundImage: `url(/src/assets/img/${film.background})` }}>
      <div className="film-content">
        <h1 style={{ color: "#b69b70", textAlign: "center" }}>SCHEDA DEL FILM</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDesc;
