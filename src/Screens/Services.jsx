// pages/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import '../css/Services.css';
import Parallax from '../components/Parallax';
import fondoS from '/fondoS.jpg';

const servicesData = [
    {
        image: '/cita.webp',
        title: 'Consulta Informativa',
        description: 'Revisión de perfil y recomendaciones para aumentar el éxito en tu visa.',
        link: '/services/cita-informativa'
    },
    {
        image: '/Pasaporte-mexicano.webp',
        title: 'Pasaporte Mexicano',
        description: 'Trámite y renovación de pasaporte mexicano, incluyendo menores.',
        link: '/services/pasaporte-mexicano'
    },
    {
        image: '/passport.webp',
        title: 'Pasaporte Americano',
        description: 'Asesoría para obtener o renovar pasaporte americano.',
        link: '/services/pasaporte-americano'
    },
    {
        image: '/visa.webp',
        title: 'Visa Americana',
        description: 'Trámite de visa americana: turista, estudiante y otras categorías.',
        link: '/services/visa-americana'
    },
    {
        image: '/visarechazada.webp',
        title: 'Visas Rechazadas/Canceladas',
        description: 'Ayuda en casos de visa rechazada o cancelada.',
        link: '/services/visa-rechazada'
    },
    {
        image: '/citas-emergencia.webp',
        title: 'Citas de Emergencia',
        description: 'Gestión de citas de emergencia y prioritarias.',
        link: '/services/citas-emergencia'
    },
    {
        image: '/adelantar-cita.png',
        title: 'Adelantar Cita',
        description: 'Te ayudamos a adelantar tu cita de visa.',
        link: '/services/adelantar-cita'
    },
    {
        image: '/preparacion.webp',
        title: 'Preparación para Entrevista',
        description: 'Simulación y consejos para tu entrevista consular.',
        link: '/services/preparacion-entrevista'
    },
    {
        image: '/traduccion.webp',
        title: 'Traducciones',
        description: 'Traducción certificada de documentos migratorios.',
        link: '/services/traduccion-documentos'
    },
    {
        image: '/actaN.webp',
        title: 'Actas de Nacimiento',
        description: 'Trámite y corrección de actas de nacimiento.',
        link: '/services/actas-nacimiento'
    },
    {
        image: '/poder-notarial.jpg',
        title: 'Poder Notarial Mexicano (Menores 18 años)',
        description: 'Poder notarial para pasaporte mexicano de menores.',
        link: '/services/poder-notarial-mexicano'
    },
    {
        image: '/DS3053.png',
        title: 'Poder Notarial Americano (Menores 16 años)',
        description: 'Poder notarial y formularios para pasaporte americano de menores.',
        link: '/services/poder-notarial-americano'
    },
    {
        image: '/SAM.png',
        title: 'Formato SAM para Menores Mexicanos',
        description: 'Formato SAM para salida de menores de México.',
        link: '/services/formato-sam-menores-mexico'
    },
    {
        image: '/orientacion.webp',
        title: 'Seguimiento a Trámites Iniciados',
        description: 'Seguimiento y ayuda en trámites ya iniciados.',
        link: '/services/seguimiento-tramites'
    },
    {
        image: '/ETA.png',
        title: 'Autorización electrónica de viaje Canadá (eTA)',
        description: 'Tramitamos tu autorización electrónica para Canadá (eTA).',
        link: '/services/canada-eta'
    },
    {
        image: '/visaCanada.jpg',
        title: 'Visa Visitante Canadá (residente temporal)',
        description: 'Asistencia para obtener tu visa de visitante a Canadá.',
        link: '/services/canada-visitor-visa'
    },
    {
        image: '/otros.webp',
        title: 'Otros servicios',
        description: 'Servicios extra para tus trámites migratorios y documentos.',
        link: '/services/otros-servicios'
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
            title={t("Servicios")}
            subtitle={t("Ofrecemos una amplia gama de servicios para facilitar tus trámites de visa y pasaporte.")}
            linkText={t('Contactar')}
            />
            <div className="services-section fade-in">
                <h2>{t('Nuestros Servicios')}</h2>
                <p className='description'>{t("Ofrecemos asistencia detallada en cada etapa del proceso, desde la selección del tipo de visa adecuado hasta la preparación de su documentación, asegurándonos de que cumpla con los requisitos establecidos por las autoridades consulares, que se ajuste a sus necesidades, ya sea para fines turísticos, de negocios, estudios o trabajo. Además, le ayudamos a prepararse de manera efectiva para su entrevista consular, proporcionándole orientación práctica y asesoramiento para que se presente con confianza y seguridad.")}</p>
                <div className="services-main-grid" onClick={scrollToTop}>
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

        </>
    );
};

export default Services;