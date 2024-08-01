import React from "react";
import Navbar from "../Navbar";
import "../../index.css";
import Locandine from "../Locandine";
import filmsData from "../Listafilms.json";
import AsideBar from "../AsideBar";
/* import "./HomePage.css"; */
function HomePage() {
    const films = filmsData.films;
  return (
    <>
      <Navbar
        links={[
          { url: "#", text: "Home" },
          { url: "#", text: "Coming Soon" },
          { url: "#", text: "Promo" },
          { url: "#", text: "Dove Trovarci" },
        ]}
      ></Navbar>
      <div className="Locandine-container">
      {films.map((film) => (
        <Locandine 
          key={film.idFilm}
          title={film.titolo}
          copertina={`../../src/assets/img/${film.copertina}`}
        ></Locandine>
      ))}
      </div> 
      <AsideBar />      
    </>
  );
}

export default HomePage;
