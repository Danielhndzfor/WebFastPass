import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function CitasEmergenciaVisa() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Citas de Emergencia"
                subtitle="Aceleramos tu trámite de visa en situaciones urgentes."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Citas de Emergencia para Visa</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Si necesitas una cita de emergencia para tu trámite de visa, te ofrecemos un servicio especializado que agiliza el proceso en caso de situaciones urgentes.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Pruebas de la emergencia (por ejemplo, citas médicas, viajes urgentes, entre otros).
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo de la cita de emergencia varía según el tipo de trámite y la urgencia del caso.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    {/* <p>
                        Nuestro servicio incluye la gestión completa para conseguir una cita de emergencia lo más pronto posible.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costo de Derechos */}
                <div className="cita-info-section">
                    <h3>Costo de Derechos</h3>
                    {/* <p>
                        Consulta con uno de nuestros asesores para conocer los costos por derechos de trámite de emergencia.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costo de Honorarios */}
                <div className="cita-info-section">
                    <h3>Costo de Honorarios</h3>
                    {/* <p>
                        El costo de los honorarios depende del tipo de trámite y la urgencia de la cita.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>Contacte un asesor para conocer los costos de honorarios vigentes</p>
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

export default CitasEmergenciaVisa;
