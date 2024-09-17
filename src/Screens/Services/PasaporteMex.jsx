import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PasaporteMexicano() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Mexicano"
                subtitle="Asesoría completa para obtener tu pasaporte mexicano."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Pasaporte Mexicano</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos asesoría integral para la obtención de tu pasaporte mexicano, asegurando que cumplas con todos los requisitos y pasos necesarios para una solicitud exitosa.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Documento de identificación válido.
                        Comprobante de domicilio.
                        Acta de nacimiento mexicana.
                        Fotografías recientes tipo pasaporte.
                        Formulario de solicitud completo.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo del servicio para obtener el pasaporte mexicano puede variar según la vigencia del pasaporte y el tipo de servicio requerido. Contacta con nosotros para obtener más detalles.
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
                        El tiempo estimado para obtener el pasaporte mexicano es de aproximadamente 4 a 6 semanas, dependiendo del proceso y la solicitud.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Contacta con nosotros para obtener más información y comenzar con tu solicitud de pasaporte mexicano.
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

export default PasaporteMexicano;
