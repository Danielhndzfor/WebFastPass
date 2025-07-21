// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadcrumbNameMap = {
        '/': 'Inicio',
        '/services': 'Servicios',
        '/services/visa-americana': 'Visa Americana',
        '/services/pasaporte-mexicano': 'Pasaporte Mexicano',
        '/services/pasaporte-americano': 'Pasaporte Americano',
        '/services/citas-emergencia': 'Citas de Emergencia',
        '/services/cita-informativa': 'Cita Informativa',
        '/services/actas-nacimiento': 'Actas de Nacimiento',
        '/services/visa-rechazada': 'Visa Rechazada',
        '/services/adelantar-cita': 'Adelantar Cita',
        '/services/preparacion-entrevista': 'Preparación de Entrevista',
        '/services/poder-notarial-mexicano': 'Poder Notarial Mexicano',
        '/services/poder-notarial-americano': 'Poder Notarial Americano',
        '/services/formato-sam-menores-mexico': 'Formato SAM',
        '/services/traduccion-documentos': 'Traducción de Documentos',
        '/about': 'Acerca de Nosotros',
        '/contact': 'Contacto',
        '/faq': 'Preguntas Frecuentes'
    };

    const generateStructuredData = () => {
        const items = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.fastpass-visas.com/"
            }
        ];

        let currentPath = '';
        pathnames.forEach((name, index) => {
            currentPath += `/${name}`;
            const breadcrumbName = breadcrumbNameMap[currentPath] || name;
            
            items.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": breadcrumbName,
                "item": `https://www.fastpass-visas.com${currentPath}`
            });
        });

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    };

    React.useEffect(() => {
        // Solo ejecutar si no estamos en la página principal
        if (location.pathname === '/') {
            return;
        }

        // Agregar datos estructurados de breadcrumbs
        const structuredData = generateStructuredData();
        const existingScript = document.querySelector('script[data-breadcrumb="true"]');
        
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-breadcrumb', 'true');
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.querySelector('script[data-breadcrumb="true"]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [location.pathname]);

    // No mostrar breadcrumbs en la página principal
    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className="breadcrumbs" aria-label="Navegación de migas de pan">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                        Inicio
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const breadcrumbName = breadcrumbNameMap[routeTo] || name;

                    return (
                        <li key={routeTo} className="breadcrumb-item">
                            <span className="breadcrumb-separator">›</span>
                            {isLast ? (
                                <span className="breadcrumb-current" aria-current="page">
                                    {breadcrumbName}
                                </span>
                            ) : (
                                <Link to={routeTo} className="breadcrumb-link">
                                    {breadcrumbName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
