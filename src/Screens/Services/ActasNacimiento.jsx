import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function ActasNacimiento() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Actas de Nacimiento"
                subtitle="Asesoramos en la gestión de Actas de Nacimiento tanto mexicanas como extranjeras."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Actas de Nacimiento</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos un servicio completo para la obtención de actas de nacimiento mexicanas y extranjeras. Nos encargamos de todos los trámites necesarios para asegurarnos de que tengas la documentación correcta y actualizada.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <ul>
                        <li>Identificación oficial vigente.</li>
                        <li>Comprobante de domicilio reciente.</li>
                        <li>En algunos casos, documentos adicionales específicos según la entidad federativa.</li>
                    </ul> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo de entrega de las actas de nacimiento varía dependiendo de la entidad donde se realice el trámite. Generalmente, el proceso toma entre 3 a 7 días hábiles.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        Los costos por la gestión de actas de nacimiento incluyen derechos gubernamentales y honorarios por el servicio. Contáctanos para obtener una cotización personalizada según tu caso.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>Contacta a un asesor para recibir más información o resolver tus dudas.</p>
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

export default ActasNacimiento;
