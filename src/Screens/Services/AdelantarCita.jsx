import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de 
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function AdelantarCita() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Adelantar Cita"
                subtitle="Te ayudamos a solicitar un adelanto de cita ante el consulado."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Adelantar Cita a Consulado</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        ¿Tu cita está programada dentro de varios meses y necesitas viajar antes? Podemos ayudarte a solicitar un adelanto de cita ante el consulado, 
                        siempre que cumplas con los criterios establecidos por el Departamento de Estado de EE.UU.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Documentación Requerida</h4>
                        <ul>
                            <li>Tener una cita ya programada (con comprobante de cita confirmada)</li>
                            <li>Contar con un motivo legítimo y documentado que justifique el adelanto (por ejemplo: asuntos médicos, académicos, laborales o familiares urgentes)</li>
                            <li>Presentar evidencia en inglés que respalde tu solicitud (carta institucional, constancias, documentos oficiales)</li>
                            <li>No haber solicitado previamente un adelanto en esta misma cita</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Importante</h4>
                        <ul>
                            <li>El adelanto está sujeto a disponibilidad y aprobación del consulado de EE.UU.</li>
                            <li>FastPass Visa actúa únicamente como asesor y no interviene en la decisión final</li>
                        </ul>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        Una vez enviada la solicitud de adelanto, el consulado puede responder en un plazo de <strong>3-10 días hábiles o más</strong>, dependiendo del consulado correspondiente.
                    </p>
                </div>

                {/* Servicios Incluidos */}
                <div className="cita-info-section">
                    <h3 className="section-title">Servicio Incluye</h3>
                    <div className="services-grid">
                        <div className="service-item">
                            <span className="service-icon">📋</span>
                            <div className="service-content">
                                <h4>Revisión de Caso</h4>
                                <p>Revisión de tu caso y documentación</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">🌐</span>
                            <div className="service-content">
                                <h4>Traducción</h4>
                                <p>Traducción de documentos clave al inglés</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">�</span>
                            <div className="service-content">
                                <h4>Solicitud Oficial</h4>
                                <p>Carga y redacción de la solicitud dentro del sistema oficial</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">📞</span>
                            <div className="service-content">
                                <h4>Seguimiento</h4>
                                <p>Seguimiento personalizado del proceso y respuesta del consulado</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <p>El servicio de asesoría personalizada para adelantar tu cita tiene un costo de:</p>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>$1,500 MXN</h2>
                        <p style={{ color: '#155724', margin: '10px 0 0 0' }}>
                            (incluye revisión de caso, traducción de documentos, carga en sistema oficial y seguimiento del proceso)
                        </p>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        Este monto <strong>no incluye la tarifa consular</strong> ni garantiza que el adelanto sea aprobado, ya que está sujeto al análisis del consulado de EE.UU.
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
                        📤 Solicitar revisión más detallada
                    </p>
                </div>
            </div>
        </>
    );
}

export default AdelantarCita;
