import React from 'react';
import '../../css/CitaInfo.css'; // Asegúrate de que la ruta sea correcta

function CitaInfo() {
    return (
        <div className="cita-info-container">
            <div className="cita-info-header">
                <h2>Cita Informativa</h2>
                <p>Información detallada sobre nuestra cita informativa.</p>
            </div>

            <div className="cita-info-section">
                <h3>¿Qué es una Cita Informativa?</h3>
                <p>
                    Una cita informativa es una reunión con uno de nuestros expertos para discutir tus necesidades y opciones disponibles.
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Requisitos</h3>
                <ul>
                    <li>Documento de identificación válido.</li>
                    <li>Comprobante de domicilio.</li>
                    <li>Otros documentos específicos según el tipo de cita.</li>
                </ul>
            </div>

            <div className="cita-info-section">
                <h3>Tiempo</h3>
                <p>
                    La cita informativa generalmente dura entre 30 y 60 minutos, dependiendo de las necesidades específicas del cliente.
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Proceso</h3>
                <ul>
                    <li>Reserva tu cita en línea o por teléfono.</li>
                    <li>Reúne los documentos necesarios.</li>
                    <li>Asiste a la cita en la fecha y hora programada.</li>
                    <li>Recibe asesoramiento personalizado de nuestros expertos.</li>
                </ul>
                <p>
                    Teléfono: <a href="tel:1234567890">(123) 456-7890</a> <br />
                    WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">(123) 456-7890</a>
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Beneficios</h3>
                <p>
                    Obtener información detallada y personalizada sobre los servicios que ofrecemos y cómo podemos ayudarte.
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Costos</h3>
                <p>
                    La cita informativa tiene un costo de $50, el cual puede ser pagado en efectivo o con tarjeta de crédito.
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Documentación Necesaria</h3>
                <ul>
                    <li>Documento de identificación válido.</li>
                    <li>Comprobante de domicilio.</li>
                </ul>
            </div>

            <div className="cita-info-section">
                <h3>Preguntas Frecuentes (FAQ)</h3>
                <details>
                    <summary>¿Cuánto dura la cita informativa?</summary>
                    <p>Generalmente dura entre 30 y 60 minutos.</p>
                </details>
                <details>
                    <summary>¿Qué documentos necesito traer?</summary>
                    <p>Documento de identificación y comprobante de domicilio.</p>
                </details>
            </div>

            <div className="cita-info-section">
                <h3>Contacto</h3>
                <p>
                    Si tienes más preguntas, puedes contactarnos al <a href="tel:1234567890">(123) 456-7890</a> o por email a <a href="mailto:info@example.com">info@example.com</a>.
                </p>
            </div>

            <div className="cita-info-section">
                <h3>Testimonios</h3>
                <div className="posTest">
                    <div className="testimonial-card">
                        <p>"Tuve una excelente experiencia, muy informativa y útil." - Cliente satisfecho</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"El servicio fue rápido y eficiente, muy recomendado." - Cliente feliz</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CitaInfo;
