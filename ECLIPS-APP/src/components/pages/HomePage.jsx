import React from "react";
import "../../index.css";
import Locandine from "../Locandine";
import filmsData from "../Listafilms.json";
import AsideBar from "../AsideBar";
import ImageCarousel from "../ImageCarousel";
import ImageSlider from "../ImageSlider";
/* import "./HomePage.css"; */
function HomePage() {
  const films = filmsData.films;
  return (
    <>
      <ImageCarousel />
      <div className="Locandine-container">
        {films.map((film) => (
          <Locandine
            key={film.idFilm}
            id={film.idFilm}
            title={film.titolo}
            genere= {film.genere}
            durata= {film.durata}
            autore={film.autore}
            descrizione={film.descrizione}
            distribuzione={film.distribuzione}
            copertina={`../../src/assets/img/${film.copertina}`}
            videoSrc={`../../src/assets/img/${film.trailer}`}
          ></Locandine>
        ))}
      </div>
      <div id="image-slider">
        <ImageSlider />
      </div>
      <AsideBar />
    </>
  );
}

export default HomePage;
