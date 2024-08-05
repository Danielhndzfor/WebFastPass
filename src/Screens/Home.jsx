import React from 'react';
import { useTranslation } from 'react-i18next';
import Parallax from '../components/Parallax';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Asegúrate de crear y ajustar el archivo CSS
import Contact from '../Screens/Contact';

const servicesData = [
    {
        image: '/cita.webp', // Cambia por tus propias imágenes
        title: 'Cita Informativa',
        description: 'Brindamos asesoría personalizada para tu trámite de visa y pasaporte.',
        link: '/services/cita-informativa'
    },
    {
        image: '/visa.webp', // Cambia por tus propias imágenes
        title: 'Visa Americana',
        description: 'Asistimos en todos los pasos para la obtención de tu visa.',
        link: '/services/visa-americana'
    },
    {
        image: '/Pasaporte-mexicano.webp', // Cambia por tus propias imágenes
        title: 'Pasaporte Mexicano',
        description: 'Gestionamos tu pasaporte de manera rápida y eficiente.',
        link: '/services/pasaporte-mexicano'
    }
];

function Home() {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Parallax />
            <section className="intro fade-in">
                <h1>{t('Bienvenido a Fast Pass Visas')}</h1>
                <p>{t('Tu aliado confiable para todas tus necesidades de visa.')}</p>
                <Link to="/about" className="cta-button" onClick={scrollToTop}>{t('Conócenos Más')}</Link>
            </section>

            <section className="services">
                <h2>{t('Nuestros Servicios')}</h2>
                <div className="services-section">
                    <div className="services-grid" onClick={scrollToTop}>
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={index}
                                image={service.image}
                                title={t(service.title)}
                                description={t(service.description)}
                                link={service.link}
                                
                            />
                        ))}
                    </div>
                </div>
                <Link to="/services" className="more-services-button" onClick={scrollToTop}>{t('Explora Más Servicios')}</Link>
            </section>

            <section className="contact">
                <Contact />
            </section>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.490087641858!2d-104.32026687148569!3d19.109395266080426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d7d8f40f55d9%3A0x651936aa4f7f27f!2sFastpass%20Visa%20(Tramite%20de%20Pasaportes%20y%20Visas)!5e0!3m2!1ses!2smx!4v1722233066712!5m2!1ses!2smx"
                    width="100%"
                    height="400"
                    style={{ border: 0 }} // Cambiado a objeto
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}

export default Home;
