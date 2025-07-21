import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PasaporteAmericano() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Americano"
                subtitle="Servicios especializados para tramitación por primera vez o renovación."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Pasaporte Americano</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Nuestro equipo brinda orientación integral para ciudadanos estadounidenses que residen en México, asegurando un proceso claro, ágil y eficiente. Nos encargamos de revisar su documentación, coordinar citas y guiarlo en cada paso del trámite, con el objetivo de facilitar la obtención o renovación de su pasaporte sin contratiempos.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una evaluación inicial sin costo.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <p style={{ marginBottom: '20px' }}>Documentos necesarios para la tramitación del pasaporte estadounidense:</p>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Información básica del trámite:</h4>
                        <ul>
                            <li><strong>Tipo de solicitante:</strong> Indicar si el trámite es para un adulto o menor de edad</li>
                            <li><strong>Información adicional:</strong> Detallar si la solicitud es por primera vez, renovación o recuperación por robo o extravío</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Formularios oficiales:</h4>
                        <ul>
                            <li><strong>Formulario DS-11:</strong> Para adultos o menores por primera vez</li>
                            <li><strong>Formulario DS-82:</strong> Para renovación (si el anterior se emitió cuando era mayor de 17 años, se venció hace 10 años o menos, no esté dañado y no tenga errores en el nombre)</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>Documentos requeridos:</h4>
                        <ul>
                            <li><strong>Certificado de primaria y secundaria:</strong> Si el solicitante los terminó en México</li>
                            <li><strong>Documentos personales principales:</strong> Acta Nacimiento, Apostilla, certificado de naturalización, Seguro Social, pasaporte (previo)</li>
                            <li><strong>Documentos personales secundarios:</strong> Pulsera hospital, certificado de hospital, record vacunas, licencias, credenciales, fe de bautismo, etc.</li>
                            <li><strong>2 fotografías tamaño 5cm x 5cm:</strong> A color, no instantáneas</li>
                        </ul>
                    </div>
                    
                    <div style={{ backgroundColor: '#e8f4f8', border: '1px solid #bee5eb', borderRadius: '8px', padding: '15px', marginTop: '20px' }}>
                        <h4 style={{ color: '#0A1547', marginBottom: '10px' }}>📋 Requisitos adicionales para menores de edad:</h4>
                        <ul style={{ marginBottom: '0' }}>
                            <li><strong>Formulario DS-3053:</strong> Consentimiento parental, si uno de los padres no puede estar presente al momento de la cita</li>
                            <li><strong>Formulario DS-5525:</strong> Si uno de los padres se encuentra imposibilitado de ubicar al otro padre por circunstancias extraordinarias</li>
                            <li><strong>Certificado de defunción:</strong> Si ha fallecido uno de los padres</li>
                            <li><strong>Resolución de custodia única:</strong> Si un padre o madre tiene custodia única del menor</li>
                            <li><strong>Certificado de nacimiento del menor:</strong> Si sólo aparece el nombre de la madre en el certificado</li>
                        </ul>
                    </div>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <ul>
                        <li><strong>Espera de cita:</strong> 1 a 2 semanas</li>
                        <li><strong>Espera de entrega:</strong> 2 a 4 semanas</li>
                    </ul>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ul>
                        <li><strong>Asesoría personalizada:</strong> Evaluación inicial para confirmar que cumple con todos los requisitos antes de iniciar el proceso.</li>
                        <li><strong>Revisión de documentos:</strong> Garantizamos que toda su documentación sea correcta y esté completa, evitando rechazos o demoras.</li>
                        <li><strong>Llenado de Formulario DS-11</strong> (Solicitud de pasaporte)</li>
                        <li><strong>Gestión de citas:</strong> Búsqueda y confirmación de cita en oficina matriz o en oficina de enlace más cercano, según su disponibilidad y preferencias.</li>
                        <li><strong>Atención a menores:</strong> Asesoramos en casos de tramitación para menores con circunstancias especiales, como la ausencia de uno de los padres.</li>
                        <li><strong>Atención a adultos mayores:</strong> Asesoramos en casos de tramitación con circunstancias especiales por errores en nombre u otros específicos.</li>
                        <li><strong>Entrega de documentos:</strong> Hoja de instrucciones, listado de documentos a presentar, confirmación de cita y formato DS-11 (solicitud completa), documentos adicionales.</li>
                    </ul>
                </div>

                {/* Costo Derechos */}
                <div className="cita-info-section">
                    <h3>Costo de Derechos</h3>
                    <ul>
                        <li><strong>Adulto:</strong> $165 USD</li>
                        <li><strong>Menor de edad:</strong> $135 USD</li>
                    </ul>
                </div>

                {/* Costo Honorarios */}
                <div className="cita-info-section">
                    <h3>Costo Honorarios</h3>
                    <ul>
                        <li><strong>Por solicitante:</strong> $1,000 MXN.</li>
                    </ul>
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

export default PasaporteAmericano;
