import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'



function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        numero: '',
        servicio: '',
        mensaje: '',
    });
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, correo, numero, servicio, mensaje } = formData;
        const whatsappNumber = '523143526003'; // Reemplaza con el número de WhatsApp de destino
        const textMessage = `✍🏻 *Nombre*: ${nombre} \n📧 *Correo*: ${correo}\n📞 *Número*: ${numero}\n⚙️ *Servicio*: ${servicio}\n💬 *Mensaje*: ${mensaje}`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <div className="contact-container fade-in">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>{t('¡Contáctanos!')}</h2>
                    <p>{t('Por favor rellene el formulario para contactarse con nosotros')}</p>
                    <input
                        type="text"
                        name="nombre"
                        placeholder={t('Nombre')}
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

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
                        <option value="cita-informativa">{t('Consulta Informativa')}</option>
                        <option value="pasaporte-mexicano">{t('Pasaporte Mexicano (Primera Vez o Renovación)')}</option>
                        <option value="pasaporte-americano">{t('Pasaporte Americano (Primera Vez o Renovación)')}</option>
                        <option value="visa-americana">{t('Visa Americana (Primera Vez o Renovación)')}</option>
                        <option value="visa-rechazada">{t('Visas Rechazadas o Canceladas')}</option>
                        <option value="citas-emergencia">{t('Adelanto Cita / Cita Emergencia')}</option>
                        <option value="traduccion-documentos">{t('Traducciones (IN-ES) (ES-IN)')}</option>
                        <option value="actas-nacimiento">{t('Acta Nacimiento (cualquier estado)')}</option>
                        <option value="poder-notarial-pasmenores">{t('Poder Notarial (para pasaporte menores)')}</option>
                        <option value="poder-notarial-sam">{t('Poder Notarial o Formato SAM (para salir del país)')}</option>
                        <option value="seguimiento-tramites">{t('Seguimiento a trámites iniciados')}</option>
                    </select>
                    <textarea
                        name="mensaje"
                        placeholder={t('Mensaje')}
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            name="terminos"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            required
                        />
                        <label>{t('Acepto')} <a href="">Términos y Condiciones de Uso</a></label>
                    </div>
                    <button type="submit" className={isChecked ? 'enabled' : 'disabled'} disabled={!isChecked}>{t('Enviar')}</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm