import React from "react";
import { useParams } from "react-router-dom";
import filmsData from "../Listafilms.json";
import Locandine from "../Locandine";

function FilmDesc() {
  const { id } = useParams();
  const film = filmsData.films.find((film) => film.idFilm === parseInt(id));
  const locmap = filmsData.films.find((film) => film.idFilm === parseInt(id));
  if (!film) {
    return <h2>Film non trovato</h2>;
  }

  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }}>DESCRIZIONE FILM</h1>
      <div style={{ textAlign: "center", color: "red" }}>
        <img
          src={`/src/assets/img/${film.copertina}`}
          alt={film.titolo}
          style={{ width: "300px" }}
        />
        <h2>{film.titolo}</h2>
        <p>{film.descrizione}</p>
        <p>
          <strong>Orari:</strong> {film.orari}
        </p>
      </div>
      {/* <Locandine
        key={locmap[0].idFilm}
        title={locmap[0].titolo}
        copertina={`/src/assets/img/${locmap[0].copertina}`}
      ></Locandine> */}
    </>
  );
}

export default FilmDesc;
