import React from 'react';
import './List.css';

const List = ({ title, image }) => {
 
  const data = {
   
    "LISTINO PREZZI": [
      { description: 'Da Lunedì a Giovedì escluso prime uscite , Supersconto per tutti', price: '€ 6,00' },
      { description: 'Prime uscite e da Venerdì a Domenica , Intero', price: '€ 9,00' },
      { description: 'Ridotto (Militari, Forze dell\'Ordine, Over 65)', price: '€ 7,00' },
      { description: 'Bambini da 3 a 8 anni', price: '€ 6,00' },
      { description: 'Sotto i 3 anni', price: 'gratis' },
      { description: 'FILM IN 3D , maggiorazione di € 2,00 sul prezzo del biglietto' },
      { description: 'LA PROMO "SUPERSCONTO PER TUTTI" E\' VALIDA TUTTI I GIORNI AD ECCEZIONE DI FESTIVI, PREFESTIVI E COMPRENDE TUTTI I FILM AD ECCEZIONE DI PRIME USCITE ED EVENTI SPECIALI' },
    ],

    "CONVENZIONI E SCONTI": [
        { description: 'Carta idea, riduzione dal lunedi al giovedì e la domenica ultimo spettacolo', price: '€ 5,00' },
        { description: 'Stardust QMI, in base alle promozioni correnti' },
        { description: 'TIM 2x1' },
        { description: 'Bonus cultura, 18 app e Carta del docente' },
        { description: 'PER MAGGIORI INFORMAZIONI SU PREZZI E PROMO ATTIVE CONTATTARE IL SERVIZIO CLIENTI AL NUMERO 02 480 25 53' },
      ],

    "ABBONAMENTI": [
      { description: 'Abbonamento da 5 ingressi', price: '€ 30,00' },
      { description: 'Abbonamento da 10 ingressi', price: '€ 55,00' },
      { description: 'Abbonamento da 20 ingressi', price: '€ 100,00' },
      { description: 'GLI ABBONAMENTI SONO VALIDI UN ANNO A PARTIRE DALLA DATA DI SOTTOSCRIZIONE E PERMETTONO LA VISIONE DI TUTTI I FILM, TUTTI I GIORNI, FESTIVI E PREFESTIVI INCLUSI.' },
    ],
  };

  const items = data[title];

  return (
    <div className="container">
      <div className="container-list">
        <div className="img-container">
          <div className="img-listino" style={{ backgroundImage: `url(${image})` }}>
           
          </div>
        </div>
        <div className="list">
          <ul>
            <h3>{title}</h3>
            {items.map((item, index) => (
              <li key={index}>
                {item.description} {item.price && `- ${item.price}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
