import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // NavBar
            "Inicio": "Home",
            "Servicios": "Services",
            "Cita Informativa": "Informative Appointment",
            "Pasaporte Mexicano": "Mexican Passport",
            "Pasaporte Americano": "American Passport",
            "Visa Americana": "American Visa",
            "Visas Rechazadas/Canceladas": "Rejected/Cancelled Visas",
            "Citas de Emergencia": "Emergency Appointments",
            "Actas de Nacimiento": "Birth Certificates",
            "Traducción de Documentos": "Document Translation",
            "Preparación para Entrevista": "Interview Preparation",
            "Contacto": "Contact",
            "Quienes Somos": "About Us",
            "Quiero cita": "I want an appointment",
            
            // Home
            // Section Bienvenida
            "Uniendo Familias": "Uniting Families",
            "Especialistas en visas y migración": "Specialists in visas and migration",
            "Bienvenido a Fast Pass Visas": "Welcome to Fast Pass Visas",
            "Tu aliado confiable para todas tus necesidades de visa.": "Your trusted ally for all your visa needs.",
            "Conócenos Más": "Learn More About Us",
            // Section Servicios
            "Nuestros Servicios": "Our Services",
            "Explora Más Servicios": "Explore More Services",
            // Section Contacto
            "Contactarse": "Contact Us",
            "Por favor rellene el formulario para contactarse con nosotros": "Please fill out the form to contact us",
            "Nombre": "First Name",
            "Apellido": "Last Name",
            "Correo Electrónico": "Email Address",
            "Número de Teléfono": "Phone Number",
            "Seleccione un servicio": "Select a service",
            "Mensaje": "Message",
            "Acepto términos de uso y condiciones de privacidad": "I accept terms of use and privacy conditions",
            "Enviar": "Submit",

            // Services
            "Brindamos asesoría personalizada para tu trámite de visa y pasaporte.": "We provide personalized advice for your visa and passport process.",
            "Gestionamos tu pasaporte de manera rápida y eficiente.": "We manage your passport quickly and efficiently.",
            "Facilitamos el proceso para obtener tu pasaporte sin complicaciones.": "We facilitate the process to obtain your passport without complications.",
            "Asistimos en todos los pasos para la obtención de tu visa.": "We assist in all steps to obtain your visa.",
            "Te ayudamos a recuperar tu visa si ha sido rechazada o cancelada.": "We help you recover your visa if it has been rejected or canceled.",
            "Gestionamos citas urgentes para trámites de visas y pasaportes.": "We manage urgent appointments for visa and passport procedures.",
            "Obtenemos actas de nacimiento de manera rápida y segura.": "We obtain birth certificates quickly and safely.",
            "Proveemos traducción profesional para documentos oficiales.": "We provide professional translation for official documents.",
            "Te preparamos para tu entrevista consular y aumentamos tus posibilidades de éxito.": "We prepare you for your consular interview and increase your chances of success.",

            // About Us
            "Nuestra Historia": "Our History",
            "Aquí puedes poner un resumen de la historia de la empresa, cómo comenzó, los hitos importantes y otros detalles relevantes.": "Here you can put a summary of the company's history, how it started, the important milestones and other relevant details.",
            "Misión": "Mission",
            "Descripción de la misión de la empresa, sus objetivos y propósito.": "Description of the company's mission, its objectives and purpose.",
            "Visión": "Vision",
            "Descripción de la visión de la empresa, sus metas a largo plazo y aspiraciones.": "Description of the company's vision, its long-term goals and aspirations.",
            "Valores": "Values",
            "Honestidad": "Honesty",
            "Descripción de Honestidad.": "Description of Honesty.",
            "Respeto": "Respect",
            "Descripción de Respeto.": "Description of Respect.",
            "Integridad": "Integrity",
            "Descripción de Integridad.": "Description of Integrity.",
            "Responsabilidad": "Responsibility",
            "Descripción de Responsabilidad.": "Description of Responsibility.",
            "Trabajo en Equipo": "Teamwork",
            "Descripción de Trabajo en Equipo.": "Description of Teamwork.",
            "Innovación": "Innovation",
            "Descripción de Innovación.": "Description of Innovation.",
            "¿Estás listo para tu primera cita?": "Are you ready for your first appointment?",
            "Contactar": "Contact",

            // Footer
            "Buscanos en todas nuestras redes sociales": "Find us on all our social networks",
            "Consultoria en trámites de visas y pasaportes": "Consulting in visa and passport procedures",
            "Menu": "Menu",
            "Politicas": "Policies",
            "Terminos y Condiciones": "Terms and Conditions",
            "Aviso de Privacidad": "Privacy Notice",
            "Contact": "Contact",
        }
    },
    es: {
        translation: {
            // NavBar
            "Inicio": "Inicio",
            "Servicios": "Servicios",
            "Cita Informativa": "Cita Informativa",
            "Pasaporte Mexicano": "Pasaporte Mexicano",
            "Pasaporte Americano": "Pasaporte Americano",
            "Visa Americana": "Visa Americana",
            "Visas Rechazadas/Canceladas": "Visas Rechazadas/Canceladas",
            "Citas de Emergencia": "Citas de Emergencia",
            "Actas de Nacimiento": "Actas de Nacimiento",
            "Traducción de Documentos": "Traducción de Documentos",
            "Preparación para Entrevista": "Preparación para Entrevista",
            "Contacto": "Contacto",
            "Quienes Somos": "Quienes Somos",
            "Quiero cita": "Quiero cita",

            // Home
            // Section Bienvenida
            "Uniendo Familias": "Uniendo Familias",
            "Especialistas en visas y migración": "Especialistas en visas y migración",
            "Bienvenido a Fast Pass Visas": "Bienvenido a Fast Pass Visas",
            "Tu aliado confiable para todas tus necesidades de visa.": "Tu aliado confiable para todas tus necesidades de visa.",
            "Conócenos Más": "Conócenos Más",
            // Section Servicios
            "Nuestros Servicios": "Nuestros Servicios",
            "Explora Más Servicios": "Explora Más Servicios",
            // Section Contacto
            "Contactarse": "Contactarse",
            "Por favor rellene el formulario para contactarse con nosotros": "Por favor rellene el formulario para contactarse con nosotros",
            "Nombre": "Nombre",
            "Apellido": "Apellido",
            "Correo Electrónico": "Correo Electrónico",
            "Número de Teléfono": "Número de Teléfono",
            "Seleccione un servicio": "Seleccione un servicio",
            "Mensaje": "Mensaje",
            "Acepto términos de uso y condiciones de privacidad": "Acepto términos de uso y condiciones de privacidad",
            "Enviar": "Enviar",

            // Services
            "Brindamos asesoría personalizada para tu trámite de visa y pasaporte.": "Brindamos asesoría personalizada para tu trámite de visa y pasaporte.",
            "Gestionamos tu pasaporte de manera rápida y eficiente.": "Gestionamos tu pasaporte de manera rápida y eficiente.",
            "Facilitamos el proceso para obtener tu pasaporte sin complicaciones.": "Facilitamos el proceso para obtener tu pasaporte sin complicaciones.",
            "Asistimos en todos los pasos para la obtención de tu visa.": "Asistimos en todos los pasos para la obtención de tu visa.",
            "Te ayudamos a recuperar tu visa si ha sido rechazada o cancelada.": "Te ayudamos a recuperar tu visa si ha sido rechazada o cancelada.",
            "Gestionamos citas urgentes para trámites de visas y pasaportes.": "Gestionamos citas urgentes para trámites de visas y pasaportes.",
            "Obtenemos actas de nacimiento de manera rápida y segura.": "Obtenemos actas de nacimiento de manera rápida y segura.",
            "Proveemos traducción profesional para documentos oficiales.": "Proveemos traducción profesional para documentos oficiales.",
            "Te preparamos para tu entrevista consular y aumentamos tus posibilidades de éxito.": "Te preparamos para tu entrevista consular y aumentamos tus posibilidades de éxito.",

            // About Us
            "Nuestra Historia": "Nuestra Historia",
            "Aquí puedes poner un resumen de la historia de la empresa, cómo comenzó, los hitos importantes y otros detalles relevantes.": "Aquí puedes poner un resumen de la historia de la empresa, cómo comenzó, los hitos importantes y otros detalles relevantes.",
            "Misión": "Misión",
            "Descripción de la misión de la empresa, sus objetivos y propósito.": "Descripción de la misión de la empresa, sus objetivos y propósito.",
            "Visión": "Visión",
            "Descripción de la visión de la empresa, sus metas a largo plazo y aspiraciones.": "Descripción de la visión de la empresa, sus metas a largo plazo y aspiraciones.",
            "Valores": "Valores",
            "Honestidad": "Honestidad",
            "Descripción de Honestidad.": "Descripción de Honestidad.",
            "Respeto": "Respeto",
            "Descripción de Respeto.": "Descripción de Respeto.",
            "Integridad": "Integridad",
            "Descripción de Integridad.": "Descripción de Integridad.",
            "Responsabilidad": "Responsabilidad",
            "Descripción de Responsabilidad.": "Descripción de Responsabilidad.",
            "Trabajo en Equipo": "Trabajo en Equipo",
            "Descripción de Trabajo en Equipo.": "Descripción de Trabajo en Equipo.",
            "Innovación": "Innovación",
            "Descripción de Innovación.": "Descripción de Innovación.",
            "¿Estás listo para tu primera cita?": "¿Estás listo para tu primera cita?",
            "Contactar": "Contactar",

            // Footer
            "Buscanos en todas nuestras redes sociales": "Buscanos en todas nuestras redes sociales",
            "Consultoria en trámites de visas y pasaportes": "Consultoria en trámites de visas y pasaportes",
            "Menu": "Menu",
            "Politicas": "Politicas",
            "Terminos y Condiciones": "Terminos y Condiciones",
            "Aviso de Privacidad": "Aviso de Privacidad",
            "Contacto": "Contacto",

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // Idioma por defecto
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;