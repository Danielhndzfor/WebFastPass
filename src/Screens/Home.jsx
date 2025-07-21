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

function Home() {
    const { t } = useTranslation();

    const testimonials = [
        {
            text: t("Gracias a FastPass obtuve mi visa sin problemas. Su asesoría fue excelente y me guiaron paso a paso."),
            author: t("María González"),
            image: "/testimonio1.svg"
        },
        {
            text: t("Proceso rápido y eficiente. Recomiendo sus servicios al 100%. Personal muy profesional."),
            author: t("Carlos Rodríguez"),
            image: "/testimonio2.svg"
        },
        {
            text: t("La preparación para la entrevista fue clave para mi aprobación. Excelente servicio personalizado."),
            author: t("Ana López"),
            image: "/testimonio3.svg"
        },
        {
            text: t("Excelente atención y acompañamiento durante todo el proceso. Muy recomendable para todos."),
            author: t("Roberto Martín"),
            image: "/testimonio4.svg"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    
    const handleButtonClick = () => {
        window.location.href = '/contact'; // Cambia por tu número de teléfono
    };


    return (
        <>
            <Parallax
                backgroundImage={fondoH}
                title={t("¡Uniendo Familias!")}
                subtitle={t("Logrando que su visa sea aprobada")}
                linkText={t("Contactar Ahora")} />

            <section className="services">
                <div className="positionS">
                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Asesoría" */}
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>{t("Asesoría")}</h3>
                        <p>{t("Proporcionamos una asesoría personalizada, adaptada a su situación personal, familiar o laboral. Utilizamos un lenguaje claro y accesible para todas las edades, priorizando la transparencia y la entrega de información precisa para guiarlo de manera efectiva en cada paso del proceso.")}</p>
                    </div>

                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Trámite" */}
                            <i className="fas fa-passport"></i>
                        </div>
                        <h3>{t("Trámite")}</h3>
                        <p>{t("Simplificamos y agilizamos su proceso de trámite. Diseñamos un perfil de solicitante adaptado a sus necesidades, preparamos y verificamos la documentación requerida, y nos aseguramos de que todo esté en orden antes de sus citas, garantizando un proceso eficiente y sin contratiempos.")}</p>
                    </div>

                    <div className="service-card1 fade-in" >
                        <div className="icon-container">
                            {/* Aquí puedes colocar un ícono adecuado para "Gestión" */}
                            <i className="fas fa-tasks"></i>
                        </div>
                        <h3>{t("Preparación")}</h3>
                        <p>{t("Le brindamos una preparación completa para su entrevista consular, incluyendo la traducción de su solicitud al español y un simulacro de preguntas y respuestas con el fin de que asista a su cita con seguridad y confianza, aumentando sus posibilidades de aprobación y obtener la visa que necesita.")}</p>
                    </div>

                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h3>{t("Acompañamiento")}</h3>
                        <p>{t("Le guiamos y apoyamos en cada etapa del proceso, desde el inicio hasta la conclusión. Contamos con disponibilidad para resolver sus dudas, ofrecer soporte personalizado y asegurarnos de que esté preparado y tranquilo en cada paso.")}</p>
                    </div>

                    <div className="service-card1 fade-in">
                        <div className="icon-container">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>{t("Seguridad")}</h3>
                        <p>{t("Protegemos su información personal con los más altos estándares de confidencialidad y ética. No retenemos documentos, datos de usuario ni contraseñas, asegurándonos de que usted mantenga el control total de su información en todo momento.")}</p>
                    </div>

                    
                    
                </div>
                <Link to="/services" className="more-services-button" onClick={scrollToTop}>{t('Conocer nuestros Servicios')}</Link>
            </section>

            <section className="steps">
                <div className="imageS">
                    <img src={Steps} alt="Pasos para Tramite" className='imgSteps' />
                </div>
                <button onClick={handleButtonClick} className='appointment-button'>
                    <MDBIcon fas icon="calendar-check" className='me-2 ' />
                    {t('Agendar Cita')}
                </button>
            </section>

            <section className="testimonials">
                <div className="testimonials-container">
                    <h2>{t("Testimonios")}</h2>
                    <div className="testimonials-scroll-container">
                        <div className="testimonials-track">
                            {/* Primera serie de testimonios */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`first-${index}`} className="testimonial-card">
                                    <div className="testimonial-image">
                                        <img src={testimonial.image} alt="Cliente satisfecho" />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="testimonial-rating">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                        </div>
                                        <p>{testimonial.text}</p>
                                        <span>{testimonial.author}</span>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Segunda serie de testimonios (duplicada para efecto scroll infinito) */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`second-${index}`} className="testimonial-card">
                                    <div className="testimonial-image">
                                        <img src={testimonial.image} alt="Cliente satisfecho" />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="testimonial-rating">
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                            <span className="star">★</span>
                                        </div>
                                        <p>{testimonial.text}</p>
                                        <span>{testimonial.author}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="contadores">
                <div className="contadores-grid">
                    <Contador
                        end={10}
                        duration={2000}
                        id="counter1"
                        texto={t("Años de Experiencia")}
                        icon=""
                        icon1="+"
                    />
                    <Contador
                        end={80}
                        duration={2000}
                        id="counter2"
                        texto={t("Tasa de Aprobación")}
                        icon="%"
                        icon1="+"
                    />
                    <Contador
                        end={1000}
                        duration={2000}
                        id="counter3"
                        texto={t("Trámites Realizados")}
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
