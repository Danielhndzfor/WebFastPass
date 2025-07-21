// src/hooks/useSEO.js
import { useEffect } from 'react';

export const useSEO = (seoData) => {
    useEffect(() => {
        // Título de la página
        document.title = seoData.title || 'FastPass Visa - Consultoría de Trámites Migratorios en Manzanillo, Colima';

        // Meta descripción
        updateMetaTag('description', seoData.description || 'Consultoría especializada en trámites de visas americanas, pasaportes mexicanos y americanos en Manzanillo, Colima. Más de 10 años de experiencia.');

        // Meta keywords
        updateMetaTag('keywords', seoData.keywords || 'visa americana, pasaporte mexicano, pasaporte americano, trámites migratorios, Manzanillo, Colima, consultoría, FastPass Visa');

        // Open Graph (Facebook)
        updateMetaTag('og:title', seoData.title, 'property');
        updateMetaTag('og:description', seoData.description, 'property');
        updateMetaTag('og:type', seoData.type || 'website', 'property');
        updateMetaTag('og:url', seoData.url || window.location.href, 'property');
        updateMetaTag('og:image', seoData.image || '/logoP.webp', 'property');
        updateMetaTag('og:site_name', 'FastPass Visa', 'property');
        updateMetaTag('og:locale', 'es_MX', 'property');

        // Twitter Cards
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', seoData.title);
        updateMetaTag('twitter:description', seoData.description);
        updateMetaTag('twitter:image', seoData.image || '/logoP.webp');

        // Datos estructurados locales
        updateStructuredData(seoData);

        // Canonical URL
        updateCanonicalUrl(seoData.url || window.location.href);

    }, [seoData]);
};

// Función auxiliar para actualizar meta tags
const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return;
    
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
};

// Función para actualizar URL canónica
const updateCanonicalUrl = (url) => {
    let link = document.querySelector("link[rel='canonical']");
    if (link) {
        link.setAttribute('href', url);
    } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
    }
};

// Función para datos estructurados (JSON-LD)
const updateStructuredData = (seoData) => {
    const baseStructuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FastPass Visa",
        "description": "Consultoría especializada en trámites de visas y pasaportes en Manzanillo, Colima",
        "url": "https://www.fastpass-visas.com",
        "telephone": "+52-314-688-5645",
        "email": "info@fastpass-visas.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5",
            "addressLocality": "Valle de las Garzas",
            "addressRegion": "Colima",
            "postalCode": "28219",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.109395",
            "longitude": "-104.320267"
        },
        "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-14:00"
        ],
        "areaServed": [
            "Manzanillo",
            "Colima",
            "Jalisco",
            "Michoacán"
        ],
        "serviceType": [
            "Visa Americana",
            "Pasaporte Mexicano",
            "Pasaporte Americano",
            "Trámites Migratorios",
            "Citas de Emergencia",
            "Preparación de Entrevistas"
        ],
        "priceRange": "$$",
        "image": "https://www.fastpass-visas.com/logoP.webp"
    };

    // Personalizar datos estructurados según la página
    if (seoData.structuredData) {
        Object.assign(baseStructuredData, seoData.structuredData);
    }

    // Remover script anterior si existe
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
        existingScript.remove();
    }

    // Agregar nuevo script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(baseStructuredData);
    document.head.appendChild(script);
};
