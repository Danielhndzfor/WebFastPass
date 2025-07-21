import React, { useEffect, useState } from 'react';
import '../css/CardPresentation.css';

function CardPresentation() {
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

    return (
        <div className={`card-presentation ${isLoaded ? 'loaded' : ''}`}>
            <header>
                <img src="/logoP.webp" alt="FastPass Visa" />
            </header>
            
            <h1>Angel I. López Rivera</h1>
            <h2>Asesor en pasaportes y visa americana</h2>
            
            <div className="contact-info">
                <p><i className="fa-solid fa-phone"></i> +52 314 352 6003</p>
                <p><i className="fa-solid fa-envelope"></i> info@fastpass-visas.com</p>
            </div>
            
            <div className="buttons">
                <button 
                    className="whatsapp-button"
                    onClick={() => handleButtonClick('whatsapp', 'https://wa.me/523143526003')}
                >
                    <i className="fa-brands fa-whatsapp"></i>
                    WhatsApp
                </button>
                
                <button 
                    className="facebook-button"
                    onClick={() => handleButtonClick('facebook', 'https://www.facebook.com/visasmanzanillo?mibextid=dGKdO6')}
                >
                    <i className="fa-brands fa-square-facebook"></i>
                    Facebook
                </button>
                
                <button 
                    className="instagram-button"
                    onClick={() => handleButtonClick('instagram', 'https://www.instagram.com/fastpass_visa/')}
                >
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                </button>
                
                <button 
                    className="location-button"
                    onClick={() => handleButtonClick('location', 'https://maps.app.goo.gl/4VwsNwR3GQ7nhRyw8')}
                >
                    <i className="fa-solid fa-location-dot"></i>
                    Ubicación
                </button>
                
                <button 
                    className="services-button"
                    onClick={() => handleButtonClick('website', 'https://fastpass-visas.com/')}
                >
                    <i className="fa-solid fa-globe"></i>
                    Sitio Web
                </button>
            </div>
            
            <footer>
                <div>
                    <p>FastPass Visa &copy; 2024</p>
                </div>
            </footer>
        </div>
    );
}

export default CardPresentation;