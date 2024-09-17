import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function VisaAmericana() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Visa Americana"
                subtitle="Te guiamos en todo el proceso para obtener tu visa americana de forma segura y eficaz."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Visa Americana</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestra asesoría para la visa americana te ayudará a obtener toda la información y el apoyo necesario para que puedas realizar tu trámite de manera exitosa.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Documento de identificación válido.
                        Pasaporte vigente.
                        Comprobante de domicilio.
                        Formulario DS-160 completado.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo del trámite de visa varía según el tipo de visa que solicites. Además, ofrecemos paquetes de asesoría personalizada.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        Asesoría personalizada, revisión de documentos, y preparación para la entrevista consular.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo de trámite puede variar según la disponibilidad de citas consulares, pero generalmente oscila entre 2 y 4 semanas.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Si tienes alguna duda o deseas iniciar tu trámite de visa americana, contáctanos para recibir asesoría.
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

export default VisaAmericana;
