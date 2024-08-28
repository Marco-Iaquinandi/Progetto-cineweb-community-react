import React, { useState } from "react";
import generateSeats from "./generateSeats";
import "./SeatMap.css";

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (id) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(id)
        ? prevSelectedSeats.filter((seatId) => seatId !== id)
        : [...prevSelectedSeats, id]
    );
  };

  const rows = 10;
  const seatsPerRow = 15;
  const sectors = 3;
  const seatsPerSector = seatsPerRow / sectors;

  const seats = generateSeats();

  return (
    <div className="seat-map-container">
      <div className="seat-map">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const rowLetter = String.fromCharCode(65 + rowIndex);

          return (
            <div key={`row-${rowLetter}`} className="seat-row">
              <div className="row-label">{rowLetter}</div>
              {Array.from({ length: sectors }).map((_, sectorIndex) => {
                const startIndex = sectorIndex * seatsPerSector;
                const endIndex = startIndex + seatsPerSector;

                return (
                  <div key={`sector-${sectorIndex}`} className="seat-sector">
                    {seats
                      .filter(
                        (seat) =>
                          seat.row === rowLetter &&
                          seat.seat > startIndex &&
                          seat.seat <= endIndex
                      )
                      .map((seat) => (
                        <div
                          key={seat.id}
                          className={`seat ${
                            selectedSeats.includes(seat.id) ? "selected" : ""
                          }`}
                          onClick={() => toggleSeat(seat.id)}
                          data-seat={seat.seat}
                        >
                          {/* Vuoto; numero del posto mostrato solo su hover */}
                        </div>
                      ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMap;
