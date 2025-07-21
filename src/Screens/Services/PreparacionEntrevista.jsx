import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PreparacionEntrevista() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Análisis de Estatus y/o Preparación para Entrevista"
                subtitle="¿Ya comenzaste tu trámite? Te ayudamos a analizar tu caso y prepararte estratégicamente para tu entrevista consular."
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Análisis de Estatus y/o Preparación para Entrevista</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        ¿Ya comenzaste tu trámite en otro lugar, pero tienes dudas sobre tu entrevista o el seguimiento de tu solicitud? 
                        En FastPass Visa te ayudamos a analizar tu caso actual, revisar tu estatus y prepararte estratégicamente para tu entrevista consular.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Tener un proceso ya iniciado (formulario DS-160 generado o cita ya programada)</li>
                        <li>Compartir con nosotros tu número de confirmación de DS-160 y, si lo tienes, comprobantes de cita o recibo MRV</li>
                        <li>Contar con acceso al correo vinculado al trámite para verificar el estatus</li>
                    </ul>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        De <strong>24 a 48 horas</strong> después de recibir tu información completa.
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Revisión del estado de tu solicitud y orientación sobre pasos pendientes</li>
                        <li>Validación de datos clave ingresados en tu DS-160</li>
                        <li>Análisis de tu perfil y recomendaciones para fortalecer tu presentación consular</li>
                        <li>Simulación de entrevista consular personalizada, con preguntas reales según tu perfil</li>
                        <li>Recomendaciones sobre documentación complementaria según tu ocupación, motivos de viaje y vínculos</li>
                    </ol>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        <strong>Importante:</strong> Este servicio no incluye modificación del formulario ni reprogramación de cita, pero puede complementarse con otros servicios si lo deseas.
                    </p>
                    <p style={{ marginTop: '10px', color: '#0A1547' }}>
                        Este servicio es ideal si comenzaste tu trámite por tu cuenta o con otro asesor, pero deseas reforzar tu solicitud y aumentar tus probabilidades de éxito ante el consulado.
                    </p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>$600 MXN</h2>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        (Servicio independiente, no incluye pago de derechos consulares ni garantía de aprobación).
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
                    <p style={{ marginTop: '10px', fontSize: '14px' }}>
                        📤 Solicitar revisión más personalizada
                    </p>
                </div>
            </div>
        </>
    );
}

export default PreparacionEntrevista;
