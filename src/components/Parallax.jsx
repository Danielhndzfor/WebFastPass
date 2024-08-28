import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Parallax.css';
import Contact from '../Screens/Contact';

function Parallax({ backgroundImage, title, subtitle, linkText }) {
    const { t } = useTranslation();

    return (
        <div className="parallax-container fade-in" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="parallax-content">
                <h1>{t(title)}</h1>
                <p>{t(subtitle)}</p>
                <a href={Contact} rel="noopener noreferrer" className="contactbtn">
                    {t(linkText)}
                </a>
            </div>
        </div>
    );
}

export default Parallax;