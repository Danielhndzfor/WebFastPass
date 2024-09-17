import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PoderNotarialMenoresUSA() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Americano: Poder Notarial para menores de 16 años"
                subtitle="Asesoría para obtener el consentimiento necesario para tramitar el pasaporte de menores de 16 años."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Poder Notarial para menores de 16 años (Consentimiento padres)</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos asesoría especializada para que los padres puedan otorgar el consentimiento notarial necesario para que sus hijos menores de 16 años obtengan el pasaporte americano.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Acta de nacimiento del menor.
                        Documento de identificación de los padres.
                        Poder notarial con el consentimiento de los padres.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo por el trámite del poder notarial varía según el notario y la complejidad del caso.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        Asesoría legal completa y el trámite del poder notarial necesario para el consentimiento de los padres.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El tiempo estimado para obtener el poder notarial y el pasaporte puede variar según la disponibilidad del notario y del consulado.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Para más información sobre el trámite y requisitos, contáctanos.
                    </p>
                    <button
                        className="contact-button"
                        onClick={() => window.location.href = '/contact#contactform'}
                    >
                        Contactar
                    </button>
                </div>
            </div>
        </>
    );
}

export default PoderNotarialMenoresUSA;