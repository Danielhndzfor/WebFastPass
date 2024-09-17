import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function VisaRechazadaCancelada() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Visa Rechazada o Cancelada"
                subtitle="Te ayudamos a entender y resolver el rechazo o cancelación de tu visa americana."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Visa Rechazada o Cancelada</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestro equipo te asesora para entender las razones detrás del rechazo o cancelación de tu visa y te ayudamos a presentar una nueva solicitud con mejores posibilidades de éxito.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Pasaporte vigente.
                        Carta o notificación de rechazo o cancelación de la visa.
                        Documentos adicionales que puedan respaldar tu nueva solicitud.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo varía según el tipo de visa y los servicios adicionales que se soliciten para la nueva aplicación.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        Análisis de las razones del rechazo o cancelación, asesoría legal y asistencia para la nueva solicitud.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado puede variar dependiendo de la complejidad del caso y la disponibilidad de citas en el consulado.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Para resolver tu situación y solicitar nuevamente tu visa, contáctanos.
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

export default VisaRechazadaCancelada;
