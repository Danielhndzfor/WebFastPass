import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PoderNotarialMenoresMexico() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Poder Notarial para Pasaporte Mexicano de un Menor"
                subtitle="El poder notarial es una alternativa válida y legal al formato OP-7 cuando uno o ambos padres no pueden presentarse personalmente al trámite."
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Poder Notarial para Pasaporte Mexicano de un Menor (Consentimiento de Padres)</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        El poder notarial es una alternativa válida y legal al formato OP-7 cuando uno o ambos padres no pueden presentarse personalmente al trámite del pasaporte mexicano del menor. 
                        Este documento debe ser otorgado ante notario público (en México) o notario/funcionario consular (en el extranjero) y permite autorizar que el otro padre o un tercero lleve a cabo el trámite.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para más información.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Copia legible del acta de nacimiento del menor</li>
                        <li>Copia de la identificación oficial vigente del padre o madre que otorgará el poder</li>
                        <li>Nombre completo y datos del adulto que llevará al menor a la cita</li>
                        <li>Documento que acredite la imposibilidad de asistir personalmente (si aplica)</li>
                        <li>En caso de otorgarse en el extranjero, el poder debe ser apostillado o legalizado y, si está en otro idioma, traducido al español</li>
                    </ul>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        <strong>• Elaboración del formato:</strong> 1 a 2 días hábiles<br/>
                        <strong>• Si se requiere notariar con notario público sugerido por FastPass Visa:</strong> sujeto a disponibilidad del notario
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Redacción profesional del poder notarial conforme a lineamientos de la SRE</li>
                        <li>Instrucciones específicas sobre dónde y cómo firmarlo</li>
                        <li>Asesoría personalizada en caso de firmas en el extranjero</li>
                        <li>Revisión de documentos antes de la cita de pasaporte</li>
                    </ol>
                    
                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                        <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>Importante</h4>
                        <ul style={{ color: '#856404', margin: '0' }}>
                            <li>Este poder debe presentarse en original el día de la cita del menor</li>
                            <li>No se aceptan poderes con tachaduras, enmiendas o formatos distintos a los aprobados por la SRE</li>
                            <li>Si se emite en el extranjero, debe ser legalizado o apostillado según el país, y traducido al español si está en otro idioma</li>
                        </ul>
                    </div>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', padding: '20px', textAlign: 'center', marginTop: '15px' }}>
                        <h2 style={{ color: '#155724', margin: '0', fontSize: '2em' }}>$2,000 - $2,500 MXN</h2>
                        <p style={{ color: '#155724', margin: '10px 0 0 0' }}>
                            más gastos de envío
                        </p>
                    </div>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                        Incluye el costo de la firma y sello del notario, además de certificación de la identificación oficial con fotografía INE o pasaporte.
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

export default PoderNotarialMenoresMexico;
