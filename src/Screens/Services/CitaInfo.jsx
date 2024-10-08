import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function CitaInfo() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Consulta Informativa"
                subtitle="Brindamos asesoría personalizada para tu trámite de visa y pasaporte."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Consulta Informativa</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestra cita informativa está diseñada para proporcionarte toda la información necesaria sobre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    {/* <ul>
                        <li>Documento de identificación válido.</li>
                        <li>Comprobante de domicilio.</li>
                        <li>Documentos específicos según el servicio solicitado.</li>
                    </ul> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>

                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        La cita informativa tiene un costo de $50, el cual puede ser pagado en efectivo o con tarjeta de crédito.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>

                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    {/* <p>
                        El costo incluye una consulta personalizada con uno de nuestros expertos, asesoramiento detallado sobre tus opciones y un plan de acción para seguir adelante.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>

                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Costo</h3>
                    {/* <p>
                        El tiempo estimado para completar la cita informativa es de entre 30 y 60 minutos, dependiendo de la complejidad de tus necesidades.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>

                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>Pregunte por nuestras promociones vigentes y cómo recibir consulta SIN COSTO</p>
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

export default CitaInfo;
