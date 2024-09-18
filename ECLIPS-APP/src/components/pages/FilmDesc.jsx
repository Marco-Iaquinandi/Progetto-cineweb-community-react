import React, { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import filmsData from "../Listafilms.json";
import SeatMap from "./SeatMap";
import FormLogIn from "../FormLogIn";
import FormRegister from "../FormRegister";
import "./FilmDesc.css";
import { Calendar } from "primereact/calendar";

function FilmDesc() {
  const { id } = useParams();
  const film = filmsData.films.find((film) => film.idFilm === parseInt(id));
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState("");
  const navigate = useNavigate();

  const canBuyTicket = selectedCinema && date && selectedTime;

  if (!film) {
    return <h2>Film non trovato</h2>;
  }

  const today = new Date();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const toggleSeatMap = () => {
    if (isAuthenticated) {
      setShowSeatMap((prev) => !prev);
    } else {
      setAuthModal("login");
    }
  };

  const handleAuthClose = () => {
    setAuthModal("");
  };

  const handleRegisterClick = () => {
    setAuthModal("register");
  };

  return (
    <>
      <div
        className="film-background"
        style={{ backgroundImage: `url(/src/assets/img/${film.background})` }}
      >
        <div className="film-content">
          <div className="film-container">
            <h1 className="page-title">SCHEDA DEL FILM</h1>
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

              <div className="cinema-selector">
                <label className="cinema-details" htmlFor="cinema">
                  <strong>Seleziona il cinema:</strong>
                </label>
                <select
                  id="cinema"
                  value={selectedCinema}
                  onChange={(e) => setSelectedCinema(e.target.value)}
                  className="cinema-dropdown"
                >
                  <option value="">-- Seleziona un cinema --</option>
                  <option value="Cinema1">E-CLIPS MERCURY</option>
                  <option value="Cinema2">E-CLIPS VENUS</option>
                  <option value="Cinema3">E-CLIPS NEPTUNE</option>
                  <option value="Cinema4">E-CLIPS MARS</option>
                  <option value="Cinema5">E-CLIPS SATURN</option>
                  <option value="Cinema6">E-CLIPS URANUS</option>
                  <option value="Cinema7">E-CLIPS JUPITER</option>
                  <option value="Cinema8">E-CLIPS EARTH</option>
                  <option value="Cinema9">E-CLIPS PLUTO</option>
                </select>
              </div>

              {selectedCinema && (
                <>
                  <div>
                    <p className="date-selector">
                      <strong>Seleziona la data:</strong>
                    </p>
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      minDate={today}
                    />
                  </div>

                  {date && (
                    <div>
                      <p className="time-selector" htmlFor="time">
                        <strong>Seleziona l'orario:</strong>
                      </p>
                      <select
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="time-details"
                      >
                        <option value="">-- Seleziona un orario --</option>
                        {film.orari.map((orario, index) => (
                          <option key={index} value={orario}>
                            {orario}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </>
              )}

              {canBuyTicket && (
                <button className="btn-buy" onClick={toggleSeatMap}>
                  ACQUISTA ORA
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showSeatMap && (
        <div className="seat-map-popup">
          <div
            className="popup-overlay"
            onClick={() => setShowSeatMap(false)}
          ></div>
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowSeatMap(false)}>
              <strong>X</strong>
            </button>
            <SeatMap
              filmTitle={film.titolo}
              cinema={selectedCinema}
              date={date}
              time={selectedTime}
            />
          </div>
        </div>
      )}

      {authModal && (
        <div className="auth-modal">
          {authModal === "login" && (
            <FormLogIn
              isToggled={authModal === "login"}
              onToggle={handleAuthClose}
              onRegisterClick={() => setAuthModal("register")}
            />
          )}
          {authModal === "register" && (
            <FormRegister
              onToggle={handleAuthClose}
              showRegister={authModal === "register"}
            />
          )}
        </div>
      )}
    </>
  );
}

export default FilmDesc;
