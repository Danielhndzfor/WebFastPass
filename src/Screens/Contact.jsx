import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Contact.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoC from '/fondoC.png'; // Cambia por tu propia imagen
import ContactForm from '../components/ContactForm'; // Asegúrate de que la ruta sea correcta

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <Parallax
                backgroundImage={fondoC}
                title="Contactanos"
                subtitle="Estamos aquí para ayudarte con tus trámites de visa y pasaporte."
                linkText={t('Contactar')}
            />
            <ContactForm />
        </>
    );
}

export default Contact;
