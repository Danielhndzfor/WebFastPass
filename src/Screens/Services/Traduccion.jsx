import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function TraduccionDocumentos() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Traducciones Certificadas Español ⇄ Inglés"
                subtitle="¿Tienes documentos que necesitas traducir para tu trámite de visa, pasaporte, ciudadanía o cualquier proceso legal o migratorio?"
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Traducciones Certificadas Español ⇄ Inglés</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        ¿Tienes documentos que necesitas traducir para tu trámite de visa, pasaporte, ciudadanía o cualquier proceso legal o migratorio? 
                        Realizamos traducciones de documentos personales y legales, aceptadas por consulados, embajadas, USCIS y otras autoridades.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para una cotización.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Documento original escaneado o fotocopia clara del documento a traducir</li>
                        <li>Indicar si se requiere traducción de español a inglés o de inglés a español</li>
                        <li>En caso de ser para trámite oficial (visa, pasaporte, USCIS, etc.), especificar si necesitas firma certificada y/o hoja membretada</li>
                    </ul>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        <strong>Traducción básica:</strong> 24 a 48 horas<br/>
                        <strong>Traducción oficial certificada:</strong> 2 a 4 días hábiles (puede variar según cantidad de hojas)
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Revisión y análisis del documento original</li>
                        <li>Traducción por profesional bilingüe con experiencia en temas migratorios y legales</li>
                        <li>Revisión orto tipográfica final</li>
                        <li>Entrega en PDF listo para impresión o presentación digital</li>
                        <li>Si se requiere: hoja membretada y firma del traductor para validez oficial</li>
                    </ol>
                    
                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                        <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>Importante</h4>
                        <ul style={{ color: '#856404', margin: '0' }}>
                            <li>El costo base es por hoja estándar. Documentos largos o técnicos pueden generar costo adicional</li>
                            <li>Solo se aceptan documentos claros, completos y legibles</li>
                            <li>No se traducen documentos alterados, ilegibles o con tachaduras</li>
                            <li>El servicio es confidencial y se entrega en formato digital o impreso según se requiera</li>
                        </ul>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>Desde $500 MXN</h2>
                        <p style={{ color: '#155724', margin: '10px 0 0 0' }}>
                            por hoja
                        </p>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        (El precio final puede variar según tipo de documento, número de hojas, complejidad del texto y requisitos de certificación)
                    </p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        ¡SOLICITA TU TRADUCCIÓN!
                    </button>
                    <p style={{ marginTop: '10px', fontSize: '14px' }}>
                        📤 Solicitar una cotización previa
                    </p>
                </div>
            </div>
        </>
    );
}

export default TraduccionDocumentos;
