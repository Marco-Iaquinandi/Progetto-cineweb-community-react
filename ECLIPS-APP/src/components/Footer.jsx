import React, { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";
import "primeicons/primeicons.css";
import "./Footer.css";

function Footer() {
  const [items, setItems] = useState([]);
  const toast = useRef(null);

  useEffect(() => {
    const data = [
      {
        naviga: { text: "Home", url: "/" },
        contattaci: { text: "Email", url: "/contact/email" },
        noteLegali: { text: "Termini e Condizioni", url: "/terms" },
        seguici: {
          text: "Facebook",
          url: "https://facebook.com",
          icon: "pi-facebook",
        },
      },
      {
        naviga: { text: "About", url: "/about" },
        contattaci: { text: "Telefono", url: "/contact/phone" },
        noteLegali: { text: "Privacy Policy", url: "/privacy" },
        seguici: {
          text: "Instagram",
          url: "https://instagram.com",
          icon: "pi-instagram",
        },
      },
      {
        naviga: { text: "Services", url: "/services" },
        contattaci: { text: "Chat", url: "/contact/chat" },
        noteLegali: { text: "Cookie Policy", url: "/cookies" },
        seguici: {
          text: "Twitter",
          url: "https://twitter.com",
          icon: "pi-twitter",
        },
      },
      {
        naviga: { text: "Contact", url: "/contact" },
        contattaci: { text: "Form", url: "/contact/form" },
        noteLegali: { text: "Disclaimer", url: "/disclaimer" },
        seguici: {
          text: "LinkedIn",
          url: "https://linkedin.com",
          icon: "pi-linkedin",
        },
      },
    ];
    setItems(data);
  }, []);

  return (
    <div className="allineamento">
      <Toast ref={toast} />
      <div className="footer-content">
        <div className="footer-container">
          <h3>NAVIGA</h3>
          <ul className="footer-link">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.naviga.url}>{item.naviga.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container">
          <h3>CONTATTACI</h3>
          <ul className="footer-link">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.contattaci.url}>{item.contattaci.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container">
          <h3>NOTE LEGALI</h3>
          <ul className="footer-link">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.noteLegali.url}>{item.noteLegali.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container">
          <h3>SEGUICI</h3>
          <ul className="footer-link">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.seguici.url}>
                  <i
                    className={`pi ${item.seguici.icon}`}
                    style={{ marginRight: "8px" }}
                  ></i>
                  {item.seguici.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p className="classe-develope">Developed by Your Name</p>
      </div>
    </div>
  );
}

export default Footer;
