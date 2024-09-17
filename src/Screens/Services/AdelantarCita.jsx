import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function AdelantarCita() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Adelantar Cita"
                subtitle="Solicita una consulta para adelantar tu trámite de visa con asesoría personalizada."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Adelantar Cita para Visa</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestra consulta para adelantar citas está diseñada para evaluar tu situación actual y proporcionarte las mejores opciones para avanzar rápidamente con tu trámite de visa.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Documento de identificación válido.
                        Comprobante de domicilio.
                        Documentos específicos según el tipo de visa solicitada.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        La consulta para adelantar citas tiene un costo de $50, el cual puede ser pagado en efectivo o con tarjeta de crédito.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye una consulta personalizada con uno de nuestros expertos en visas, asesoramiento detallado sobre tus opciones y un plan de acción para seguir adelante con el adelanto de tu cita.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado para completar la consulta para adelantar la cita es de entre 30 y 60 minutos, dependiendo de la complejidad de tu caso.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Pregunta por nuestras promociones vigentes y cómo recibir consulta SIN COSTO.
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

export default AdelantarCita;
