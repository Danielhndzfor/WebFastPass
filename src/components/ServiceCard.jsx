// components/ServiceCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/ServiceCard.css';

const ServiceCard = ({ image, title, description, link }) => {
    const { t } = useTranslation();
    const [showToast, setShowToast] = useState(false);
    
    // Lista de servicios en construcción
    const servicesInConstruction = [
        '/services/seguimiento-tramites',
        '/services/canada-eta',
        '/services/canada-visitor-visa',
        '/services/otros-servicios'
    ];
    
    const isInConstruction = servicesInConstruction.includes(link);
    
    const handleClick = (e) => {
        if (isInConstruction) {
            e.preventDefault();
            setShowToast(true);
            
            // Ocultar el toast después de 3 segundos
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    };
    
    return (
        <>
            <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
                <div className="overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {isInConstruction ? (
                        <button 
                            className="service-card-btn construction-btn" 
                            onClick={handleClick}
                        >
                            {t('Conocer Más')}
                        </button>
                    ) : (
                        <Link to={link} className="service-card-btn">{t('Conocer Más')}</Link>
                    )}
                </div>
            </div>
            
            {/* Toast de construcción */}
            {showToast && (
                <div className="construction-toast">
                    <div className="toast-content">
                        <span className="toast-icon">🚧</span>
                        <span className="toast-message">
                            {t('Esta sección está en construcción. ¡Pronto estará disponible!')}
                        </span>
                        <button 
                            className="toast-close" 
                            onClick={() => setShowToast(false)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceCard;


