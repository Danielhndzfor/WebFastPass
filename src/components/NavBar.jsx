import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "/logoP.webp";
import "../css/NavBar.css";
import { MDBIcon } from "mdb-react-ui-kit";

const links = [
  {
    key: "Inicio",
    href: "/",
  },
  {
    key: "Servicios",
    href: "/services",
    submenu: [
      {
        key: "Cita Informativa",
        href: "/services/cita-informativa",
      },
      {
        key: "Pasaporte Mexicano",
        href: "/services/pasaporte-mexicano",
      },
      {
        key: "Pasaporte Americano",
        href: "/services/pasaporte-americano",
      },
      {
        key: "Visa Americana",
        href: "/services/visa-americana",
      },
      {
        key: "Visas Rechazadas/Canceladas",
        href: "/services/visa-rechazada",
      },
      {
        key: "Citas de Emergencia",
        href: "/services/citas-emergencia",
      },
      {
        key: "Actas de Nacimiento",
        href: "/services/actas-nacimiento",
      },
      {
        key: "Traducción de Documentos",
        href: "/services/traduccion-documentos",
      },
      {
        key: "Preparación para Entrevista",
        href: "/services/preparacion-entrevista",
      },
    ],
  },
  {
    key: "Quienes Somos",
    href: "/about",
  },
  {
    key: "Contacto",
    href: "/contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  const handleButtonClick = () => {
    window.location.href = 'https://wa.me/523143526003';
  };

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen({});
  };

  const handleSubmenuClick = (key, e) => {
    if(e) {
      e.stopPropagation();
    }
    if (window.innerWidth < 982) { // Detectar dispositivos móviles
      toggleSubmenu(key);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => {
      if (prev) {
        setSubmenuOpen({});
      }
      return !prev;
    });
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.key} onMouseEnter={() => window.innerWidth >= 769 && setSubmenuOpen((prev) => ({ ...prev, [link.key]: true }))} onMouseLeave={() => window.innerWidth >= 769 && setSubmenuOpen((prev) => ({ ...prev, [link.key]: false }))}>
              <div className="nav-link" onClick={() => handleSubmenuClick(link.key)}>
                <Link
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? "selected" : ""}`}
                  onClick={handleLinkClick}
                >
                  {t(link.key)}
                </Link>
                {link.submenu && (
                  <span
                    className={`arrow ${submenuOpen[link.key] ? "open" : ""} mobile-only`}
                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                    onClick={(e) => handleSubmenuClick(link.key, e)}
                  >
                    &gt;
                  </span>
                )}
              </div>
              {link.submenu && submenuOpen[link.key] && (
                <ul>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.key}>
                      <Link
                        to={sublink.href}
                        className={`nav-link ${location.pathname === sublink.href ? "selected" : ""}`}
                        onClick={handleLinkClick}
                      >
                        {t(sublink.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {menuOpen && (
            <li>
              <button onClick={handleButtonClick} className='appointment-button2' style={{ width: '100%', marginTop: '40px' }}>
                <MDBIcon fas icon="calendar-check" className='me-2' />
                {t("Quiero cita")}
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className="nav-buttons">
        <button onClick={handleButtonClick} className='appointment-button'>
          <MDBIcon fas icon="calendar-check" className='me-2' />
          {t("Quiero cita")}
        </button>
        <button onClick={toggleLanguage} className="language-button">
          <MDBIcon fas icon="language" className="me-2" />
          {i18n.language === "es" ? "English" : "Español"}
        </button>
        <button className="menu-button" onClick={handleMenuToggle}>
          <MDBIcon fas icon="bars" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
