import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function FormatoSAMMenoresMexico() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Formato SAM para Menores Mexicanos"
                subtitle="Asesoría para obtener el Formato SAM necesario para que menores viajen a EU."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Formato SAM para Menores Mexicanos que viajan solos o con un familiar a EU</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos orientación completa para la obtención del Formato SAM, que es necesario para que los menores de edad puedan viajar solos o acompañados de un familiar a los Estados Unidos.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Acta de nacimiento del menor.
                        Identificación de los padres o tutores.
                        Pasaporte del menor.
                        Documento de viaje del acompañante (en caso de ser necesario).
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El trámite del Formato SAM tiene un costo aproximado de $100 MXN, dependiendo del lugar donde se realice.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye la asesoría para el llenado del formato y la orientación sobre los documentos necesarios.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado para completar el trámite del Formato SAM es de entre 1 y 3 días hábiles.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Si tienes alguna duda sobre el trámite del Formato SAM, contáctanos para más información.
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

export default FormatoSAMMenoresMexico;
