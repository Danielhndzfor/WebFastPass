// src/hooks/useTracking.js
import { useEffect } from 'react';
import { useCookies } from '../CookieContext';

// Hook para manejar los scripts de tracking
export const useTracking = () => {
    const { cookies } = useCookies();

    useEffect(() => {
        // Google Analytics
        if (cookies.analytics) {
            loadGoogleAnalytics();
        } else {
            removeGoogleAnalytics();
        }
    }, [cookies]);
};

// Función para cargar Google Analytics
const loadGoogleAnalytics = () => {
    // Tu ID real de Google Analytics
    const GA_MEASUREMENT_ID = 'G-DZQ5MC0EM3'; 
    
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
        // Cargar el script de Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Configurar gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
        window.gtag = gtag;
    }
};

// Función para remover Google Analytics
const removeGoogleAnalytics = () => {
    // Remover scripts de GA
    const gaScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
    gaScripts.forEach(script => script.remove());
    
    // Limpiar dataLayer
    if (window.dataLayer) {
        window.dataLayer = [];
    }
    delete window.gtag;
};

// Funciones para tracking de eventos personalizados
export const trackEvent = (eventName, eventData = {}) => {
    // Obtener cookies desde localStorage porque no podemos usar el hook aquí
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('event', eventName, eventData);
    }
};

export const trackPageView = (pagePath) => {
    // Obtener cookies desde localStorage porque no podemos usar el hook aquí
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('config', 'G-DZQ5MC0EM3', {
            page_path: pagePath
        });
    }
};

// Función para trackear tiempo en página
export const trackTimeOnPage = (pagePath, timeSpent) => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('event', 'page_engagement', {
            page_path: pagePath,
            time_spent_seconds: timeSpent,
            engagement_time_msec: timeSpent * 1000
        });
    }
};

// Función para trackear scroll depth (qué tan abajo llega el usuario)
export const trackScrollDepth = (percentage) => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('event', 'scroll', {
            percent_scrolled: percentage
        });
    }
};

// Función para trackear clicks en elementos específicos
export const trackElementClick = (elementName, elementType = 'button') => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('event', 'click', {
            element_name: elementName,
            element_type: elementType,
            page_location: window.location.href
        });
    }
};

// Función para trackear descargas de archivos
export const trackFileDownload = (fileName, fileType) => {
    const savedPreferences = localStorage.getItem('cookie-preferences');
    const cookies = savedPreferences ? JSON.parse(savedPreferences) : { analytics: false };
    
    if (cookies.analytics && window.gtag) {
        window.gtag('event', 'file_download', {
            file_name: fileName,
            file_extension: fileType,
            page_location: window.location.href
        });
    }
};
