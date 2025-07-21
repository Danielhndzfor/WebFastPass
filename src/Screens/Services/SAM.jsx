import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function FormatoSAMMenoresMexico() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Autorización de Viaje para Menores (Formato SAM – INM)"
                subtitle="Para menores mexicanos con pasaporte y visa que viajan solos o acompañados de un tercero a Estados Unidos y no desea solicitar un poder notarial."
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Autorización de Viaje para Menores (Formato SAM – INM)</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        El formato SAM (Sistema de Autorización de Menores) es un documento emitido por el Instituto Nacional de Migración (INM), 
                        <strong> obligatorio para todos los menores de nacionalidad mexicana</strong> que viajan fuera del país sin compañía de ambos padres o sin quien ejerza la patria potestad.
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        Este documento es requerido incluso si el menor cuenta con pasaporte y visa americana vigente, y aplica cuando viaja solo, 
                        con un familiar o con una persona distinta a sus padres, ya sea vía aérea, marítima o terrestre.
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        FastPass Visa te asesora paso a paso para garantizar que el trámite del formato SAM se realice de manera correcta, segura y sin contratiempos.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para más información.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Copia del pasaporte mexicano vigente del menor</li>
                        <li>Copia de la visa americana vigente del menor</li>
                        <li>Copia legible de las identificaciones oficiales de ambos padres o tutor legal</li>
                        <li>Acta de nacimiento del menor</li>
                        <li>Copia del pasaporte o identificación oficial de la persona acompañante (si aplica)</li>
                        <li>Itinerario de vuelo, reservación aérea o carta motivo de viaje</li>
                    </ul>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        <strong>• Preparación de formato:</strong> 1 a 2 días hábiles<br/>
                        <strong>• Autorización por parte del INM:</strong> Mismo día o semana o 48-72 horas antes del vuelo o viaje, si se presenta correctamente<br/>
                        <strong>• Vigencia:</strong> 90 días naturales a partir de su validación por el INM
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Revisión y verificación de los documentos requeridos</li>
                        <li>Llenado completo del formato SAM oficial en PDF editable</li>
                        <li>Guía paso a paso para su firma electrónica o manual</li>
                        <li>Instrucciones específicas sobre dónde y cómo presentar el documento ante el INM</li>
                        <li>Acompañamiento en caso de errores, observaciones o cambios por parte de autoridades migratorias</li>
                    </ol>
                    
                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                        <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>Importante</h4>
                        <ul style={{ color: '#856404', margin: '0' }}>
                            <li>La falta del formato SAM puede impedir el abordaje del vuelo o generar retrasos en puntos migratorios</li>
                            <li>El documento debe coincidir exactamente con los datos del menor, padres y acompañante</li>
                            <li>En algunos aeropuertos o puertos, el acompañante también debe firmar el formato en presencia de INM</li>
                            <li>Aplica únicamente para menores mexicanos; los menores con otra nacionalidad deben cumplir con los requisitos del país emisor de su pasaporte</li>
                        </ul>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>$800 MXN</h2>
                        <p style={{ color: '#155724', margin: '10px 0 0 0' }}>
                            por menor
                        </p>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        El formato SAM es un documento oficial gratuito del INM; sin embargo, el costo indicado corresponde exclusivamente a la asesoría especializada, llenado y revisión documental que ofrece FastPass Visa como empresa de gestión migratoria, bajo la solicitud de los interesados.
                    </p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        ¡SOLICITA TU ASESORAMIENTO!
                    </button>
                    <p style={{ marginTop: '10px', fontSize: '14px' }}>
                        📤 Solicitar una consulta inicial
                    </p>
                </div>
            </div>
        </>
    );
}

export default FormatoSAMMenoresMexico;
