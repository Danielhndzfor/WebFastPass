// src/components/CookieSettings.jsx
import React, { useState, useEffect } from 'react';
import { useCookies } from '../CookieContext';
import '../css/CookieSettings.css'; // Para estilos, crea este archivo después

const CookieSettings = ({ isOpen, onClose }) => {
    const { cookies, updateCookies } = useCookies();
    const [preferences, setPreferences] = useState({
        analytics: cookies.analytics,
        functional: cookies.functional,
    });

    const handleToggle = (type) => {
        setPreferences((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    const handleSave = () => {
        updateCookies(preferences);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="cookie-settings-overlay">
            <div className="cookie-settings">
                <h2>Preferencias de Cookies</h2>
                <div className="cookie-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={() => handleToggle('analytics')}
                        />
                        Cookies de Analíticas
                    </label>
                </div>
                <div className="cookie-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={() => handleToggle('functional')}
                        />
                        Cookies Funcionales
                    </label>
                </div>
                <div className="cookie-settings-buttons">
                    <button onClick={handleSave}>Guardar Preferencias</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default CookieSettings;
