import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Contact.css'; // Asegúrate de que la ruta sea correcta

function Contact() {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState('');

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <div className="contact-container">
            <form className="contact-form">
                <h2>{t('Contactarse')}</h2>
                <p>{t('Por favor rellene el formulario para contactarse con nosotros')}</p>
                <div className="input-group">
                    <input type="text" name="nombre" placeholder={t('Nombre')} required />
                    <input type="text" name="apellido" placeholder={t('Apellido')} required />
                </div>
                <input type="email" name="correo" placeholder={t('Correo Electrónico')} required />
                <input type="tel" name="numero" placeholder={t('Número de Teléfono')} required />
                <select name="servicio" value={selectedService} onChange={handleServiceChange} required>
                    <option value="" disabled>{t('Seleccione un servicio')}</option>
                    <option value="consultoria">{t('Consultoría')}</option>
                    <option value="desarrollo">{t('Desarrollo')}</option>
                    <option value="soporte">{t('Soporte')}</option>
                </select>
                <textarea name="mensaje" placeholder={t('Mensaje')} required></textarea>
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


