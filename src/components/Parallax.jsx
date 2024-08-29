import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../css/Parallax.css';

function Parallax({ backgroundImage, title, subtitle, linkText }) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="parallax-container fade-in" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="parallax-content">
                <h1>{t(title)}</h1>
                <p>{t(subtitle)}</p>
                <button onClick={() => navigate('/contact')} className="contactbtn">
                    {t(linkText)}
                </button>
            </div>
        </div>
    );
}

export default Parallax;
