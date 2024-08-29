import React, { useEffect, useState, useContext } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserContext } from "./ContextLog";

const FormLogIn = ({ isToggled, onToggle, onRegisterClick }) => {
  const { login } = useContext(UserContext);
  const [utente, setUtente] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/utenti")
      .then((response) => response.json())
      .then((data) => {
        setUtente(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = utente.find(
      (user) => user.email === email && user.password === password
    );
    if (error) {
      (user) => user.email === "" && user.password === "";
      setError("Email e password incorrect");
    }
    if (user) {
      login(user);
      onToggle();
      setEmail("");
      setPassword("");
      setError("");
    } else {
      setError("Email o password errati");
    }
  };

  return (
    <Dialog
      header={null}
      visible={isToggled}
      position={"top-right"}
      modal={isToggled}
      style={{ width: "20vw", height: "100vh" }}
      onHide={() => {
        onToggle();
      }}
      draggable={false}
      resizable={false}
      blockScroll={true}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Accedi</h1>
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Email</label>
            <InputText
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-12rem"
            />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Password</label>
            <InputText
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-12rem"
            />
          </div>
          <Button
            label="Login"
            icon="pi pi-user"
            severity="success"
            onClick={handleSubmit}
            className="w-10rem mx-auto"
          ></Button>
          <Button
            label="Registrati"
            severity="primary"
            icon="pi pi-plus"
            className="w-10rem mx-auto"
            onClick={onRegisterClick}
          ></Button>
        </div>
      </div>
    </Dialog>
  );
};

export default FormLogIn;
