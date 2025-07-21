// src/components/CookieBanner.jsx
import React, { useEffect, useState } from 'react';
import { useCookies } from '../CookieContext';
import '../css/Cookie-banner.css';
import CookieSettings from './CookieSettings';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const { cookies, updateCookies } = useCookies();

    useEffect(() => {
        const savedPreferences = localStorage.getItem('cookie-preferences');
        if (!savedPreferences) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            analytics: true,
            functional: true,
        };
        updateCookies(allAccepted);
        setShowBanner(false);
    };

    const handleCustomize = () => {
        setShowSettings(true);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
        setShowBanner(false);
    };

    return (
        <>
            {showBanner && (
                <div className="cookie-banner">
                    <p>Este sitio utiliza cookies para mejorar tu experiencia.</p>
                    <div className="cookie-banner-buttons">
                        <button onClick={handleAcceptAll}>Aceptar Todas</button>
                        <button onClick={handleCustomize}>Personalizar</button>
                    </div>
                </div>
            )}
            <CookieSettings isOpen={showSettings} onClose={handleCloseSettings} />
        </>
    );
};

export default CookieBanner;


