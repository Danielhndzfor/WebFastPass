import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PasaporteMexicano() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Mexicano"
                subtitle="Asistencia especializada para tramitación por primera vez, renovación o reemplazo."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Pasaporte Mexicano</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestro personal le guía paso a paso para agilizar el proceso y garantizar el cumplimiento de los requisitos.
                    </p>
                    <ul>
                        <li><strong>Primera vez y renovación:</strong> Aseguramos que cuente con una fecha de cita que se adapte a sus tiempos, su documentación esté completa (adultos y menores de edad), así como su solicitud sea solicitada y presentada correctamente.</li>
                        <li><strong>Pasaportes para menores de edad:</strong> Apoyo en casos de dificultad parental por ausencia de padre o madre y sugerimos la documentación adicional.</li>
                        <li><strong>Descuentos especiales:</strong> Gestión de pasaportes con tarifas preferenciales en pago de derechos para personas con discapacidad o mayores de 60 años.</li>
                    </ul>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <p style={{ marginBottom: '20px' }}>Documentos necesarios para la tramitación del pasaporte mexicano:</p>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Información básica del trámite:</h4>
                        <ul>
                            <li><strong>Tipo de solicitante:</strong> Indicar si el trámite es para un adulto o menor de edad.</li>
                            <li><strong>Información adicional:</strong> Detallar si la solicitud es por primera vez, renovación o recuperación por robo o extravío.</li>
                            <li><strong>Vigencia del pasaporte:</strong> Indicar si el trámite es para una vigencia de 3, 6 o 10 años.</li>
                            <li><strong>Información de contacto:</strong> Teléfono y correo electrónico para el seguimiento del trámite.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Documentos oficiales requeridos:</h4>
                        <ul>
                            <li><strong>Identificación oficial:</strong> Pasaporte anterior (renovación) o adultos INE (primera vez)</li>
                            <li><strong>Para menores de edad:</strong>
                            </li>
                                <ul>
                                    <li>Constancia Pediátrica (para menores de 0 a 6 años)</li>
                                    <li>Constancia de Estudios (para menores de 7 a 17 años)</li>
                                </ul>
                            <li><strong>Acta de nacimiento:</strong> Reciente y verificada por el Registro Civil (en casos de actas extemporáneas, se evaluará documentación adicional)</li>
                            <li><strong>CURP actualizada:</strong> Debe coincidir con los datos del acta de nacimiento</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Documentación adicional (casos especiales):</h4>
                        <ul>
                            <li><strong>Menores con padre o madre ausente:</strong> Carta de consentimiento notarial o solicitud OP-7, o en su defecto acta de defunción</li>
                            <li><strong>Robo o extravío:</strong> Denuncia oficial del MP en caso de robo o extravío del pasaporte</li>
                            <li><strong>Acta extemporánea:</strong> Fe bautismo verificada por registro civil, acta nacimiento padre o madre o hermano mayor</li>
                        </ul>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <ul>
                        <li><strong>Trámite previo a cita:</strong> 30 a 60 minutos, dependiendo de la disponibilidad</li>
                        <li><strong>Espera de cita:</strong> 1 día mínimo, máximo 7 días</li>
                        <li><strong>Espera de entrega:</strong> Inmediata, se entrega el día de cita en oficina matriz y 3 a 5 días en oficinas de enlace.</li>
                    </ul>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ul>
                        <li><strong>Asesoría personalizada:</strong> Evaluación inicial para confirmar que cumple con todos los requisitos antes de iniciar el proceso.</li>
                        <li><strong>Revisión de documentos:</strong> Garantizamos que toda su documentación sea correcta y esté completa, evitando rechazos o demoras.</li>
                        <li><strong>Gestión de actas nacimiento y CURP:</strong> Garantizamos que su acta esté registrada ante el sistema nacional y RENAPO. Solicitamos su acta del estado donde fue registrado.</li>
                        <li><strong>Gestión de citas:</strong> Búsqueda y confirmación de cita ante la SRE (Secretaría de Relaciones Exteriores) según su disponibilidad y preferencias.</li>
                        <li><strong>Atención a menores:</strong> Asesoramos en casos de tramitación para menores con circunstancias especiales, como la ausencia de uno de los padres o actas extemporáneas o sin identificación oficial.</li>
                        <li><strong>Atención a adultos mayores:</strong> Asesoramos en casos de tramitación con circunstancias especiales por errores en nombre o por actas extemporáneas.</li>
                        <li><strong>Llenado de Formulario OP-5</strong> (Solicitud de pasaporte)</li>
                        <li><strong>Gestión de pagos de derechos</strong> en ventanilla de banco (si lo requiere).</li>
                        <li><strong>Entrega de documentos:</strong> Hoja de instrucciones, listado de documentos a presentar, confirmación de cita y formato OP-5 (solicitud completa), documentos adicionales.</li>
                    </ul>
                </div>

                {/* Costo Derechos */}
                <div className="cita-info-section">
                    <h3>Costo de Derechos (2025)</h3>
                    <ul>
                        <li><strong>Pasaporte por 1 año:</strong> $885 MXN (Con descuento: $445 MXN).</li>
                        <li><strong>Pasaporte por 3 años:</strong> $1,730 MXN (Con descuento: $865 MXN).</li>
                        <li><strong>Pasaporte por 6 años:</strong> $2,350 MXN (Con descuento: $1,175 MXN).</li>
                        <li><strong>Pasaporte por 10 años:</strong> $4,120 MXN (Con descuento: $2,060 MXN).</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        <strong>¿Quién aplica para el descuento del 50%?</strong> Personas mayores de 60 años (Credencial INAPAM), personas con discapacidad (Certificado Médico o Credencial DIF ESTATAL) y trabajadores agrícolas con visa trabajo temporal.
                    </p>
                </div>

                {/* Costo Honorarios */}
                <div className="cita-info-section">
                    <h3>Costo Honorarios</h3>
                    <ul>
                        <li><strong>Individual:</strong> $350 MXN por persona. (Por asesoría y gestión)</li>
                        <li><strong>En grupo familiar o parejas:</strong> $300 MXN por persona. (Por asesoría y gestión)</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        El servicio de citas para pasaporte mexicano es gratuito; sin embargo, el costo indicado corresponde exclusivamente a la asesoría especializada, llenado y revisión documental que ofrece FastPass Visa como empresa de gestión migratoria, bajo la solicitud de los interesados.
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

export default PasaporteMexicano;
