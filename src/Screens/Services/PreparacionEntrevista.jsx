import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PreparacionEntrevista() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Preparación para Entrevista"
                subtitle="Te ayudamos a prepararte para tu entrevista de visa con asesoría experta."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Preparación para Entrevista</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestra preparación para entrevista está diseñada para ayudarte a maximizar tus posibilidades de éxito. Te proporcionamos consejos prácticos y una simulación de entrevista para que te sientas seguro y bien preparado.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Documento de identificación válido.
                        Comprobante de domicilio.
                        Documentación relacionada con el propósito de tu viaje.
                        Historial de entrevistas previas (si aplica).
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo para la preparación de la entrevista es de $100, que incluye una sesión de simulación de entrevista y asesoramiento personalizado.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye una sesión de preparación personalizada, simulación de entrevista, y revisión de tus documentos y respuestas.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        La preparación para la entrevista suele durar entre 1 y 2 horas, y se puede programar de acuerdo a tu disponibilidad.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Contacta con nosotros para obtener más información y programar tu sesión de preparación para la entrevista.
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

export default PreparacionEntrevista;
