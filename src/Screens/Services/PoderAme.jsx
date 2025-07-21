import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PoderNotarialMenoresUSA() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Formulario DS-3053 – Consentimiento de Padre/Madre Ausente"
                subtitle="Documento oficial del Departamento de Estado de EE.UU. cuando uno de los padres no puede asistir personalmente a la cita de trámite de pasaporte americano para un menor."
                linkText="¡Solicita Asesoría!"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Formulario DS-3053 – Consentimiento de Padre/Madre Ausente para Pasaporte Americano de Menor</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        El formulario DS-3053 es un documento oficial del Departamento de Estado de EE.UU. utilizado cuando uno de los padres no puede asistir personalmente a la cita de trámite de pasaporte americano para un menor de edad. 
                        Mediante este formato, el padre/madre ausente otorga su consentimiento notariado para autorizar la emisión del pasaporte del menor.
                    </p>
                    <p style={{ marginTop: '15px', color: '#d63384', fontWeight: 'bold' }}>
                        <strong>Este documento es obligatorio</strong> cuando solo un padre puede presentarse a la cita ante el consulado o agencia consular.
                    </p>
                    <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                        📩 Contáctanos ahora para más información.
                    </p>
                </div>

                {/* Requisitos */}
                <div className="cita-info-section">
                    <h3>Requisitos</h3>
                    <ul>
                        <li>Copia del pasaporte o identificación oficial vigente del padre/madre ausente</li>
                        <li>Copia del acta de nacimiento del menor o documento que acredite la relación parental</li>
                        <li>Nombre completo del adulto que acudirá con el menor a la cita</li>
                        <li>El formulario DS-3053 debe firmarse ante notario público (en México) o funcionario consular americano (si se encuentra fuera de EE.UU.)</li>
                        <li>El documento debe estar impreso a color y sin errores, tachaduras o correcciones</li>
                    </ul>
                </div>

                {/* Tiempo de Trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    <p>
                        <strong>Preparación y llenado del formulario:</strong> 1 a 2 días hábiles<br/>
                        <strong>Vigencia del documento:</strong> 90 días a partir de la firma ante notario
                    </p>
                </div>

                {/* Servicio Incluye */}
                <div className="cita-info-section">
                    <h3>Servicio Incluye</h3>
                    <ol>
                        <li>Revisión del caso para verificar elegibilidad</li>
                        <li>Llenado del formulario DS-3053 en formato digital PDF</li>
                        <li>Instrucciones detalladas sobre cómo firmarlo y validarlo ante notario</li>
                        <li>Traducción explicativa del documento en español para mejor comprensión</li>
                        <li>Acompañamiento en la revisión antes de presentarlo en la cita de pasaporte</li>
                    </ol>
                    
                    <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                        <h4 style={{ color: '#856404', margin: '0 0 10px 0' }}>Importante</h4>
                        <ul style={{ color: '#856404', margin: '0' }}>
                            <li>No se aceptan formularios escaneados ni copias, debe entregarse el original firmado y notariado</li>
                            <li>El notario no debe hacer correcciones en el formato</li>
                            <li>El DS-3053 solo aplica si hay custodia compartida o autoridad parental legal conjunta</li>
                            <li>Si el padre/madre está ausente y no localizable, se debe solicitar una autorización especial por orden judicial</li>
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

export default PoderNotarialMenoresUSA;