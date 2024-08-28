import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FormLogIn from "./FormLogIn";
import FormRegister from "./FormRegister";
import { UserContext } from "./ContextLog";
import { Menubar } from "primereact/menubar";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import "primeicons/primeicons.css";

function Navbar({}) {
  const { user, logout } = useContext(UserContext);
  const [isToggled, setIsToggled] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };
  const handleRegisterClick = () => {
    setIsToggled(false);
    setShowRegister(true);
  };

  const autanticationlogin = user
    ? {
        label: "LOGOUT",
        icon: "pi pi-sign-out",
        command: logout,
      }
    : {
        label: "LOGIN",
        icon: "pi pi-user",
        items: [
          {
            label: "Login",
            icon: "pi pi-user",
            command: handleClick,
          },
          {
            label: "Registrati",
            icon: "pi pi-plus",
            command: handleShowRegister,
          },
        ],
      };

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const itemlink = (link) => {
    return (
      <Link to={link.url} className="p-menuitem-link">
        <span className={link.icon} />
        <span>{link.label}</span>
      </Link>
    );
  };

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      template: itemlink,
    },
    {
      label: "COMING SOON",
      icon: "pi pi-star",
      template: itemlink,
    },
    {
      label: "PROMO",
      icon: "pi pi-search",
      template: itemlink,
    },
    {
      label: "DOVE TROVARCI",
      icon: "pi pi-envelope",
      template: itemlink,
    },
    autanticationlogin,
  ];

  const start = (
    <img
      alt="logo"
      src="src/assets/img/Logo.png"
      height="70"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <>
      {/* <nav className="container-navbar">
        <img className="logo-img" src="src/assets/img/Logo.png"></img>
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li className="linkNav" key={index}>
              {link.url.startsWith("#") ? (
                <a
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.url)
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.text}
                </a>
              ) : (
                <Link to={link.url}>{link.text}</Link>
              )}
            </li>
          ))}
        </ul>
        <div onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
          {user ? (
            <>
              <Button text="LOGOUT" cssClass={"Button-LogIN"} onClick={logout}>
              </Button>
            </>
          ) : (
            <>
              <Button className="Button-LogIN" icon="pi pi-user" severity="info" aria-label="User" label="LOGIN" />
              <div className="Container-LogIN-Menu">
                {showList && (
                  <ul className="LogIN-Menu">
                    <li>
                    <span className="pi pi-user" style={{color: "white"}}><a href="#" data-istoggled={isToggled} onClick={handleClick}>Log In</a> </span>
                    </li>
                    <li>
                    <span className="pi pi-user-plus" style={{color: "white"}}><a href="#" isShow={showRegister} onClick={handleShowRegister}>Registrati</a> </span>
                      
                    </li>
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
      <FormLogIn isToggled={isToggled} onToggle={handleClick} onRegisterClick={handleRegisterClick} />
      <FormRegister showRegister={showRegister} onToggle={handleShowRegister} /> */}

      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
      <FormLogIn
        isToggled={isToggled}
        onToggle={handleClick}
        onRegisterClick={handleRegisterClick}
      />
      <FormRegister showRegister={showRegister} onToggle={handleShowRegister} />
    </>
  );
}

export default Navbar;
