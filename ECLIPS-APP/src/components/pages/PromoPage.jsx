import React, { useState } from "react";
import List from "../List";
import Button from "../Button";
import FormAbb from "../FormAbb";
import "../../index.css";
import "../Button.css";
import "./PromoPage.css";

function PromoPage() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="promo-page">
      <List title="LISTINO PREZZI" image="../src/assets/img/immaginebiglietti.png" />
      <List title="CONVENZIONI E SCONTI" image="../src/assets/img/immaginepromo.png" />
      <List title="ABBONAMENTI" image="../src/assets/img/tesseraabbonamento.png" />
      <div className="button-container">
        <Button text="ACQUISTA ABBONAMENTO" cssClass="acquistaAbb" onClick={handleButtonClick} />
      </div>
      {showForm && <FormAbb onClose={handleCloseForm} />}
    </div>
  );
}

export default PromoPage;