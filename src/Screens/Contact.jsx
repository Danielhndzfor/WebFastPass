import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Contact.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoC from '/fondoC.png'; // Cambia por tu propia imagen
import ContactForm from '../components/ContactForm'; // Asegúrate de que la ruta sea correcta

function Contact() {
    const { t } = useTranslation();

    useEffect(() => {
        // Verifica si el hash en la URL es #contactform
        if (window.location.hash === '#contactform') {
            // Espera a que la página cargue por completo antes de hacer el scroll
            setTimeout(() => {
                const element = document.getElementById('contactform');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Ajusta el tiempo si es necesario
        }
    }, []);

    return (
        <>
            <Parallax
                backgroundImage={fondoC}
                title={t("¡Contáctanos!")}
                subtitle={t("Estamos aquí para ayudarte en cada paso del proceso.")}
            />
            <div className='introC fade-in'>
                <h2 className="contact-title">{t("¡Contáctanos!")}</h2>
                <p>
                {t("Para mas información o mas detalles acerca de nuestros servicios, trámites en proceso o solicitudes por llevar a cabo, favor de contactar a un asesor a través de nuestros medios de difusión oficiales. ")}
                </p>
            </div>
            <div id='contactform'>
            <ContactForm />
            </div>
            <div className="aviso">
                <h4>{t("AVISO")}</h4>
                <p>
                {t("FastPass Visa no es un bufete de abogados. La información proporcionada a través de este sitio web se presenta con fines informativos y de consulta. Por ningún motivo debe considerarse como consejo legal ya que la información y asesoría que se ofrece se otorga con la finalidad de facilitar los canales de información, agilizar los procesos de trámite y eliminar las dificultades en los procesos de solicitud. Si requiere consultoría legal o migratoria debe acudir o contactar a un abogado en el estado o país de origen. Por otra parte, los servicios de FastPass Visa pueden permitir mejorar las oportunidades de aprobación de su visa. Sin embargo, la aprobación no está garantizada, ya que finalmente depende del análisis, criterio y respuesta definitiva de un oficial consular.")}
                </p>
            </div>
        </>
    );
}

export default Contact;
