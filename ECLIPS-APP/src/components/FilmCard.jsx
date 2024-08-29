import React from 'react';
import { useParams, Link } from 'react-router-dom';
import filmsData from './Listafilms.json';

const FilmCard = () => {
  const { idFilm } = useParams();
  const film = filmsData.films.find((f) => f.idFilm === parseInt(idFilm));

  if (!film) {
    return <div>Film non trovato!</div>;
  }

  return (
    <div className="film-card-container">
      <img src={`../../src/assets/img/${film.copertina}`} alt={film.titolo} />
      <h2>{film.titolo}</h2>
      <p>{film.descrizione}</p>
      <p><strong>Autore:</strong> {film.autore}</p>
      <p><strong>Orari:</strong> {film.orari.join(', ')}</p>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
};

export default FilmCard;