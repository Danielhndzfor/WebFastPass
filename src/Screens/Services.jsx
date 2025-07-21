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
        description: 'Evaluamos su perfil, revisamos su situación familiar, laboral y profesional y le haremos las recomendaciones necesarias para aumentar sus probabilidades de éxito en la obtención de la visa americana.',
        link: '/services/cita-informativa'
    },
    {
        image: '/Pasaporte-mexicano.webp',
        title: 'Pasaporte Mexicano',
        description: 'Tramitación de pasaportes mexicanos por primera vez y renovación. Tramitación de pasaportes a menores de edad con alguna dificultad parental.',
        link: '/services/pasaporte-mexicano'
    },
    {
        image: '/passport.webp',
        title: 'Pasaporte Americano',
        description: 'Asesoría en la obtención por primera vez y renovación de pasaportes estadounidenses. Orientación en el proceso para ciudadanos americanos en México.',
        link: '/services/pasaporte-americano'
    },
    {
        image: '/visa.webp',
        title: 'Visa Americana',
        description: 'Visa de Turista (B1/B2), Visa de Empleada Doméstica, Visa de Estudiante (F1/M1), Visa de Tripulante (C1/D) y otras categorías según necesidades específicas.',
        link: '/services/visa-americana'
    },
    {
        image: '/visarechazada.webp',
        title: 'Visas Rechazadas/Canceladas',
        description: 'Evaluación y procesamiento de visa en casos de visas denegadas una o más ocasiones. Asesoría para recuperar visas canceladas en frontera.',
        link: '/services/visa-rechazada'
    },
    {
        image: '/citas-emergencia.webp',
        title: 'Citas de Emergencia',
        description: 'Gestión de citas de emergencia para situaciones urgentes. Asesoramiento para obtener citas prioritarias y fechas más cercanas en cualquier Consulado.',
        link: '/services/citas-emergencia'
    },
    {
        image: '/adelantar-cita.png',
        title: 'Adelantar Cita',
        description: 'Asesoramiento para obtener citas con fechas más cercanas en cualquier Consulado del país para tu trámite de visa.',
        link: '/services/adelantar-cita'
    },
    {
        image: '/preparacion.webp',
        title: 'Preparación para Entrevista',
        description: 'Entrenamiento y simulación de entrevistas consulares. Consejos y estrategias para una entrevista exitosa.',
        link: '/services/preparacion-entrevista'
    },
    {
        image: '/traduccion.webp',
        title: 'Traducciones',
        description: 'Servicios de traducción de documentos legales y personales de español a inglés y viceversa. Traducciones certificadas para procesos migratorios.',
        link: '/services/traduccion-documentos'
    },
    {
        image: '/actaN.webp',
        title: 'Actas de Nacimiento',
        description: 'Tramitación de actas de nacimiento mexicanas y estadounidenses. Asesoría para la corrección de errores en actas mexicanas.',
        link: '/services/actas-nacimiento'
    },
    {
        image: '/poder-notarial.jpg',
        title: 'Poder Notarial Mexicano (Menores 18 años)',
        description: 'Asesoría y gestión para obtención de poderes notariales para trámites de pasaportes mexicanos cuando uno de los padres no puede comparecer.',
        link: '/services/poder-notarial-mexicano'
    },
    {
        image: '/DS3053.png',
        title: 'Poder Notarial Americano (Menores 16 años)',
        description: 'Asesoría para formularios DS-3053 y DS-5525 para trámites de pasaportes americanos cuando uno de los padres no puede comparecer.',
        link: '/services/poder-notarial-americano'
    },
    {
        image: '/SAM.png',
        title: 'Formato SAM para Menores Mexicanos',
        description: 'Asesoría y preparación del Formato SAM del INM para que menores de 18 años puedan salir del país acompañados o solos.',
        link: '/services/formato-sam-menores-mexico'
    },
    {
        image: '/orientacion.webp',
        title: 'Seguimiento a Trámites Iniciados',
        description: 'Asesoramos en trámites ya iniciados, actualizamos datos, aclaramos dudas, rehacemos DS-160, reprogramamos citas y preparamos entrevistas.',
        link: '/services/seguimiento-tramites'
    },
    {
        image: '/canada-eta.webp',
        title: 'Autorización electrónica de viaje Canadá (eTA)',
        description: 'Gestionamos tu autorización electrónica de viaje para Canadá de manera rápida y eficiente, facilitando tu entrada al país.',
        link: '/services/canada-eta'
    },
    {
        image: '/canada-visa.webp',
        title: 'Visa Visitante Canadá (residente temporal)',
        description: 'Te asistimos en el proceso de obtención de tu visa de visitante para Canadá, asegurando que cumplas con todos los requisitos.',
        link: '/services/canada-visitor-visa'
    },
    {
        image: '/otros-servicios.webp',
        title: 'Otros servicios',
        description: 'Ofrecemos servicios adicionales para cubrir todas tus necesidades migratorias y de documentación.',
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

        </>
    );
};

export default Services;