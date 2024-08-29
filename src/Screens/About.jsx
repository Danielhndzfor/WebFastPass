import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/About.css';
import Parallax from '../components/Parallax'
import fondoQ from '/fondoQS.jpg'

const About = () => {
    const { t } = useTranslation();
    const values = [
        { img: '/honestidad.webp', title: 'Honestidad', description: 'Descripción de Honestidad.' },
        { img: '/respeto.png', title: 'Respeto', description: 'Descripción de Respeto.' },
        { img: '/integridad.jpg', title: 'Integridad', description: 'Descripción de Integridad.' },
        { img: '/responsabilidad.jpg', title: 'Responsabilidad', description: 'Descripción de Responsabilidad.' },
        { img: '/trabajoequipo.jpeg', title: 'Trabajo en Equipo', description: 'Descripción de Trabajo en Equipo.' },
        { img: '/innovacion.jpeg', title: 'Innovación', description: 'Descripción de Innovación.' },
    ];

    return (
        <>
            <Parallax 
            height="700px"
            backgroundImage={fondoQ}
            title="Nuestra Historia"
            subtitle="Somos una consultoria con mas de 10 años de experiencia"
            linkText={t('Contactar')}
            />
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
                        <img src="/oficina1.webp" alt="Historia" className='imgH' />
                        <img src="/oficina2.webp" alt="Historia" className='imgH' />
                        <img src="/oficina3.webp" alt="Historia" className='imgH' />
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
                <div className="contact-button1">
                    <p className="contact-text">{t('¿Estás listo para tu primera cita?')}</p>
                    <a href="/contact" className="btn btn-primary">{t('Contactar')}</a>
                </div>
            </div>
        </>
    );
};

export default About;

