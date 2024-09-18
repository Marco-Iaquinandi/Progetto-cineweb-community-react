import React, { useState } from "react";
import "./Cinema.css";

const Cinema = ({ name, address, phone, email, scheduleLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="cinema">
      <div
        className="cinema-title "
        onClick={toggleDetails}
        style={{ cursor: "pointer" }}
      >
        <h2>
          {name}{" "}
          <span className="toggle-button">{showDetails ? "-" : "+"}</span>
        </h2>
      </div>
      {showDetails && (
        <div className="cinema-details">
          <p>
            <strong>Indirizzo:</strong> {address}
          </p>
          <p>
            <strong>Tel:</strong> {phone}
          </p>
          <p>
            <strong>Mail:</strong>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <strong>Programmazione:</strong>
            <a href={scheduleLink}>Clicca per scoprire la programmazione</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cinema;
