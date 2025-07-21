import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function VisaRechazadaCancelada() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Visa Rechazada o Cancelada"
                subtitle="Asesoría especializada para casos de rechazo o cancelación de visa."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Visa Americana Rechazada o Cancelada</h2>
                    <h3 style={{ color: '#0A1547', marginTop: '10px' }}>Análisis, corrección de perfil y nueva solicitud con asesoría profesional</h3>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestro equipo de expertos analiza minuciosamente tu caso anterior, identifica las causas probables del rechazo o cancelación y prepara contigo una nueva estrategia sólida para tu próxima solicitud.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <p style={{ marginBottom: '20px' }}>Para evaluar su caso y preparar una nueva solicitud necesitamos:</p>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Documentación del rechazo anterior:</h4>
                        <ul>
                            <li><strong>Copia del rechazo anterior:</strong> Página de confirmación DS-160, hoja de rechazo, o correo de cancelación</li>
                            <li><strong>Pasaporte vigente</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Información sobre la causa del rechazo:</h4>
                        <p style={{ marginBottom: '10px' }}>Indique si el rechazo fue por:</p>
                        <ul>
                            <li>Por falta de arraigo</li>
                            <li>Por dudas en el motivo del viaje</li>
                            <li>Por inconsistencias en los datos declarados</li>
                            <li>Por antecedentes migratorios</li>
                            <li>Por cancelación automática u otras causas</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '15px' }}>
                        <h4 style={{ color: '#856404', marginBottom: '10px' }}>⚠️ Compromiso requerido:</h4>
                        <p style={{ color: '#856404', margin: '0' }}>
                            <strong>Disposición para revisar y corregir</strong> el historial y la información anteriormente presentada. Es fundamental su colaboración para identificar y solucionar los problemas que causaron el rechazo inicial.
                        </p>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <ul>
                        <li><strong>Evaluación inicial del caso:</strong> 1 a 2 días hábiles.</li>
                        <li><strong>Preparación de nueva solicitud DS-160:</strong> 1 a 3 días.</li>
                        <li><strong>Espera de cita consular:</strong>
                            <ul>
                                <li>Primera vez tras rechazo: 4 a 8 meses promedio (dependiendo del consulado).</li>
                                <li>Visa cancelada: Varía según el estatus actual y necesidad de entrevista.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Análisis completo del caso anterior (rechazo o cancelación).</li>
                        <li>Redacción de nueva solicitud DS-160 con estrategia mejorada.</li>
                        <li>Corrección de inconsistencias, omisiones o errores previos.</li>
                        <li>Preparación documental reforzada con enfoque en arraigo y solvencia.</li>
                        <li>Capacitación para entrevista consular con simulacro de preguntas.</li>
                        <li>Apoyo en creación o recuperación de cuenta consular.</li>
                        <li>Gestión del pago MRV y agenda de citas.</li>
                        <li>Seguimiento hasta entrega del pasaporte y resolución del caso.</li>
                    </ol>
                </div>

                {/* Costo de Derechos */}
                <div className="cita-info-section">
                    <h3>Costo de Derechos Visa (MRV)</h3>
                    <p><strong>Costo por edad del solicitante:</strong></p>
                    <ul>
                        <li><strong>De 15 años en adelante:</strong> $185 USD</li>
                        <li><strong>De 0 a 14 años:</strong> $16 USD</li>
                    </ul>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Tipo de Caso</th>
                                    <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Honorarios (incluye MRV)</th>
                                    <th style={{ border: '1px solid #dee2e6', padding: '12px', textAlign: 'left' }}>Vigencia de Visa*</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Rechazo visa mayores de 15 años</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: 'bold', color: '#239619' }}>$6,200 MXN</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Hasta 10 años</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Rechazo visa menores de 15 años</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: 'bold', color: '#239619' }}>$2,800 MXN</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Hasta cumplir 15 o 10 años</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Visa cancelada (revisión + reinscripción)</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: 'bold', color: '#239619' }}>Desde $6,500 MXN</td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>Variable</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '14px' }}>
                        *Vigencia sujeta a aprobación por el consulado.
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

export default VisaRechazadaCancelada;
