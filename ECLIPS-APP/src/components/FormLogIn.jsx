import React, { useEffect, useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserContext } from "./ContextLog";
import { Sidebar } from "primereact/sidebar";
import "./FormLogin.css";

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
    if (!email && !password) {
      setError("Inserire email e password");
    } else if (!email) {
      setError("Inserire email");
    } else if (!password) {
      setError("Inserire password");
    } else if (!user) {
      setError("Email e password non corretti");
    } else {
      login(user);
      onToggle('');
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <Sidebar
      showCloseIcon={true}
      position={"right"}
      visible={isToggled}
      blockScroll={true}
      onHide={() => {
        onToggle();
        setError("");
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
        }}
      >
        <h1
          style={{
            background: "black",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "44%",
            color: "white",
          }}
        >
          Accedi
        </h1>

        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem"></label>
            <InputText
              id="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-18rem border-1 border-gray-500"
            />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem"></label>
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-18rem border-1 border-gray-500"
            />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <Button
              label="Login"
              icon="pi pi-user"
              severity="success"
              onClick={handleSubmit}
              className="w-18rem mx-auto"
            ></Button>
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <Button
              label="Registrati"
              severity="primary"
              icon="pi pi-plus"
              className="w-18rem mx-auto"
              onClick={onRegisterClick}
            ></Button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default FormLogIn;
