import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/About.css';

const About = () => {
    const { t } = useTranslation();
    const values = [
        { img: '/honestidad.webp', title: 'Honestidad', description: 'Descripción de Honestidad.' },
        { img: '/honestidad.webp', title: 'Respeto', description: 'Descripción de Respeto.' },
        { img: '/honestidad.webp', title: 'Integridad', description: 'Descripción de Integridad.' },
        { img: '/honestidad.webp', title: 'Responsabilidad', description: 'Descripción de Responsabilidad.' },
        { img: '/honestidad.webp', title: 'Trabajo en Equipo', description: 'Descripción de Trabajo en Equipo.' },
        { img: '/honestidad.webp', title: 'Innovación', description: 'Descripción de Innovación.' },
    ];

    return (
        <div className="about-container">
            {/* Historia */}
            <section className="section history-section fade-in">
                <div className="content">
                    <h2>{t('Nuestra Historia')}</h2>
                    <p>
                        {t('Aquí puedes poner un resumen de la historia de la empresa, cómo comenzó, los hitos importantes y otros detalles relevantes.')}
                    </p>
                </div>
                <div className="image">
                    <img src="/oficina1.webp" alt="Historia" />
                    <img src="/oficina2.webp" alt="Historia" />
                    <img src="/oficina3.webp" alt="Historia" />
                </div>
            </section>

            {/* Misión */}
            <section className="section mission-section fade-in">
                <div className="image">
                    <img src="/mision.webp" alt="Misión" className="section-image" />
                </div>
                <div className="content">
                    <h2>{t('Misión')}</h2>
                    <p>
                        {t('Descripción de la misión de la empresa, sus objetivos y propósito.')}
                    </p>
                </div>
            </section>

            {/* Visión */}
            <section className="section vision-section">
                <div className="image">
                    <img src="/vision.webp" alt="Visión" className="section-image" />
                </div>
                <div className="content">
                    <h2>{t('Visión')}</h2>
                    <p>
                        {t('Descripción de la visión de la empresa, sus metas a largo plazo y aspiraciones.')}
                    </p>
                </div>
            </section>

            {/* Valores */}
            <div className="values-section">
                <h2>{t('Valores')}</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div className="values-card" key={index}>
                            <img src={value.img} alt={value.title} />
                            <h3>{t(value.title)}</h3>
                            <p>{t(value.description)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón de contacto */}
            <div className="contact-button">
                <p className="contact-text">{t('¿Estás listo para tu primera cita?')}</p>
                <a href="/contact" className="btn btn-primary">{t('Contactar')}</a>
            </div>
        </div>
    );
};

export default About;

