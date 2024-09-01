// src/CookieContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CookieContext = createContext();

export const useCookies = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
    const [cookies, setCookies] = useState({
        analytics: false,
        marketing: false,
        functional: true,
    });

    useEffect(() => {
        const savedPreferences = localStorage.getItem('cookie-preferences');
        if (savedPreferences) {
            setCookies(JSON.parse(savedPreferences));
        }
    }, []);

    const updateCookies = (newPreferences) => {
        setCookies(newPreferences);
        localStorage.setItem('cookie-preferences', JSON.stringify(newPreferences));
    };

    return (
        <CookieContext.Provider value={{ cookies, updateCookies }}>
            {children}
        </CookieContext.Provider>
    );
};
