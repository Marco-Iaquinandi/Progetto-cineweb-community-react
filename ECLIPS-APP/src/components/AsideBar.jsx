import React, { useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import "./AsideBar.css";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import listaFilms from "./Listafilms.json";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const AsideBar = () => {
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(null);
  const [films, setFilms] = useState();
  const [times, setTimes] = useState();
  useEffect(() => {
    setFilms(
      listaFilms.films.map((film) => ({
        label: film.titolo,
        value: film.titolo,
      }))
    );
  }, []);
  useEffect(() => {
    if (selectedFilm) {
      const film = listaFilms.films.find((f) => f.titolo === selectedFilm);
      if (film) {
        setTimes(
          film.orari.map((orario) => ({ label: orario, value: orario }))
        );
      } else {
        setTimes([]);
      }
    }
  }, [selectedFilm]);

  const cinemas = [
    { label: "E-CLIPS VENUS", value: "E-CLIPS VENUS" },
    { label: "E-CLIPS MERCURY", value: "E-CLIPS MERCURY" },
    { label: "E-CLIPS NEPTUNE", value: "E-CLIPS NEPTUNE" },
    { label: "E-CLIPS MARS", value: "E-CLIPS MARS" },
    { label: "E-CLIPS SATURN", value: "E-CLIPS SATURN" },
    { label: "E-CLIPS URANUS", value: "E-CLIPS URANUS" },
    { label: "E-CLIPS JUPITER", value: "E-CLIPS JUPITER" },
    { label: "E-CLIPS EARTH", value: "E-CLIPS EARTH" },
    { label: "E-CLIPS PLUTO", value: "E-CLIPS PLUTO" },
  ];
  const isDisabled = !selectedFilm || !selectedCinema;
  return (
    <Sidebar
      style={{ display: "flex", height: "10%" }}
      visible={true}
      position="bottom"
      modal={false}
      header={null}
      showCloseIcon={false}
    >
      <div className="asidebar-container">
        <div className="asidebar-title">
          <h2>
            ACQUISTO
            <br />
            RAPIDO
          </h2>
        </div>

        {/* <div className="asidebar-content">
          <div className="p-field">
            <label htmlFor="cinema">Cinema</label>
            <Dropdown
              inputId="cinema"
              value={selectedCinema}
              options={cinemas}
              onChange={(e) => setSelectedCinema(e.value)}
              placeholder="Scegli il cinema"
            />
          </div>
          <div className="p-field">
            <label htmlFor="film">Film/Extra</label>
            <Dropdown
              inputId="film"
              value={selectedFilm}
              options={films}
              onChange={(e) => setSelectedFilm(e.value)}
              placeholder="Scegli un Film o un Extra"
            />
          </div>
          <div className="p-field">
            <label htmlFor="date">Data</label>
            <Dropdown
              inputId="date"
              value={selectedDate}
              options={dates}
              onChange={(e) => setSelectedDate(e.value)}
              placeholder="Scegli la data"
            />
          </div>
          <div className="p-field">
            <label htmlFor="time">Orari</label>
            <Dropdown
              inputId="time"
              value={selectedTime}
              options={times}
              onChange={(e) => setSelectedTime(e.value)}
              placeholder="Scegli l'orario"
            />
          </div>
          <Button label="Cerca" icon="pi pi-search" style={{ width: '15%' }} />
        </div> */}
        <div className="asideDown" id="listacinema">
          <span className="aside-Lowercase">
            <span className="quick-book__labelwrap">CINEMA</span>
            <Dropdown
              inputId="cinema"
              value={selectedCinema}
              options={cinemas}
              onChange={(e) => setSelectedCinema(e.value)}
              placeholder="Scegli il cinema"
            />
          </span>

          <div id="containercinema" className="container-cinema-Hide"></div>

          <div className="asideDown" id="listafilm">
            <span className="aside-Lowercase">
              <span className="quick-book__labelwrap">Film/Extra</span>
              <Dropdown
                inputId="listafilm"
                value={selectedFilm}
                options={films}
                onChange={(e) => setSelectedFilm(e.value)}
                placeholder="Scegli un Film o un Extra"
              />
            </span>
            <div id="containerfilm" className="container-cinema-Hide"></div>
          </div>

          <span className="aside-Lowercase">
            <span className="quick-book__labelwrap">DATA</span>
            <Calendar
              placeholder="Seleziona la data"
              value={date}
              onChange={(e) => setDate(e.value)}
              disabled={isDisabled}
              className={isDisabled ? "disabled-cursor" : "cursor-pointer"}
            />
          </span>
          <div id="containerDate" className="container-cinema-Hide"></div>

          <span className="aside-Lowercase">
            <span className="quick-book__labelwrap">ORARI</span>
            <Dropdown
              placeholder="Orari"
              inputId="time"
              value={selectedTime}
              options={times}
              disabled={isDisabled}
              onChange={(e) => setSelectedTime(e.value)}
              className={isDisabled ? "disabled-cursor" : "cursor-pointer"}
            />
          </span>
          <div id="containerTime" className="container-cinema-Hide"></div>

          <button className="search">CERCA</button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AsideBar;
