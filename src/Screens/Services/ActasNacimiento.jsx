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
                subtitle="Gestión rápida y confiable desde México o el extranjero."
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>📄 Actas de Nacimiento Mexicanas</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        ¿Necesitas tu acta de nacimiento mexicana para un trámite legal o migratorio? Te ayudamos a gestionarla desde cualquier parte de México o del extranjero. 
                        Nuestro equipo se encarga de solicitarla, corregirla, o prepararla para su legalización, según tus necesidades.
                    </p>
                    <p style={{ marginTop: '15px', color: '#555', fontStyle: 'italic' }}>
                        <strong>Ideal para:</strong> trámites de pasaporte, visa, ciudadanía, u otros procesos oficiales personales.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3 className="section-title">📋 Requisitos</h3>
                    
                    <div className="requirements-container">
                        <div className="requirements-category">
                            <h4>👥 Para Adultos</h4>
                            <ul>
                                <li>Acta de nacimiento no extemporánea (registrado en los primeros 3 años de vida)</li>
                                <li>Formato certificado del estado correspondiente o digital</li>
                                <li>Identificación oficial vigente (INE, constancia de estudios, etc.)</li>
                                <li>CURP</li>
                                <li>Pasaporte anterior (en caso de renovación)</li>
                                <li>Teléfono y correo de contacto</li>
                            </ul>
                        </div>

                        <div className="requirements-category">
                            <h4>👶 Para Menores de Edad</h4>
                            <ul>
                                <li>Acta de nacimiento no extemporánea (registrado en el primer año de vida)</li>
                                <li>Formato certificado del estado correspondiente o digital</li>
                                <li>Identificación oficial de ambos padres</li>
                                <li>Constancia de estudios o pediátrica del menor</li>
                                <li>CURP del menor</li>
                                <li>Teléfono y correo de contacto</li>
                            </ul>
                        </div>

                        <div className="requirements-category">
                            <h4>⚠️ Casos Especiales</h4>
                            <ul>
                                <li>Menores con alguno de los padres ausentes: asesoría adicional incluida</li>
                                <li>Actas extemporáneas: orientación sobre trámites estatales</li>
                                <li>Servicios notariales disponibles para casos complejos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3 className="section-title">⏰ Tiempo de Trámite</h3>
                    <div className="processing-time-card">
                        <div className="time-item special-time">
                            <span className="time-label">🏛️ Acta del Estado de Colima:</span>
                            <span className="time-value">10-30 minutos (entrega inmediata)</span>
                        </div>
                        <div className="time-item">
                            <span className="time-label">🏛️ Acta de otros estados:</span>
                            <span className="time-value">10-30 minutos a 5 días hábiles</span>
                        </div>
                    </div>
                    <p className="time-note">
                        <strong>Nota:</strong> Los tiempos pueden variar según la disponibilidad regional de cada estado.
                    </p>
                </div>

                {/* Servicios Incluidos */}
                <div className="cita-info-section">
                    <h3 className="section-title">✅ Servicios Incluidos</h3>
                    <div className="services-grid">
                        <div className="service-item">
                            <span className="service-icon">📋</span>
                            <div className="service-content">
                                <h4>Gestión Completa</h4>
                                <p>Manejo integral de toda la solicitud</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">💳</span>
                            <div className="service-content">
                                <h4>Pago de Derechos</h4>
                                <p>Cubrimos todos los pagos oficiales y entregamos comprobantes</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">👨‍👩‍👧‍👦</span>
                            <div className="service-content">
                                <h4>Asesoría Especializada</h4>
                                <p>Para casos de menores con padres ausentes</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="service-icon">📖</span>
                            <div className="service-content">
                                <h4>Orientación Extemporánea</h4>
                                <p>Guía para actas registradas tardíamente</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="service-ideal">
                        <h4>❗ Importante:</h4>
                        <p>
                            El costo no incluye servicios opcionales como traducción o gastos notariales por intervención 
                            en caso de padres ausentes o si su acta es extemporánea y requiere acciones adicionales.
                        </p>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3 className="section-title">💰 Inversión</h3>
                    
                    <div className="pricing-table">
                        <div className="pricing-row header-row">
                            <div className="pricing-cell service-col">Servicio</div>
                            <div className="pricing-cell cost-col">Costo</div>
                            <div className="pricing-cell description-col">Incluye</div>
                        </div>
                        
                        <div className="pricing-row">
                            <div className="pricing-cell service-col">
                                <strong>🏛️ Acta Certificada Colimense</strong>
                            </div>
                            <div className="pricing-cell cost-col">
                                <span className="price-highlight">$200 MXN</span>
                            </div>
                            <div className="pricing-cell description-col">
                                Gestión, impresión física y envío digital
                            </div>
                        </div>
                        
                        <div className="pricing-row">
                            <div className="pricing-cell service-col">
                                <strong>🏛️ Acta Certificada de Otros Estados</strong>
                            </div>
                            <div className="pricing-cell cost-col">
                                <span className="price-highlight">$400 MXN</span>
                            </div>
                            <div className="pricing-cell description-col">
                                Gestión, impresión física y envío digital
                            </div>
                        </div>
                        
                        <div className="pricing-row special-row">
                            <div className="pricing-cell service-col">
                                <strong>⚖️ Intervención Notarial (Padres Ausentes)</strong>
                            </div>
                            <div className="pricing-cell cost-col">
                                <span className="price-highlight">$2,000 MXN</span>
                            </div>
                            <div className="pricing-cell description-col">
                                Gestión notarial y envío
                            </div>
                        </div>
                        
                        <div className="pricing-row special-row">
                            <div className="pricing-cell service-col">
                                <strong>⚖️ Intervención Notarial (Acta Extemporánea)</strong>
                            </div>
                            <div className="pricing-cell cost-col">
                                <span className="price-highlight">Desde $2,000 MXN</span>
                            </div>
                            <div className="pricing-cell description-col">
                                Costo adicional según lugar de registro
                            </div>
                        </div>
                    </div>

                </div>

                {/* Llamadas a la Acción */}
                <div className="cita-info-section contact">
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

export default ActasNacimiento;
