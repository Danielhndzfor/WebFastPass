// pages/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import '../css/Services.css';
import Parallax from '../components/Parallax';
import fondoS from '/fondoS.jpg';

const servicesData = [
    {
        image: '/cita.webp', // Cambia por tus propias imágenes
        title: 'Cita Informativa',
        description: 'Brindamos asesoría personalizada para tu trámite de visa y pasaporte.',
        link: '/services/cita-informativa'
    },
    {
        image: '/Pasaporte-mexicano.webp', // Cambia por tus propias imágenes
        title: 'Pasaporte Mexicano',
        description: 'Gestionamos tu pasaporte de manera rápida y eficiente.',
        link: '/services/pasaporte-mexicano'
    },
    {
        image: '/passport.webp', // Cambia por tus propias imágenes
        title: 'Pasaporte Americano',
        description: 'Facilitamos el proceso para obtener tu pasaporte sin complicaciones.',
        link: '/services/pasaporte-americano'
    },
    {
        image: '/visa.webp', // Cambia por tus propias imágenes
        title: 'Visa Americana',
        description: 'Asistimos en todos los pasos para la obtención de tu visa.',
        link: '/services/visa-americana'
    },
    {
        image: '/visarechazada.webp', // Cambia por tus propias imágenes
        title: 'Visas Rechazadas/Canceladas',
        description: 'Te ayudamos a recuperar tu visa si ha sido rechazada o cancelada.',
        link: '/services/visa-rechazada'
    },
    {
        image: '/citas-emergencia.webp', // Cambia por tus propias imágenes
        title: 'Citas de Emergencia',
        description: 'Gestionamos citas urgentes para trámites de visas y pasaportes.',
        link: '/services/citas-emergencia'
    },
    {
        image: '/adelantar-cita.png', // Cambia por tus propias imágenes
        title: 'Adelantar Cita',
        description: 'Te ayudamos a adelantar tu cita consular para tu trámite de visa.',
        link: '/services/adelantar-cita'
    },
    {
        image: '/preparacion.webp', // Cambia por tus propias imágenes
        title: 'Preparación para Entrevista',
        description: 'Te preparamos para tu entrevista consular y aumentamos tus posibilidades de éxito.',
        link: '/services/preparacion-entrevista'
    },
    {
        image: '/actaN.webp', // Cambia por tus propias imágenes
        title: 'Actas de Nacimiento',
        description: 'Obtenemos actas de nacimiento de manera rápida y segura.',
        link: '/services/actas-nacimiento'
    },
    {
        image: '/traduccion.webp', // Cambia por tus propias imágenes
        title: 'Traducción de Documentos',
        description: 'Proveemos traducción profesional para documentos oficiales.',
        link: '/services/traduccion-documentos'
    },
    {
        image: '/poder-notarial.jpg',
        title: 'Poder Notarial para mexicanos menores de 18 años (Consentimiento padres)',
        description: 'Trámite de poder notarial para menores de 18 años.',
        link: '/services/poder-notarial'
    },
    {
        image: '/DS3053.png',
        title: 'Poder Notarial para americanos menores de 16 años (Consentimiento padres)',
        description: 'Trámite de poder notarial para menores de 16 años.',
        link: '/services/poder-notarial-americano'
    },
    {
        image: '/SAM.png',
        title: 'Formato SAM para Menores Mexicanos que viajan solos o con un familiar a EU.',
        description: 'Trámite de formato SAM para menores mexicanos.',
        link: '/services/formato-sam'
    }
    
];

const testimonialsData = [
    {
        image: 'https://via.placeholder.com/150', // Cambia por fotos de clientes o iconos
        name: 'Juan Pérez',
        feedback: 'Excelente servicio, muy profesionales y eficientes. Recomiendo sus servicios a todos mis conocidos.'
    },
    {
        image: 'https://via.placeholder.com/150', // Cambia por fotos de clientes o iconos
        name: 'María López',
        feedback: 'Me ayudaron a obtener mi visa rápidamente. Muy agradecida por su apoyo y dedicación.'
    },
    {
        image: 'https://via.placeholder.com/150', // Cambia por fotos de clientes o iconos
        name: 'Carlos García',
        feedback: 'La asesoría fue excelente y el proceso fue muy sencillo gracias a ellos. Gran equipo.'
    }
];

const Services = () => {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Parallax 
            height="700px"
            backgroundImage={fondoS}
            title="Servicios"
            subtitle="Ofrecemos una amplia gama de servicios para facilitar tus trámites de visa y pasaporte."
            linkText={t('Contactar')}
            />
            <div className="services-section fade-in">
                <h2>{t('Nuestros Servicios')}</h2>
                <p className='description'>{t('Ofrecemos asistencia a nuestros clientes para obtener la Visa Americana que se ajuste a sus necesidades, ya sea para fines turísticos, de negocios, estudios o trabajo. Nuestro equipo está disponible para acompañarle en cada paso del proceso de solicitud, garantizando que su documentación esté en regla y que usted asista a tiempo y bien preparado a su entrevista consular.')}</p>
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

            {/* <div className="testimonials-section">
                <h2>{t('Testimonios')}</h2>
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
};

export default Services;