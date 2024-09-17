import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function TraduccionDocumentos() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Traducción de Documentos"
                subtitle="Servicios de traducción oficial de documentos para trámites migratorios."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Traducción de Documentos</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Proporcionamos traducción oficial de documentos para todo tipo de trámites migratorios, asegurando que cumplan con los requisitos de las autoridades correspondientes.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Original y copia del documento a traducir.
                        Información adicional o contexto para asegurar precisión en la traducción.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo de la traducción varía según la cantidad de documentos y la urgencia del trámite. Precios desde $300 MXN por página.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye la traducción certificada por un traductor oficial, con validez ante las autoridades.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado de traducción depende del volumen de documentos, pero generalmente es de 3 a 5 días hábiles.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Si necesitas traducir documentos para tu trámite migratorio, contáctanos para más detalles sobre nuestros servicios.
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

export default TraduccionDocumentos;
