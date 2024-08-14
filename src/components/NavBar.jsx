import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "/logoP.webp";
import "../css/NavBar.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { FaAngleDown } from 'react-icons/fa';

const links = [
  {
    key: "Inicio",
    href: "/",
  },
  {
    key: "¿Quienes Somos?",
    href: "/about",
  },
  {
    key: "Servicios",
    href: "/services",
    icon: <FaAngleDown />,
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
    key: "Preguntas Frecuentes",
    href: "/faq",
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
    if (e) e.stopPropagation();
    if (window.innerWidth < 982) {
      toggleSubmenu(key);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => {
      if (prev) setSubmenuOpen({});
      return !prev;
    });
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
            <p><a href="tel:+523146885645"><MDBIcon fas icon="phone" className='me-2' />+52 314 352 6003</a></p>
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
            <a href="https://wa.me/523143526003" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="whatsapp" />
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
                        {link.icon && link.icon}
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
