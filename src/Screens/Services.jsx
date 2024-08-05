// pages/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import '../css/Services.css';

const servicesData = [
    {
        image: '/cita.jpg', // Cambia por tus propias imágenes
        title: 'Cita Informativa',
        description: 'Brindamos asesoría personalizada para tu trámite de visa y pasaporte.',
        link: '/services/citainformativa'
    },
    {
        image: '/Pasaporte-mexicano.webp', // Cambia por tus propias imágenes
        title: 'Pasaporte Mexicano',
        description: 'Gestionamos tu pasaporte de manera rápida y eficiente.',
        link: '/services/pasaporte-mexicano'
    },
    {
        image: '/passport.png', // Cambia por tus propias imágenes
        title: 'Pasaporte Americano',
        description: 'Facilitamos el proceso para obtener tu pasaporte sin complicaciones.',
        link: '/services/pasaporte-americano'
    },
    {
        image: '/visa.jpg', // Cambia por tus propias imágenes
        title: 'Visa Americana',
        description: 'Asistimos en todos los pasos para la obtención de tu visa.',
        link: '/services/visa-americana'
    },
    {
        image: '/visarechazada.jpg', // Cambia por tus propias imágenes
        title: 'Visas Rechazadas/Canceladas',
        description: 'Te ayudamos a recuperar tu visa si ha sido rechazada o cancelada.',
        link: '/services/visa-rechazada'
    },
    {
        image: '/citas-emergencia.jpg', // Cambia por tus propias imágenes
        title: 'Citas de Emergencia',
        description: 'Gestionamos citas urgentes para trámites de visas y pasaportes.',
        link: '/services/citas-emergencia'
    },
    {
        image: '/actaN.jpg', // Cambia por tus propias imágenes
        title: 'Actas de Nacimiento',
        description: 'Obtenemos actas de nacimiento de manera rápida y segura.',
        link: '/services/actas-nacimiento'
    },
    {
        image: '/traduccion.jpeg', // Cambia por tus propias imágenes
        title: 'Traducción de Documentos',
        description: 'Proveemos traducción profesional para documentos oficiales.',
        link: '/services/traduccion-documentos'
    },
    {
        image: '/preparacion.jpg', // Cambia por tus propias imágenes
        title: 'Preparación para Entrevista',
        description: 'Te preparamos para tu entrevista consular y aumentamos tus posibilidades de éxito.',
        link: '/services/preparacion-entrevista'
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

    return (
        <>
            <div className="services-section">
                <h2>{t('Nuestros Servicios')}</h2>
                <div className="services-grid">
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

            <div className="testimonials-section">
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
            </div>
        </>
    );
};

export default Services;