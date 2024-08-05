import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Contact.css'; // Asegúrate de que la ruta sea correcta

function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        numero: '',
        servicio: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, apellido, correo, numero, servicio, mensaje } = formData;
        const whatsappNumber = '523143526003'; // Reemplaza con el número de WhatsApp de destino
        const textMessage = `✍🏻 *Nombre*: ${nombre} ${apellido}\n📧 *Correo*: ${correo}\n📞 *Número*: ${numero}\n⚙️ *Servicio*: ${servicio}\n💬 *Mensaje*: ${mensaje}`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>{t('Contactarse')}</h2>
                <p>{t('Por favor rellene el formulario para contactarse con nosotros')}</p>
                <div className="input-group">
                    <input
                        type="text"
                        name="nombre"
                        placeholder={t('Nombre')}
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        placeholder={t('Apellido')}
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="email"
                    name="correo"
                    placeholder={t('Correo Electrónico')}
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="numero"
                    placeholder={t('Número de Teléfono')}
                    value={formData.numero}
                    onChange={handleChange}
                    required
                />
                <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>{t('Seleccione un servicio')}</option>
                    <option value="cita-informativa">{t('Cita Informativa')}</option>
                    <option value="pasaporte-mexicano">{t('Pasaporte Mexicano')}</option>
                    <option value="pasaporte-americano">{t('Pasaporte Americano')}</option>
                    <option value="visa-americana">{t('Visa Americana')}</option>
                    <option value="visa-rechazada">{t('Visas Rechazadas/Canceladas')}</option>
                    <option value="citas-emergencia">{t('Citas de Emergencia')}</option>
                    <option value="actas-nacimiento">{t('Actas de Nacimiento')}</option>
                    <option value="traduccion-documentos">{t('Traducción de Documentos')}</option>
                    <option value="preparacion-entrevista">{t('Preparación para Entrevista')}</option>
                </select>
                <textarea
                    name="mensaje"
                    placeholder={t('Mensaje')}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="checkbox-group">
                    <input type="checkbox" name="terminos" required />
                    <label>{t('Acepto términos de uso y condiciones de privacidad')}</label>
                </div>
                <button type="submit">{t('Enviar')}</button>
            </form>
        </div>
    );
}

export default Contact;


