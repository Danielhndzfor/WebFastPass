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
                subtitle="Analizamos detalladamente su perfil, incluyendo su situación familiar, laboral y profesional, para ofrecerle recomendaciones específicas que aumenten sus probabilidades de éxito en la obtención de una visa americana o canadiense."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Consulta Informativa</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Analizamos detalladamente su perfil, incluyendo su situación familiar, laboral y profesional, para ofrecerle recomendaciones específicas que aumenten sus probabilidades de éxito en la obtención de una visa americana o canadiense. Además, le proporcionamos la información y el apoyo necesarios para facilitar la obtención de su pasaporte mexicano o americano, asegurándonos de que cada etapa del proceso sea clara, eficiente y sin contratiempos.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <p style={{ marginBottom: '20px' }}>Para la consulta informativa necesitará proporcionar la siguiente información:</p>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '8px' }}>Documentos básicos:</h4>
                        <ul>
                            <li><strong>Identificación oficial y/o Pasaporte vigente:</strong> Documento válido y legible.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '8px' }}>Información del trámite:</h4>
                        <ul>
                            <li><strong>Tipo de trámite requerido:</strong> Especificar si es visa de turismo, negocios, estudios, trabajo u otros.</li>
                            <li><strong>Tipo de solicitante:</strong> Indicar si el trámite es para un adulto o menor de edad.</li>
                            <li><strong>Información adicional:</strong> Detallar si es una solicitud por primera vez, renovación o recuperación de visa.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '8px' }}>Documentación específica:</h4>
                        <ul>
                            <li><strong>Documentación adicional:</strong> Dependiendo de su situación o caso en particular, como comprobantes de ingresos, estados de cuenta, carta laboral, constancias de estudios, etc. Nuestro equipo le indicará exactamente qué documentos necesita para su trámite.</li>
                        </ul>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        La consulta inicial tiene una duración aproximada de 15 a 30 minutos, para analizar su caso, responder sus preguntas y explicarle el proceso completo.
                    </p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ul>
                        <li><strong>Análisis personalizado de su caso:</strong> Evaluamos su situación familiar, laboral y profesional para determinar las mejores opciones disponibles para su trámite de visa.</li>
                        <li><strong>Explicación detallada del proceso:</strong> Le proporcionamos información clara sobre los pasos a seguir, requisitos específicos, tiempos estimados y costos involucrados (incluyendo honorarios y tarifas consulares).</li>
                        <li><strong>Recomendaciones inmediatas:</strong> Le ofrecemos posibles soluciones adaptadas a sus necesidades y objetivos, para aumentar sus probabilidades de éxito.</li>
                        <li><strong>Orientación sobre requisitos específicos:</strong> Detallamos qué documentos son indispensables para su caso particular y cómo debe presentarlos.</li>
                        <li><strong>Agenda estratégica:</strong> Le explicamos los tiempos para gestionar sus citas en el CAS (Centro de Atención al Solicitante) y el Consulado, asegurándonos de que pueda avanzar rápidamente hacia la preparación de su entrevista.</li>
                    </ul>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Costo</h3>
                    <ul>
                        <li><strong>Individual:</strong> $300 MXN por persona.</li>
                        <li><strong>En grupo familiar o parejas:</strong> $400 MXN.</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        Pregunte por nuestras promociones vigentes y descubra cómo puede recibir una consulta inicial sin costo.
                    </p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        ¡SOLICITA ASESORÍA!
                    </button>
                </div>


            </div>
        </>
    );
}

export default CitaInfo;
