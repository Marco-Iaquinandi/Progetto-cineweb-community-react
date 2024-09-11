import React, { useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./FormRegister.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function FormRegister({ onToggle, showRegister }) {
  const [formRegistrazione, setFormRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormRegister({ ...formRegistrazione, [name]: value });
  }
  function validate() {
    let valid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!formRegistrazione.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Email non valida.";
      valid = false;
    }

    if (formRegistrazione.password.length < 6) {
      newErrors.password = "La password deve essere almeno di 6 caratteri.";
      valid = false;
    }

    if (formRegistrazione.password !== formRegistrazione.confirmPassword) {
      newErrors.confirmPassword = "Le password non coincidono.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const registrazione = {
      email: formRegistrazione.email,
      password: formRegistrazione.password,
    };

    fetch("http://localhost:8000/utenti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrazione),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registrazione Effettuata");
        setFormRegister({ email: "", password: "", confirmPassword: "" });
        setErrors({ email: "", password: "", confirmPassword: "" });
        onToggle();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const getClassName = (field) => {
    if (errors[field]) {
      return "input-error";
    } else if (formRegistrazione[field]) {
      return "input-success";
    } 
    return "border-1 border-gray-500";
  };
  return (
    <Sidebar
      showCloseIcon={true}
      position={"right"}
      visible={showRegister}
      blockScroll={true}
      onHide={() => {
        onToggle();
        setErrors("");
      }}
      style={{ width: "20vw", height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          gap: "20px",
        }}
      >
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <h1 style={{background: "black", width: "240%", height: "20vh", textAlign:"center", alignContent: "center",color:"white"}}>Registrati</h1>
          <form onSubmit={handleSubmit} className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
              <InputText
                type="email"
                placeholder="Email"
                name="email"
                value={formRegistrazione.email}
                onChange={handleInputChange}
                id="email"
                required
                className={`w-18rem ${getClassName("email")}`}
              />
            </div>
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
              <InputText
                type="password"
                placeholder="Password"
                name="password"
                value={formRegistrazione.password}
                onChange={handleInputChange}
                id="password"
                required
                className={`w-18rem  ${getClassName("password")}`}
              />
            </div>
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
              <InputText
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formRegistrazione.confirmPassword}
                onChange={handleInputChange}
                id="ConfirmPassword"
                required
                className={`w-18rem ${getClassName("confirmPassword")}`}
              />
            </div>

            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <Button
                type="submit"
                label="Registrati"
                className="w-18rem mx-auto"
                severity="primary"
                icon="pi pi-check"
              />
            </div>
          </form>
        </div>
      </div>
    </Sidebar>
  );
}

export default FormRegister;
