import React, { useEffect, useState } from 'react';
import '../../css/DigitalCard/CardPresentation.css';
import logoP from '/logoP.webp';

function CardPresentation({ onShowServices }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Animación de entrada
        setIsLoaded(true);
    }, []);

    const handleButtonClick = (platform, url) => {
        // Analytics tracking (opcional)
        if (window.gtag) {
            window.gtag('event', 'click', {
                event_category: 'social_media',
                event_label: platform,
                value: 1
            });
        }

        // Abrir enlace
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleContactClick = (type, value) => {
        // Analytics tracking (opcional)
        if (window.gtag) {
            window.gtag('event', 'click', {
                event_category: 'contact',
                event_label: type,
                value: 1
            });
        }

        if (type === 'phone') {
            window.location.href = `tel:${value}`;
        } else if (type === 'email') {
            window.location.href = `mailto:${value}`;
        }
    };

    return (
        <div className={`card-presentation ${isLoaded ? 'loaded' : ''}`}>

            {/* Profile section */}
            <div className="profile-section">
                <img src={logoP} alt="FastPass Visa" className="avatar" />

                <div className="profile-info">
                    <h1>Angel I. López Rivera</h1>
                    <p className="specialty">Especialista en visas y pasaportes</p>
                </div>
            </div>

            {/* Contact info */}
            <div className="contact-section">
                <div
                    className="contact-item clickable"
                    onClick={() => handleContactClick('phone', '+523146885645')}
                >
                    <div className="contact-icon phone">
                        <i className="fa-solid fa-building"></i>
                    </div>
                    <span>+52 314 688 5645</span>
                </div>
                <div
                    className="contact-item clickable"
                    onClick={() => handleContactClick('phone', '+523143526003')}
                >
                    <div className="contact-icon phone">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <span>+52 314 352 6003</span>
                </div>
                <div
                    className="contact-item clickable"
                    onClick={() => handleContactClick('email', 'info@fastpass-visas.com')}
                >
                    <div className="contact-icon email">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <span>info@fastpass-visas.com</span>
                </div>
            </div>

            {/* Action buttons */}
            <div className="actions-section">
                <div className="primary-actions">
                    <button
                        className="action-btn primary whatsapp"
                        onClick={() => handleButtonClick('whatsapp', 'https://wa.me/523143526003')}
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>Contactar por WhatsApp</span>
                    </button>

                    <button
                        className="action-btn primary website"
                        onClick={() => handleButtonClick('website', 'https://fastpass-visas.com/')}
                    >
                        <i className="fa-solid fa-globe"></i>
                        <span>Visitar Sitio Web</span>
                    </button>

                    <button
                        className="action-btn primary services"
                        onClick={onShowServices}
                    >
                        <i className="fa-solid fa-list"></i>
                        <span>Ver Servicios</span>
                    </button>
                </div>

                <div className="secondary-actions">
                    <button
                        className="social-btn facebook"
                        onClick={() => handleButtonClick('facebook', 'https://www.facebook.com/visasmanzanillo?mibextid=dGKdO6')}
                        aria-label="Facebook"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </button>

                    <button
                        className="social-btn instagram"
                        onClick={() => handleButtonClick('instagram', 'https://www.instagram.com/fastpass_visa/')}
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </button>

                    <button
                        className="social-btn location"
                        onClick={() => handleButtonClick('location', 'https://maps.app.goo.gl/4VwsNwR3GQ7nhRyw8')}
                        aria-label="Ubicación"
                    >
                        <i className="fa-solid fa-location-dot"></i>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="footer-section">
                <div className="company-info">
                    <span className="company">FastPass Visa</span>
                    <span className="year">© 2025</span>
                </div>
                <div className="save-contact">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>Guardar contacto</span>
                </div>
            </div>
        </div>
    );
}

export default CardPresentation;