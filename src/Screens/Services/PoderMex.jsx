import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta
import Parallax from '../../components/Parallax'; // Asegúrate de que la ruta sea correcta
import fondoPF from '/fondoPF.avif'; // Cambia por tu propia imagen

function PoderNotarialMenoresMexico() {
    return (
        <>
            <Parallax
                backgroundImage={fondoPF}
                title="Pasaporte Mexicano"
                subtitle="Asesoría sobre el poder notarial necesario para menores de 18 años."
                linkText="Contáctanos"
            />

            <div className="cita-info-container">
                {/* Título */}
                <div className="cita-info-header">
                    <h2>Pasaporte Mexicano: Poder Notarial para menores de 18 años (Consentimiento padres)</h2>
                </div>

                {/* Descripción */}
                <div className="cita-info-section">
                    <p>
                        Ofrecemos asesoría completa para tramitar el poder notarial que permite a los padres dar consentimiento para que menores de 18 años obtengan su pasaporte mexicano.
                    </p>
                </div>

                {/* Documentación Necesaria */}
                <div className="cita-info-section">
                    <h3>Documentación Necesaria</h3>
                    {/* <p>
                        Acta de nacimiento del menor.
                        Identificación oficial de los padres.
                        Comprobante de domicilio.
                        Poder notarial que autorice el trámite.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Costos */}
                <div className="cita-info-section">
                    <h3>Costos</h3>
                    {/* <p>
                        El costo del trámite varía dependiendo del notario y la ubicación, con precios estimados entre $500 y $1,500 MXN.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* ¿Qué incluye el costo? */}
                <div className="cita-info-section">
                    <h3>¿Qué incluye el costo?</h3>
                    {/* <p>
                        El costo incluye la redacción del poder notarial y la validación del consentimiento ante notario público.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Tiempo de trámite */}
                <div className="cita-info-section">
                    <h3>Tiempo de Trámite</h3>
                    {/* <p>
                        El trámite del poder notarial puede completarse en un plazo de 1 a 2 días hábiles, dependiendo del notario.
                    </p> */}
                    <p style={{ color: 'red' }}>PENDIENTE</p>
                </div>

                {/* Botón de Contacto */}
                <div className="cita-info-section contact">
                    <p>
                        Si necesitas ayuda con el poder notarial para menores de 18 años, contáctanos para más información.
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

export default PoderNotarialMenoresMexico;
