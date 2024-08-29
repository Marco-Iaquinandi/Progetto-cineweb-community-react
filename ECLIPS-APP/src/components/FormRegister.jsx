import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
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
      id: Math.random(),
      email: formRegistrazione.email,
      password: formRegistrazione.password,
      confirmPassword: formRegistrazione.confirmPassword,
    };

    setFormRegister({ email: "", password: "", confirmPassword: "" });
    setErrors({ email: "", password: "", confirmPassword: "" });
    onToggle();
    alert("Registrazione Effetuata");

    console.log(registrazione);
  }

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        showCloseIcon={true}
        position={"right"}
        visible={showRegister}
        blockScroll={true}
        onHide={() => {
          onToggle();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Registrati</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div className="card flex justify-content-center">
                  <FloatLabel>
                    <label htmlFor="email">Email</label>
                    <InputText
                      type="email"
                      name="email"
                      value={formRegistrazione.email}
                      onChange={handleInputChange}
                      className="form-control"
                      id="email"
                      required
                    />
                    {errors.email && (
                      <small className="p-error">{errors.email}</small>
                    )}
                  </FloatLabel>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div className="card flex justify-content-center">
                  <FloatLabel>
                    <label htmlFor="password">Password:</label>
                    <InputText
                      type="password"
                      name="password"
                      value={formRegistrazione.password}
                      onChange={handleInputChange}
                      className="form-control"
                      id="password"
                      required
                    />
                    {errors.password && (
                      <small className="p-error">{errors.password}</small>
                    )}
                  </FloatLabel>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div className="card flex justify-content-center">
                  <FloatLabel>
                    <label htmlFor="password">Confirm Password:</label>
                    <InputText
                      type="password"
                      name="confirmPassword"
                      value={formRegistrazione.confirmPassword}
                      onChange={handleInputChange}
                      className="form-control"
                      id="ConfirmPassword"
                      required
                    />
                    {errors.confirmPassword && (
                      <small className="p-error">
                        {errors.confirmPassword}
                      </small>
                    )}
                  </FloatLabel>
                </div>
              </div>
            </div>
            <div className="card flex justify-content-center">
              <Button type="submit" label="Registrati" className="w-100" />
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
}

export default FormRegister;
