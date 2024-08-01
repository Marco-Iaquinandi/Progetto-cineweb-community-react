import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const FormLogIn = ({isToggled, onToggle}) => {
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
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Email</label>
            <InputText id="email" type="email" className="w-12rem" />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Password</label>
            <InputText id="password" type="password" className="w-12rem" />
          </div>
          <Button
            label="Login"
            icon="pi pi-user"
            severity="success"
            className="w-10rem mx-auto"
          ></Button>
          <Button
            label="Registrati"
            severity="primary"
            icon="pi pi-plus"
            className="w-10rem mx-auto"
          ></Button>
        </div>
      </div>
    </Dialog>
  );
};

export default FormLogIn;
