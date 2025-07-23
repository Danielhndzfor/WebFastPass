import React, { useEffect, useState } from 'react';
import '../../css/DigitalCard/ServicesSection.css';
import logoP from '/logoP.webp';

function ServicesSection({ onBack }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Animación de entrada igual a CardPresentation
        setIsLoaded(true);
    }, []);
    const services = [
        {
            icon: "fa-solid fa-circle-info",
            title: "Cita Informativa",
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-passport",
            title: "Pasaporte Mexicano",
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-passport",
            title: "Pasaporte Americano", 
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-flag-usa",
            title: "Visa Americana",
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-calendar-check", 
            title: "Citas de Emergencia",
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-ban",
            title: "Visas Rechazadas/Canceladas",
            link: "javascript:void(0)"
        },
        {
            icon: "fa-solid fa-file",
            title: "Actas Nacimiento / Traducción",
            link: "javascript:void(0)"
        }
    ];

    const handleServiceClick = (service) => {
        // Analytics tracking (opcional)
        if (window.gtag) {
            window.gtag('event', 'click', {
                event_category: 'services',
                event_label: service.title,
                value: 1
            });
        }
        // Aquí puedes manejar la navegación a cada servicio específico
        console.log(`Servicio seleccionado: ${service.title}`);
    };

    return (
        <div className={`services-container ${isLoaded ? 'loaded' : ''}`}>
            {/* Background decoration igual a CardPresentation */}
            <div className="bg-decoration">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>

            {/* Profile section igual a CardPresentation */}
            <div className="profile-section">
                <img src={logoP} alt="FastPass Visa" className="avatar" />
                
                <div className="profile-info">
                    <h1>Nuestros Servicios</h1>
                </div>
            </div>

            {/* Services section reemplaza contact section */}
            <div className="services-list" style={{marginBottom: 0}}>
                {services.map((service, index) => (
                    <button
                        key={index}
                        className={`service-btn color-${index+1} thin-btn`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleServiceClick(service);
                        }}
                    >
                        <span className="service-icon">
                            <i className={service.icon}></i>
                        </span>
                        <span className="service-title">{service.title}</span>
                    </button>
                ))}
            </div>

            {/* Action buttons section */}
            <div className="actions-section" style={{marginBottom: 0, marginTop: '32px'}}>
                <div className="primary-actions">
                    <button 
                        className="action-btn primary home"
                        onClick={onBack}
                    >
                        <i className="fa-solid fa-house"></i>
                        <span>Volver al Inicio</span>
                    </button>
                </div>
            </div>

            {/* Footer igual a CardPresentation */}
            <div className="footer-section">
                <div className="company-info">
                    <span className="company">FastPass Visa</span>
                    <span className="year">© 2024</span>
                </div>
                <div className="save-contact">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>Guardar contacto</span>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;