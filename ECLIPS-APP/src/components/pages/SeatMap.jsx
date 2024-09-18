// import React, { useState } from "react";
// import generateSeats from "./generateSeats";
// import "./SeatMap.css";

// const SeatMap = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [checkoutComplete, setCheckoutComplete] = useState(false);

//   const toggleSeat = (id) => {
//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(id)
//         ? prevSelectedSeats.filter((seatId) => seatId !== id)
//         : [...prevSelectedSeats, id]
//     );
//   };

//   const toggleCart = () => {
//     setShowCart((prevShowCart) => !prevShowCart);
//   };

//   const handleCheckout = () => {
//     setCheckoutComplete(true);
//     setSelectedSeats([]);
//     setShowCart(false);
//   };

//   const rows = 10;
//   const seatsPerRow = 15;
//   const sectors = 3;
//   const seatsPerSector = seatsPerRow / sectors;

//   const seats = generateSeats();

//   return (
//     <div className="seat-map-container">
//       <h2>Seleziona i tuoi posti</h2>
//       <div className="seat-map">
//         {Array.from({ length: rows }).map((_, rowIndex) => {
//           const rowLetter = String.fromCharCode(65 + rowIndex);

//           return (
//             <div key={`row-${rowLetter}`} className="seat-row">
//               <div className="row-label">{rowLetter}</div>
//               {Array.from({ length: sectors }).map((_, sectorIndex) => {
//                 const startIndex = sectorIndex * seatsPerSector;
//                 const endIndex = startIndex + seatsPerSector;

//                 return (
//                   <div key={`sector-${sectorIndex}`} className="seat-sector">
//                     {seats
//                       .filter(
//                         (seat) =>
//                           seat.row === rowLetter &&
//                           seat.seat > startIndex &&
//                           seat.seat <= endIndex
//                       )
//                       .map((seat) => (
//                         <div
//                           key={seat.id}
//                           className={`seat ${
//                             selectedSeats.includes(seat.id) ? "selected" : ""
//                           }`}
//                           onClick={() => toggleSeat(seat.id)}
//                           data-seat={seat.seat}
//                         >
//                           {seat.seat}
//                         </div>
//                       ))}
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>

//       {selectedSeats.length > 0 && (
//         <div className="cart-container" onClick={toggleCart}>
//           <div className="cart-icon">
//             🛒
//             <span className="cart-count">{selectedSeats.length}</span>
//           </div>
//         </div>
//       )}

//       {showCart && (
//         <div className="cart-popup">
//           <div className="popup-overlay" onClick={toggleCart}></div>
//           <div className="popup-content">
//             <button className="close-btn" onClick={toggleCart}>
//               X
//             </button>
//             <h3>Posti selezionati</h3>
//             <ul>
//               {selectedSeats.map((seatId) => {
//                 const seat = seats.find((s) => s.id === seatId);
//                 return (
//                   <li key={seat.id}>
//                     Fila {seat.row}, Posto {seat.seat}
//                   </li>
//                 );
//               })}
//             </ul>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Conferma Acquisto
//             </button>
//           </div>
//         </div>
//       )}

//       {checkoutComplete && (
//         <div className="checkout-message">
//           <p>Grazie! Il tuo acquisto è stato confermato.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeatMap;

import React, { useState } from "react";
import generateSeats from "./generateSeats";
import "./SeatMap.css";

const SeatMap = ({ filmTitle, cinema, date, time }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ accountNumber: "" });

  const toggleSeat = (id) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(id)
        ? prevSelectedSeats.filter((seatId) => seatId !== id)
        : [...prevSelectedSeats, id]
    );
  };

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setSelectedSeats([]);
    setShowCart(false);
  };

  const rows = 10;
  const seatsPerRow = 15;
  const sectors = 3;
  const seatsPerSector = seatsPerRow / sectors;

  const seats = generateSeats();

  return (
    <div className="seat-map-container">
      <h2>Seleziona i tuoi posti</h2>
      <div className="reservation-details">
        <p>
          <strong>Titolo Film:</strong> {filmTitle}
        </p>
        <p>
          <strong>Cinema:</strong> {cinema}
        </p>
        <p>
          <strong>Data:</strong> {date.toLocaleDateString()}
        </p>
        <p>
          <strong>Orario:</strong> {time}
        </p>
      </div>
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
                          {seat.seat}
                        </div>
                      ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {selectedSeats.length > 0 && (
        <div className="cart-container" onClick={toggleCart}>
          <div className="cart-icon">
            🛒
            <span className="cart-count">{selectedSeats.length}</span>
          </div>
        </div>
      )}

      {showCart && (
        <div className="cart-popup">
          <div className="popup-overlay" onClick={toggleCart}></div>
          <div className="popup-content">
            <button className="close-btn" onClick={toggleCart}>
              X
            </button>
            <h3>Posti selezionati</h3>
            <ul>
              {selectedSeats.map((seatId) => {
                const seat = seats.find((s) => s.id === seatId);
                return (
                  <li key={seat.id}>
                    Fila {seat.row}, Posto {seat.seat}
                  </li>
                );
              })}
            </ul>
            <h3>Inserisci i dati del conto corrente</h3>
            <form onSubmit={handleCheckout}>
              <label>
                Numero di conto:
                <input
                  type="text"
                  name="accountNumber"
                  value={paymentDetails.accountNumber}
                  onChange={handlePaymentChange}
                  required
                />
              </label>
              <button type="submit" className="checkout-btn">
                Conferma Acquisto
              </button>
            </form>
          </div>
        </div>
      )}

      {checkoutComplete && (
        <div className="checkout-message">
          <p>Grazie! Il tuo acquisto è stato confermato.</p>
        </div>
      )}
    </div>
  );
};

export default SeatMap;
