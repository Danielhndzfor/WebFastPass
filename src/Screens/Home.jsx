import React from 'react';
import { useTranslation } from 'react-i18next';
import Parallax from '../components/Parallax';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Asegúrate de crear y ajustar el archivo CSS
import ContactForm from '../components/ContactForm';
import fondoH from '/r1.webp'
import Contador from '../components/Contador';
import Steps from '/Pasos.png'
import { MDBIcon } from 'mdb-react-ui-kit';

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
    const handleButtonClick = () => {
        window.location.href = 'https://wa.me/523143526003';
    };

    return (
        <>
            <Parallax
                backgroundImage={fondoH}
                title="Uniendo Familias"
                subtitle="Logrando que su visa sea aceptada"
                linkText="Contáctanos" />

            <section className="services">
                <div className="positionS">
                    <div className="service-card1">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Asesoría" */}
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Asesoría</h3>
                        <p>Ofrecemos asesoría personalizada para ayudarte a entender los requisitos y procesos necesarios.</p>
                    </div>
                    <div className="service-card1">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Gestión" */}
                            <i className="fas fa-tasks"></i>
                        </div>
                        <h3>Gestión</h3>
                        <p>Nos encargamos de gestionar todos los documentos y procesos necesarios para tu solicitud.</p>
                    </div>
                    <div className="service-card1">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Trámite" */}
                            <i className="fas fa-passport"></i>
                        </div>
                        <h3>Trámite</h3>
                        <p>Facilitamos el trámite de pasaportes y visas, asegurando que todo se realice de manera eficiente y correcta.</p>
                    </div>
                </div>
                <Link to="/services" className="more-services-button" onClick={scrollToTop}>{t('Explorar Servicios')}</Link>
            </section>

            <section className="steps">
                <div className="imageS">
                    <img src={Steps} alt="Pasos para Tramite" className='imgSteps' />
                </div>
                <button onClick={handleButtonClick} className='appointment-button'>
                    <MDBIcon fas icon="calendar-check" className='me-2' />
                    {t('Quiero cita')}
                </button>
            </section>

            <section className="facebook">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisasmanzanillo%3Fmibextid%3DdGKdO6&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className='faceEscritorio' width="500" height="700" style={{ border: 'none', borderRadius: '20px' , overflow: 'hidden' }} seamless allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisasmanzanillo%3Fmibextid%3DdGKdO6&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className='faceMovil' width="300" height="400" style={{ border: 'none', borderRadius: '20px' , overflow: 'hidden' }} seamless allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </section>

            <section className="contadores">
                <div className="contadores-grid">
                    <Contador
                        end={15}
                        duration={2000}
                        id="counter1"
                        texto="Años de Experiencia"
                        icon="+"
                    />
                    <Contador
                        end={80}
                        duration={2000}
                        id="counter2"
                        texto="Tasa de Aprobación"
                        icon="%"
                    />
                    <Contador
                        end={1000}
                        duration={2000}
                        id="counter3"
                        texto="Trámites Realizados"
                        icon="+"
                    />
                </div>
            </section>

            <section className="contact">
                <ContactForm />
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
