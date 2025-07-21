import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function CitasEmergenciaVisa() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="CITA DE EMERGENCIA"
                subtitle="Las citas de emergencia están disponibles únicamente para situaciones calificadas como urgentes o imprevistas, que no pueden esperar al turno regular."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>CITA DE EMERGENCIA PARA VISA AMERICANA</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Este tipo de cita no garantiza la aprobación de la visa, solo permite acceder a una entrevista consular más rápida, siempre que el caso cumpla con ciertos criterios.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>Las citas de emergencia solo se aprueban para las siguientes situaciones:</p>
                    
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>1. Emergencia médica grave</h4>
                        <ul>
                            <li>Tratamiento urgente en EE.UU. para el solicitante o acompañamiento de un familiar inmediato.</li>
                            <li>Se debe presentar carta médica del hospital o doctor en EE.UU., con diagnóstico y fecha del procedimiento.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>2. Fallecimiento o funeral de un familiar directo</h4>
                        <ul>
                            <li><strong>Familiares elegibles:</strong> Padre, madre, hijo, hija, cónyuge o hermano.</li>
                            <li><strong>Documentos requeridos:</strong> Acta de defunción, carta del hospital o funeraria, e identificación del fallecido.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>3. Cita judicial obligatoria</h4>
                        <ul>
                            <li>Orden de comparecencia emitida por autoridad legal de EE.UU.</li>
                            <li>Presentar citatorio oficial con fecha, ubicación y nombre del solicitante.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>4. Viaje de negocios urgente y documentado</h4>
                        <ul>
                            <li>Cuando se requiere la presencia inmediata por parte de la empresa.</li>
                            <li>Carta oficial en papel membretado, firmada por la empresa y detallando motivo, urgencia y fechas del viaje.</li>
                        </ul>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        Una vez enviado el formato de solicitud de cita urgente y cargada la documentación, la embajada o consulado puede aceptar o rechazar la solicitud en un plazo de <strong>48 a 72 horas hábiles.</strong>
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Asesoría para verificar si tu caso califica como emergencia.</li>
                        <li>Llenado correcto del formulario DS-160 y creación de cuenta consular.</li>
                        <li>Preparación de carta de solicitud de emergencia (en inglés).</li>
                        <li>Apoyo para cargar documentación correctamente y enviar la solicitud.</li>
                        <li>Seguimiento hasta recibir respuesta del consulado.</li>
                    </ol>
                </div>

                {/* Importante */}
                <div className="cita-info-section" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '20px' }}>
                    <h3 style={{ color: '#856404' }}>⚠️ Importante</h3>
                    <p style={{ color: '#856404', margin: '0' }}>
                        <strong>No se aprueban citas de emergencia</strong> por motivos turísticos, vacaciones, eventos recreativos o visitas familiares sin justificación grave o comprobable. Las solicitudes falsas o sin respaldo documental pueden derivar en <strong>rechazo automático de la visa y sanciones en futuras solicitudes.</strong>
                    </p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <p>El servicio de asesoría personalizada para la gestión y solicitud de una cita de emergencia tiene un costo de:</p>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>$1,500 MXN</h2>
                        <p style={{ color: '#155724', margin: '10px 0 0 0' }}>
                            (incluye revisión de elegibilidad, preparación de documentación en inglés, carga en el sistema consular y seguimiento del proceso)
                        </p>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        Este monto <strong>no incluye la tarifa de visa (MRV)</strong> ni garantiza la aprobación de la solicitud, ya que está sujeta al análisis del consulado de EE.UU.
                    </p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p style={{ fontWeight: 'bold', color: '#dc3545', marginBottom: '15px' }}>
                        ¿Tienes una emergencia real?
                    </p>
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        ¡SOLICITA ASESORÍA!
                    </button>
                    <p style={{ marginTop: '10px', fontSize: '14px' }}>
                        📤 Solicitar revisión de emergencia
                    </p>
                </div>
            </div>
        </>
    );
}

export default CitasEmergenciaVisa;
