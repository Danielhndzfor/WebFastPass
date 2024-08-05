import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Parallax.css'; // Asegúrate de que la ruta sea correcta

function Parallax() {
    const { t } = useTranslation();
    const whatsappNumber = '523143526003'; // Reemplaza con el número de WhatsApp de destino
    const textMessage = `Buenas tardes, me gustaría realizar una cita 📅🕒`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    return (
        <div className="parallax-container fade-in">
            <div className="parallax-content">
                <h1>{t('Uniendo Familias')}</h1>
                <p>{t('Especialistas en visas y migración')}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contactbtn">
                    {t('Contáctanos')}
                </a>
            </div>
        </div>
    );
}

export default Parallax;
