import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/About.css';
import Parallax from '../components/Parallax'
import fondoQ from '/fondoQS.jpg'
import { MDBIcon } from 'mdb-react-ui-kit';

const About = () => {
    const { t } = useTranslation();
    const values = [
        { img: '/integridad.jpg', title: 'Integridad', description: 'Nos comprometemos a actuar con honestidad y transparencia en todas nuestras actividades. La confianza es la base de nuestra relación con los clientes y colaboradores.' },
        { img: '/excelencia.jpg', title: 'Excelencia en el servicio', description: 'Nos esforzamos por ofrecer un servicio de alta calidad, superando las expectativas de nuestros clientes en cada interacción.' },
        { img: '/confidencial.png', title: 'Confidencialidad', description: 'Protegemos la información personal y sensible de nuestros clientes, asegurando que todos los datos se manejen con el máximo nivel de seguridad y privacidad.' },
        { img: '/responsabilidad.jpg', title: 'Responsabilidad', description: 'Asumimos la responsabilidad de nuestras acciones y decisiones, garantizando que todos nuestros procesos se realicen con profesionalismo y ética.' },
        { img: '/compromiso.jpg', title: 'Compromiso', description: 'Estamos dedicados a cumplir con nuestros compromisos y a brindar un apoyo constante a nuestros clientes durante todo el proceso de obtención de visas y pasaportes.' },
        { img: '/respeto.png', title: 'Respeto', description: 'Tratamos a todos nuestros clientes y colaboradores con respeto, promoviendo un ambiente inclusivo y diverso donde todos se sientan valorados.' },
        { img: '/orientacion.webp', title: 'Orientación al cliente', description: 'Colocamos las necesidades y expectativas de nuestros clientes en el centro de todas nuestras decisiones, proporcionando un servicio personalizado y atento.' },
        { img: '/calidad.png', title: 'Calidad', description: 'Nos esforzamos por mantener altos estándares de calidad en todos los aspectos de nuestro negocio, desde la atención al cliente hasta la gestión de trámites.' },
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
                    <div className="content-wrapper">
                        <div className="content-column">
                            <div className="text-content">
                            <MDBIcon fas icon="users" className='iconQ' /><h2>{t('Acerca de Nosotros')}</h2>
                                <p>
                                    {t('FastPass Visa, con más de 10 años de experiencia en el mercado de asesoría y gestión de visas en el estado de Colima, se ha destacado por su excelencia en el servicio al cliente y su compromiso con la calidad. Desde nuestros inicios hemos mantenido un compromiso inquebrantable con la calidad, la integridad y la atención personalizada a las necesidades individuales de cada persona. Nuestra reputación se ha forjado sobre la base de la confianza, transparencia y la satisfacción de nuestros clientes, quienes nos han elegido como su socio de confianza en el proceso para la obtención de visa.')}
                                </p>
                            </div>
                        </div>

                        <div className="content-column">
                            <div className="text-content">
                            <MDBIcon fas icon="lightbulb" className='iconQ' /><h2>{t('Propuesta de Valor')}</h2>
                                <p>
                                    {t('Destacamos la experiencia y profesionalismo de la empresa que por mas de una década ha incursionado en la asesoría y gestión de pasaportes y trámites de visas americanas. Nos enfocamos en la renovación y asesoría para trámites de primera vez, enfocandonos en la rapidez, eficiencia en el proceso de solicitud y transparencia. Resaltamos el compromiso de unir familias al facilitar la información, eliminando la tediosidad del proceso para lograr la obtención de visa y permitir que las personas viajen y se reúnan con sus seres queridos en Estados Unidos.')}
                                </p>
                            </div>
                        </div>
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
                            {t('Brindar asesoría y gestión de pasaportes y visas de manera eficiente y confiable, con un enfoque centrado en el cliente y el cumplimiento de sus necesidades y expectativas para facilitar el proceso de solicitud a través de un servicio personalizado y profesional. ')}
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
                            {t('Expandir nuestro alcance y fortalecer el posicionamiento de la marca en el mercado, siendo reconocidos por nuestro compromiso con la calidad, la satisfacción del cliente y un servicio de acompañamiento integral en cada etapa del proceso de solicitud.')}
                        </p>
                    </div>
                </section>

                {/* Valores */}
                <div className="values-section">
                    <div className="introV">
                        <h2>{t('Valores')}</h2>
                        <p>{t('Para una empresa como Fast Pass Visa, dedicada a la gestión de trámites de visas y pasaportes, es fundamental tener valores que reflejen su compromiso con la calidad del servicio, la integridad y la satisfacción del cliente. Actualmente trabaja con los siguientes:')}</p>
                    </div>
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

