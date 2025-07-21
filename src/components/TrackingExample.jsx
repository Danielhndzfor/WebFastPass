// src/components/TrackingExample.jsx
import React from 'react';
import { trackEvent, trackElementClick, trackFileDownload } from '../hooks/useTracking';

// Ejemplo de cómo usar el tracking en componentes
const TrackingExample = () => {
    
    const handleContactButtonClick = () => {
        // Tracking de evento personalizado
        trackEvent('contact_button_click', {
            page: 'home',
            section: 'hero'
        });
        
        // O usar la función específica para clicks
        trackElementClick('contact_button', 'cta_button');
        
        // Tu lógica de navegación aquí
        console.log('Navegando a contacto...');
    };

    const handleServiceClick = (serviceName) => {
        trackEvent('service_click', {
            service_name: serviceName,
            category: 'services'
        });
        
        trackElementClick(`service_${serviceName}`, 'service_card');
    };

    const handleFormSubmit = (formData) => {
        trackEvent('form_submit', {
            form_type: 'contact',
            has_phone: !!formData.phone,
            has_email: !!formData.email
        });
    };

    const handleFileDownload = (fileName) => {
        // Trackear descargas de archivos
        const fileExtension = fileName.split('.').pop();
        trackFileDownload(fileName, fileExtension);
    };

    return (
        <div>
            <button onClick={handleContactButtonClick}>
                Contactar Ahora
            </button>
            
            <button onClick={() => handleServiceClick('visa_americana')}>
                Visa Americana
            </button>
            
            <a 
                href="/documents/guia-visa.pdf" 
                onClick={() => handleFileDownload('guia-visa.pdf')}
                download
            >
                Descargar Guía
            </a>
        </div>
    );
};

export default TrackingExample;
