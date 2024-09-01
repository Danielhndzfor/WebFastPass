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
            <div className='introC'>
                <h2 className="contact-title">Contáctanos</h2>
                <p>
                Para mas información o mas detalles acerca de nuestros servicios, trámites en proceso o solicitudes por llevar a cabo, favor de contactar a un asesor a través de nuestros medios de difusión oficiales. Las consultas son personalizadas solamente despues de haber solicitado algún servicio de atención por este medio o en nuestros teléfonos, correos o redes sociales.
                </p>
                <p>
                Puede comunicarse con nosotros a través de Facebook, Messenger, Instagram, WhatsApp, o mediante el formulario que se encuentra a continuación.
                </p>
            </div>
            <ContactForm />
            <div className="aviso">
                <h4>AVISO</h4>
                <p>
                FastPass Visa no es un bufete de abogados. La información proporcionada a través de este sitio web se presenta con fines informativos y de consulta. Por ningún motivo debe considerarse como consejo legal ya que la información y asesoría que se ofrece se otorga con la finalidad de facilitar los canales de información, agilizar los procesos de trámite y eliminar las dificultades en los procesos de solicitud. Si requiere consultoría legal o migratoria debe acudir o contactar a un abogado en el estado o país de origen. Por otra parte, los servicios de FastPass Visa pueden permitir mejorar las oportunidades de aprobación de su visa. Sin embargo, la aprobación no está garantizada, ya que finalmente depende del análisis, criterio y respuesta definitiva de un oficial consular.
                </p>
            </div>
        </>
    );
}

export default Contact;
