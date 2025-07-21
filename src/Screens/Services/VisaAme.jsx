import React, { useState } from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function VisaAmericana() {
    const [activeTab, setActiveTab] = useState('turismo');

    const visaTypes = {
        turismo: {
            title: 'Visa Americana de Visitante temporal (B1/B2)',
            subtitle: '(Turismo, Negocios, Viaje por placer)',
            description: 'Brindamos asesoramiento experto para la solicitud de visas de turismo y negocios (B1/B2) para Estados Unidos. Nuestro equipo lo guía en cada etapa del proceso, desde el llenado del formulario DS-160 hasta la programación de citas consulares, asegurando que su documentación esté completa y en orden. Además, lo preparamos para su entrevista consular, aumentando sus probabilidades de éxito y facilitando un proceso eficiente y sin complicaciones.',
            requisitos: [
                'Tipo de solicitante: Indicar si el trámite es para un adulto o menor de edad.',
                'Información adicional: Detallar si la solicitud es por primera vez, renovación o recuperación por robo o extravío.',
                'Pasaporte vigente',
                'Formulario DS-160, para ello se debe facilitar de manera detallada información personal laborales, familiares, fechas y motivo de su viaje.',
                'Página de confirmación del Formulario DS-160 (para presentar al CAS)',
                'Comprobante de pago de derechos MRV',
                'Documentación adicional (para presentar al Consulado): Pruebas de solvencia económica, recursos financieros necesarios para cubrir los gastos durante tu estancia en Estados Unidos, tales como estados de cuenta bancarios, contratos, cartas laborales o cualquier otro respaldo que acredite tu estabilidad económica.',
                'Vínculos con tu país de origen, conexiones sólidas con tu país de residencia, como un empleo fijo, propiedades a tu nombre o familiares que dependan de ti, lo cual respalde tu intención de regresar al término de tu visita a Estados Unidos.'
            ],
            tiempo: {
                primeraVez: {
                    preparacion: 'De 1 a 2 días',
                    esperaCita: 'De 4 a 6 meses, hasta 12 meses. (depende de Consulado seleccionado)',
                    esperaEntrega: '4 a 8 semanas'
                },
                renovacion: {
                    preparacion: 'De 1 a 2 días',
                    esperaCita: 'De 1 a 2 semanas, hasta 4 semanas. (depende de CAS seleccionado)',
                    esperaEntrega: '4 a 8 semanas'
                }
            },
            servicioIncluye: [
                'Asesoría personalizada, llenado formatos y formularios, creación cuenta consular.',
                'Gestión de pago de tarifa solicitud de visa no inmigrante (MRV) y Paquetería DHL.',
                'Búsqueda y selección de cita(s) consulado mas cercano a su residencia.',
                'Preparación de carpeta con documentos generados del proceso del trámite.',
                'Revisión de documentos que debe presentar.',
                'Preparación para cita al CAS (Centro de Atención a Solicitantes)',
                'Simulacro y preparación para entrevista al Consulado.',
                'Seguimiento para recolección de documentos en paqueteria.'
            ],
            costoDerechos: {
                mayores: '$185 USD (De 15 años en adelante)',
                menores: '$16 USD (De 0 a 14 años)'
            },
            costos: {
                mayores: {
                    primeraVez: '$6,200',
                    renovacion: '$6,000',
                    vigencia: '10 años (120 meses)'
                },
                menores: {
                    primeraVez: '$2,800',
                    renovacion: '$2,600',
                    vigencia: '10 años (120 meses) o los meses restantes a los 15 años de edad.'
                }
            },
            buttonText: '¡SOLICITA ASESORÍA AHORA!'
        },
        empleada: {
            title: 'Visa B-1 para Empleada Doméstica y Niñera',
            subtitle: '',
            description: 'Asesoramos a empleadas domésticas y niñeras mayores de 18 años que acompañarán temporalmente a ciudadanos o residentes de EE.UU., bajo la categoría de visa B-1 para empleados domésticos. Esta visa permite trabajar exclusivamente para el empleador durante su estancia temporal, según regulaciones migratorias vigentes.',
            requisitos: [
                'Para la empleada o niñera:',
                'Edad mínima de 18 años y máximo 24 años',
                'Pasaporte mexicano vigente',
                'Formulario DS-160 completado',
                'Pago de tarifa MRV ($185 USD)',
                'Experiencia comprobable como trabajadora del hogar (>6 meses)',
                'Contrato laboral en inglés, indicando salario, horario, descanso, alojamiento y condiciones legales según las normas del FM 9 FAM',
                'Pruebas de empleo previo (recibos, IMSS, cartas)',
                'Para el empleador (ciudadano/residente EEUU):',
                'Pasaporte y visa B1 o B1/B2 o green card',
                'Carta de invitación y detalles del viaje',
                'Itinerario del viaje',
                'Evidencia de solvencia económica'
            ],
            tiempo: {
                simple: {
                    preparacion: '3–5 días hábiles',
                    esperaCita: '4–6 meses (según consulado)',
                    esperaEntrega: '4–8 semanas post-entrevista'
                }
            },
            servicioIncluye: [
                'Evaluación inicial de elegibilidad',
                'Elaboración del formulario DS-160',
                'Redacción del contrato laboral en inglés y español, conforme a normas federales.',
                'Carta de empleo e invitación personalizada',
                'Gestión de cuenta consular y pago MRV',
                'Preparación documental para cita en CAS y entrevista',
                'Simulación de entrevista con enfoque laboral',
                'Seguimiento post-entrevista y recolección de visa'
            ],
            costoDerechos: {
                general: '$185 USD por solicitante (tarifa oficial no reembolsable)'
            },
            costos: {
                general: {
                    tramite: '$6,500 MXN',
                    nota: '(Incluye asesoría, contratos y acompañamiento. No incluye la tarifa MRV.)'
                }
            },
            buttonText: '¡AGENDA TU CONSULTA SIN COSTO!'
        },
        estudiante: {
            title: 'Visa Americana de Estudiante (F-1 / M-1 / J-1)',
            subtitle: 'Para estudiar idiomas, una carrera o realizar intercambio escolar en EE.UU.',
            description: 'Brindamos asesoría especializada para estudiantes mexicanos que desean estudiar en Estados Unidos, ya sea para cursos de inglés, preparatorias, universidades, diplomados, intercambios escolares o programas técnicos. Te guiamos paso a paso para cumplir con los requisitos exigidos por el Departamento de Estado de EE.UU., desde la aceptación por parte de la institución académica, hasta la preparación para tu entrevista consular. Nuestro servicio incrementa tus probabilidades de aprobación y facilita un proceso organizado, confiable y sin contratiempos.',
            requisitos: [
                'Pasaporte vigente',
                'Formulario I-20 (emitido por la institución educativa acreditada en EE.UU.)',
                'Comprobante de pago de la tarifa SEVIS (I-901)',
                'Formulario DS-160 completado y hoja de confirmación',
                'Comprobante de pago de derechos MRV ($185 USD)',
                'Carta de aceptación de la escuela o universidad',
                'Pruebas de solvencia económica: Estados de cuenta bancarios, Carta de beca (si aplica), Carta de manutención (si aplica)',
                'Comprobantes de estudios anteriores en México (boletas, constancias, certificados, etc.)',
                'Documentos que acrediten lazos con México (familia, empleo del patrocinador, propiedades, etc.)',
                'CURP del estudiante (para menores)'
            ],
            tiempo: {
                simple: {
                    preparacion: '2 a 4 días',
                    esperaCita: 'De 3 a 6 meses, según disponibilidad del consulado seleccionado',
                    esperaEntrega: '4 a 8 semanas después de la entrevista'
                }
            },
            servicioIncluye: [
                'Asesoría personalizada para elección y preparación del tipo de visa (F-1, M-1 o J-1)',
                'Llenado del formulario DS-160',
                'Apoyo para el pago de tarifa SEVIS (I-901) y tarifa consular MRV',
                'Creación o recuperación de cuenta en portal consular',
                'Búsqueda y programación de cita en CAS y Consulado',
                'Preparación y revisión de documentos requeridos',
                'Elaboración de carpeta completa de soporte',
                'Preparación para entrevista consular con simulacro',
                'Seguimiento hasta recolección de documentos en DHL'
            ],
            costoDerechos: {
                general: '$185 USD por solicitante (tarifa oficial no reembolsable)'
            },
            costos: {
                general: {
                    tramite: '$6,500 pesos mexicanos',
                    nota: 'El costo de la tarifa SEVIS (I-901) no está incluido y varía por tipo de visa: F-1: $350 USD, M-1: $350 USD, J-1: $220 USD (o menos, dependiendo del programa)'
                }
            },
            buttonText: '¡SOLICITA ASESORÍA AHORA!'
        },
        tripulante: {
            title: 'Visa Americana de Tripulante C1/D',
            subtitle: 'Asesoría especializada para tripulantes marítimos y aéreos',
            description: 'La visa C1/D es un visado de no inmigrante para personas que trabajarán como tripulantes en barcos comerciales, cruceros o aeronaves internacionales. Esta visa permite ingresar temporalmente a Estados Unidos mientras se embarcan o transitan hacia su asignación laboral. En FastPass Visa brindamos asesoría integral, llenado de formularios, documentación y simulación de entrevista, conforme a las disposiciones del Departamento de Estado y requisitos del consulado americano en México.',
            requisitos: [
                'Para el solicitante:',
                'Pasaporte mexicano vigente',
                'Formulario DS-160 debidamente llenado',
                'Comprobante de pago de tarifa consular (MRV)',
                'Carta de empleo emitida por la empresa naviera o aerolínea, en inglés',
                'Contrato laboral o carta de asignación con detalles del viaje y puesto',
                'Pruebas de experiencia previa como tripulante (si aplica)',
                'En caso de renovación: visa anterior (vigente o vencida en los últimos 48 meses)',
                'Fotografía reciente a color (conforme a criterios consulares)',
                'Para empresas contratantes (en caso de aplicación grupal):',
                'Lista de tripulantes autorizados',
                'Documentación legal de la empresa que certifica operaciones internacionales',
                'Registro de viaje o itinerario de ruta'
            ],
            tiempo: {
                simple: {
                    preparacion: '3–5 días hábiles',
                    esperaCita: '4–6 meses (según consulado)',
                    esperaEntrega: '4–8 semanas post-entrevista'
                }
            },
            servicioIncluye: [
                'Revisión del perfil y elegibilidad',
                'Llenado completo del Formulario DS-160',
                'Creación y configuración de cuenta consular',
                'Asesoría para generación y pago de tarifa MRV',
                'Revisión y preparación de carta de empresa o contrato',
                'Agenda de cita en CAS y consulado',
                'Preparación para entrevista consular (simulacro)',
                'Acompañamiento y seguimiento hasta recolección de visa',
                'Gestión preferencial para grupos (más de 5 tripulantes)'
            ],
            costoDerechos: {
                general: '$185 USD por solicitante (tarifa oficial no reembolsable)'
            },
            costos: {
                general: {
                    tramite: '$6,500 MXN',
                    nota: '(Incluye asesoría, contratos y acompañamiento. No incluye la tarifa MRV.)',
                    grupal: 'Trámite grupal (más de 5 personas): Descuento especial. Solicita cotización personalizada.'
                }
            },
            buttonText: '¡AGENDA TU CONSULTA SIN COSTO!'
        }
    };

    const currentVisa = visaTypes[activeTab];

    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Visa Americana"
                subtitle="Asesoría especializada para obtener tu visa de forma segura y eficaz."
                linkText="¡SOLICITA ASESORÍA!"
            />

            <div className="cita-info-container">
                {/* Navegación por pestañas */}
                <div className="visa-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'turismo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('turismo')}
                    >
                        Turismo/Negocios (B1/B2)
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'empleada' ? 'active' : ''}`}
                        onClick={() => setActiveTab('empleada')}
                    >
                        Empleada Doméstica
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'estudiante' ? 'active' : ''}`}
                        onClick={() => setActiveTab('estudiante')}
                    >
                        Estudiante (F-1/M-1/J-1)
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'tripulante' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tripulante')}
                    >
                        Tripulante (C1/D)
                    </button>
                </div>

                {/* Contenido dinámico según la pestaña seleccionada */}
                <div className="tab-content">
                    {/* Título */}
                    <div className="cita-info-header">
                        <h2>{currentVisa.title}</h2>
                        {currentVisa.subtitle && <h3 style={{ color: '#0A1547', marginTop: '10px' }}>{currentVisa.subtitle}</h3>}
                    </div>

                    {/* Descripción */}
                    <div className="cita-info-section">
                        <p>{currentVisa.description}</p>
                        <p style={{ marginTop: '15px', color: '#239619', fontWeight: 'bold' }}>
                            📩 Contáctanos ahora para una evaluación inicial sin costo.
                        </p>
                    </div>

                    {/* Requisitos */}
                    <div className="cita-info-section">
                        <h3>Requisitos</h3>
                        <ul>
                            {currentVisa.requisitos.map((req, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: req }}></li>
                            ))}
                        </ul>
                    </div>

                    {/* Tiempo de Trámite */}
                    <div className="cita-info-section">
                        <h3>Tiempo de Trámite</h3>
                        {currentVisa.tiempo.primeraVez ? (
                            <>
                                <h4 style={{ color: '#0A1547', marginTop: '15px' }}>Primera Vez:</h4>
                                <ul>
                                    <li><strong>Preparación de Solicitud:</strong> {currentVisa.tiempo.primeraVez.preparacion}</li>
                                    <li><strong>Espera de cita:</strong> {currentVisa.tiempo.primeraVez.esperaCita}</li>
                                    <li><strong>Espera de entrega:</strong> {currentVisa.tiempo.primeraVez.esperaEntrega}</li>
                                </ul>
                                <h4 style={{ color: '#0A1547', marginTop: '15px' }}>Renovación:</h4>
                                <ul>
                                    <li><strong>Preparación de Solicitud:</strong> {currentVisa.tiempo.renovacion.preparacion}</li>
                                    <li><strong>Espera de cita:</strong> {currentVisa.tiempo.renovacion.esperaCita}</li>
                                    <li><strong>Espera de entrega:</strong> {currentVisa.tiempo.renovacion.esperaEntrega}</li>
                                </ul>
                            </>
                        ) : (
                            <ul>
                                <li><strong>Preparación del expediente:</strong> {currentVisa.tiempo.simple.preparacion}</li>
                                <li><strong>Espera de cita:</strong> {currentVisa.tiempo.simple.esperaCita}</li>
                                <li><strong>Espera de entrega:</strong> {currentVisa.tiempo.simple.esperaEntrega}</li>
                            </ul>
                        )}
                    </div>

                    {/* Servicio Incluye */}
                    <div className="cita-info-section">
                        <h3>Servicio Incluye</h3>
                        <ol>
                            {currentVisa.servicioIncluye.map((servicio, index) => (
                                <li key={index}>{servicio}</li>
                            ))}
                        </ol>
                    </div>

                    {/* Costo de Derechos */}
                    <div className="cita-info-section">
                        <h3>Costo de Derechos Visa (MRV)</h3>
                        {currentVisa.costoDerechos.mayores ? (
                            <ul>
                                <li><strong>De 15 años en adelante:</strong> {currentVisa.costoDerechos.mayores}</li>
                                <li><strong>De 0 a 14 años:</strong> {currentVisa.costoDerechos.menores}</li>
                            </ul>
                        ) : (
                            <p>{currentVisa.costoDerechos.general}</p>
                        )}
                    </div>

                    {/* Costos */}
                    <div className="cita-info-section">
                        <h3>Costos</h3>
                        {currentVisa.costos.mayores ? (
                            <>
                                <h4 style={{ color: '#0A1547', marginTop: '15px' }}>Mayores de 15 años (Incluye tarifa MRV regular $185 USD y honorarios):</h4>
                                <p><strong>Vigencia:</strong> {currentVisa.costos.mayores.vigencia}</p>
                                <ul>
                                    <li><strong>Primera Vez:</strong> {currentVisa.costos.mayores.primeraVez}</li>
                                    <li><strong>Renovación:</strong> {currentVisa.costos.mayores.renovacion}</li>
                                </ul>
                                <h4 style={{ color: '#0A1547', marginTop: '15px' }}>Menores de 15 años (Incluye tarifa MRV reducida $16 USD y honorarios):</h4>
                                <p><strong>Vigencia:</strong> {currentVisa.costos.menores.vigencia}</p>
                                <ul>
                                    <li><strong>Primera Vez:</strong> {currentVisa.costos.menores.primeraVez}</li>
                                    <li><strong>Renovación:</strong> {currentVisa.costos.menores.renovacion}</li>
                                </ul>
                                <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                                    Vigencia sujeta a aprobación por el oficial consular.
                                </p>
                            </>
                        ) : (
                            <>
                                <p><strong>Trámite completo:</strong> {currentVisa.costos.general.tramite}</p>
                                <p style={{ fontStyle: 'italic' }}>{currentVisa.costos.general.nota}</p>
                                {currentVisa.costos.general.grupal && (
                                    <p style={{ marginTop: '10px', color: '#239619' }}>{currentVisa.costos.general.grupal}</p>
                                )}
                                <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                                    Vigencia sujeta a aprobación por el oficial consular.
                                </p>
                            </>
                        )}
                    </div>

                    {/* Botón de Contacto */}
                    <div className="cita-info-section contact">
                        <button
                            className="contact-button"
                            onClick={() => window.location.href = '/contact#contactform'}
                        >
                            {currentVisa.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VisaAmericana;
