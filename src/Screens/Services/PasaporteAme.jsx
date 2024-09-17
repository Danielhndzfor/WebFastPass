import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PasaporteAmericano() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Americano"
                subtitle="Obtén tu pasaporte americano con nuestra asesoría experta."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Pasaporte Americano</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos un servicio completo para la obtención del pasaporte americano, incluyendo asesoría, revisión de documentos y guía durante el proceso de solicitud.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Documento de identificación válido.
                        Comprobante de domicilio.
                        Prueba de ciudadanía estadounidense.
                        Fotografías recientes tipo pasaporte.
                        Formulario de solicitud completo.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo del servicio para obtener el pasaporte americano varía según el tipo de servicio solicitado. Consulta con nosotros para obtener una cotización exacta.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye asesoría personalizada, revisión de documentos, asistencia en el llenado de formularios y seguimiento durante el proceso de solicitud.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado para completar el trámite de pasaporte americano es de 6 a 8 semanas, dependiendo de la velocidad del procesamiento y de la solicitud.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Contacta con nosotros para recibir información actualizada y para comenzar con tu solicitud.
                    </p>
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        Contactar
                    </button>
                </div>
            </div>
        </>
    );
}

export default PasaporteAmericano;
