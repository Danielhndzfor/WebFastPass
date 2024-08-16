import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Parallax.css';

function Parallax({ backgroundImage, title, subtitle, linkText }) {
    const { t } = useTranslation();
    const whatsappNumber = '523143526003';
    const textMessage = `Buenas tardes, me gustaría realizar una cita 📅🕒`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    return (
        <div className="parallax-container fade-in" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="parallax-content">
                <h1>{t(title)}</h1>
                <p>{t(subtitle)}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contactbtn">
                    {t(linkText)}
                </a>
            </div>
        </div>
    );
}

export default Parallax;