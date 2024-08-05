import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Parallax.css'; // Asegúrate de que la ruta sea correcta

function Parallax() {
    const { t } = useTranslation();

    return (
        <div className="parallax-container fade-in">
            <div className="parallax-content">
                <h1>{t('Uniendo Familias')}</h1>
                <p>{t('Especialistas en visas y migración')}</p>
            </div>
        </div>
    );
}

export default Parallax;