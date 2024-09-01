import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Parallax from '../components/Parallax';
import { Link } from 'react-router-dom';
import '../css/Home.css'; // Asegúrate de crear y ajustar el archivo CSS
import ContactForm from '../components/ContactForm';
import fondoH from '/r1.png';
import Contador from '../components/Contador';
import Steps from '/Pasos.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import Facebook from '../components/Facebook';

function Home() {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    
    const handleButtonClick = () => {
        window.location.href = 'tel:+523131313131'; // Cambia por tu número de teléfono
    };


    return (
        <>
            <Parallax
                backgroundImage={fondoH}
                title="¡Uniendo Familias!"
                subtitle="Logrando que su visa sea aprobada"
                linkText="Contáctanos" />

            <section className="services">
                <div className="positionS">
                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Asesoría" */}
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Asesoría</h3>
                        <p>Le ofrecemos una asesoría personalizada para cada situación personal o familiar de manera entendible para todas las edades, efectiva y transparente ya que no utilizamos datos o correos de usuarios de terceros. Lo acompañamos en cada uno de los pasos durante el proceso de trámite de su visa.</p>
                    </div>

                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Trámite" */}
                            <i className="fas fa-passport"></i>
                        </div>
                        <h3>Trámite</h3>
                        <p>Facilitamos el proceso de su trámite, preparando previamente un perfil de solicitante adecuado de manera previa a la solicitud de visa, y posteriormente le enlistamos y sugerimos los documentos personales que deberá llevar con usted a su cita de entrevista.</p>
                    </div>

                    <div className="service-card1 fade-in" >
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Gestión" */}
                            <i className="fas fa-tasks"></i>
                        </div>
                        <h3>Preparación</h3>
                        <p>Lo preparamos para el día de su cita con su solicitud traducida al español y un simulacro de entrevista con la finalidad de que vaya consciente de las preguntas que le realizarán el oficial consular. </p>
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
                <div>
                    <Facebook />
                </div>

                <div>
                    
                </div>
            </section>

            <section className="contadores">
                <div className="contadores-grid">
                    <Contador
                        end={10}
                        duration={2000}
                        id="counter1"
                        texto="Años de Experiencia"
                        icon=""
                        icon1="+"
                    />
                    <Contador
                        end={80}
                        duration={2000}
                        id="counter2"
                        texto="Tasa de Aprobación"
                        icon="%"
                        icon1="+"
                    />
                    <Contador
                        end={1000}
                        duration={2000}
                        id="counter3"
                        texto="Trámites Realizados"
                        icon1="+"
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
