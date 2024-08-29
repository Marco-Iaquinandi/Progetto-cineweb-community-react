import React, { useState } from 'react';
import './FormAbb.css';

const FormAbb = ({ onClose }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('basic');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
      newErrors.cardHolder = 'L\'intestatario della carta può contenere solo lettere e spazi.';
    }
   
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Il numero della carta deve essere composto esattamente da 16 cifre.';
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'La data di scadenza deve essere nel formato MM/AA.';
    }

    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'Il CVC deve essere composto esattamente da 3 cifre.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Acquisto effettuato con successo!');
      onClose(); 
    } else {
      setErrors(validationErrors); 
    }
  };

  return (
    <div className="form-abb-overlay">
      <div className="form-abb-container">
        <button className="form-abb-close-btn" onClick={onClose}>&times;</button>
        <h2 className="form-abb-title">Acquista Abbonamento</h2>
        <form className="form-abb-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-abb-label">Nome e Cognome:</label>
            <input
              className="form-abb-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        
          <div>
            <label className="form-abb-label">Tariffa:</label>
            <select
              className="form-abb-select"
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              required
            >
              <option value="basic">30 € - 5 ingressi</option>
              <option value="standard">55 € - 10 ingressi</option>
              <option value="premium">100€ - 20 ingressi</option>
            </select>
          </div>
          <div>
            <label className="form-abb-label">Intestatario Carta:</label>
            <input
              className="form-abb-input"
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Nome e Cognome"
              required
            />
            {errors.cardHolder && <p className="form-abb-error">{errors.cardHolder}</p>}
          </div>
          <div>
            <label className="form-abb-label">Numero Carta di Credito:</label>
            <input
              className="form-abb-input"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Numero carta di credito"
              required
            />
            {errors.cardNumber && <p className="form-abb-error">{errors.cardNumber}</p>}
          </div>
          <div>
            <label className="form-abb-label">Data di Scadenza:</label>
            <input
              className="form-abb-input"
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/AA"
              required
            />
            {errors.expiryDate && <p className="form-abb-error">{errors.expiryDate}</p>}
          </div>
          <div>
            <label className="form-abb-label">CVC:</label>
            <input
              className="form-abb-input"
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="CVC"
              required
            />
            {errors.cvc && <p className="form-abb-error">{errors.cvc}</p>}
          </div>
          <button className="form-abb-button" type="submit">Acquista ora</button>
        </form>
      </div>
    </div>
  );
};

export default FormAbb;