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
    key: "¿Quiénes Somos?",
    href: "/about",
  },
  {
    key: "Nuestros servicios",
    href: "/services",
  },
  {
    key: "FAQ",
    href: "/faq",
  },
  {
    key: "Contacto",
    href: "/contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const toggleLanguage = () => {
    setLoading(true);
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  const handleButtonClick = () => {
    window.location.href = '/contact';
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`contacto ${loading ? 'blur' : ''}`}>
        <div className="contacto">
          <div className="contacto-info">
            <p><a href="mailto:info@fastpass-visas.com"><MDBIcon fas icon="envelope" className='me-2' />info@fastpass-visas.com</a></p>
            <p><a href="tel:+523143526003"><MDBIcon fas icon="phone" className='me-2' />+52 314 352 6003</a></p>
          </div>
          <div className="contacto-social">
            <span>
              {t("Síguenos")}:
            </span>
            <a href="https://www.facebook.com/visasmanzanillo?mibextid=dGKdO6" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://www.instagram.com/fastpass_visa/" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
        </div>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="nav-buttons-container">
            <button className="language-button">
              <MDBIcon fas icon="globe" className='me-2 sizeM' />
              <MDBIcon fas icon="angle-down" />
              <span className="language-text" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
                {i18n.language === "es" ? "English" : "Español"}
              </span>
            </button>

            <button className="menu-button" onClick={handleMenuToggle}>
              <MDBIcon fas icon="bars" className="sizeM" />
            </button>
          </div>

          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
                    onClick={handleLinkClick}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              {menuOpen && (
                <li>
                  <button onClick={handleButtonClick} className='appointment-button' style={{ width: '100%', marginTop: '40px' }}>
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

            <button className="language-button">
              <MDBIcon fas icon="globe" className='me-2' />
              <MDBIcon fas icon="angle-down" />
              <span className="language-text" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
                {i18n.language === "es" ? "English" : "Español"}
              </span>
            </button>

            <button className="menu-button" onClick={handleMenuToggle}>
              <MDBIcon fas icon="bars" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
