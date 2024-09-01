import React from 'react'
import '../../css/TyC.css'

function PolDevolucion() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-content">
                    <p>Conoce la politica de devoluciones y reembolsos de nuestro sitio web y servicios.</p>
                </div>
            </div>

            <div className="terms-container">
                <div className="terms-header">
                    <h1>Política de Devoluciones y Reembolsos</h1>
                    <span className="update-date">Última Actualización: 06/Agosto/2024</span>
                </div>
                <div className="terms-content">
                    <p>
                        En FastPass Visa, entendemos que las circunstancias pueden cambiar y es posible que necesite ajustar sus planes. Para ofrecerle un servicio flexible y satisfactorio, hemos establecido la siguiente política de devoluciones y reembolsos:
                    </p>
                    <h2>1. Solicitudes de Reembolso:</h2>
                    <ul className='restriction-list'>
                        <li>Para solicitar un reembolso, le pedimos que nos notifique al menos 24 horas antes de su cita programada. Esto nos permite gestionar su solicitud de manera eficiente y evitar cargos innecesarios.</li>
                        <li>Las solicitudes de reembolso deberán ser enviadas por escrito a <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a> , indicando el motivo de la cancelación y los detalles de su compra.</li>
                        <li>Los reembolsos estarán sujetos a una revisión detallada por parte de nuestro equipo de atención al cliente. Esta revisión considerará factores como el estado del servicio y los costos administrativos ya incurridos.</li>
                        <li>Una vez aprobada la solicitud, el reembolso será procesado a través del método de pago original. El tiempo de procesamiento puede variar según el proveedor de pagos.</li>
                    </ul>

                    <h2>2. Cambios en la Fecha de Cita:</h2>
                    <ul className='restriction-list'>
                        <li>Si necesita cambiar la fecha de su cita, le pedimos que nos informe con al menos 24 horas de antelación. Haremos todo lo posible para reprogramar su cita en una fecha y hora que se ajuste mejor a sus necesidades.</li>
                        <li>Los cambios en la fecha de la cita no incurrirán en cargos adicionales siempre y cuando se respeten los plazos mencionados.</li>
                    </ul>

                    <h2>3. Condiciones y Excepciones:</h2>
                    <ul className='restriction-list'>
                        <li>Los reembolsos no se aplicarán si la solicitud se realiza fuera del plazo de 24 horas antes de la cita programada, a menos que existan circunstancias excepcionales, las cuales serán evaluadas caso por caso.</li>
                        <li>Los servicios ya prestados o iniciados no son elegibles para reembolso.</li>
                        <li>Algunos servicios personalizados pueden no ser reembolsables. Esto se le informará al momento de la compra.</li>
                    </ul>

                    <h2>4. Contacto y Soporte:</h2>
                    <ul className='restriction-list'>
                        <li>Para cualquier consulta, cambio o solicitud de reembolso, contáctenos directamente a <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a>. Nuestro equipo está disponible para asistirte y garantizar que tu experiencia con FastPass Visa sea lo más fluida y satisfactoria posible.</li>
                    </ul>
                    
                    <p>Gracias por elegir FastPass Visa. Estamos comprometidos a brindarle el mejor servicio y a asegurarnos de que sus necesidades sean atendidas con la máxima eficiencia y profesionalismo.</p>
                </div>
            </div>
        </>
    )
}

export default PolDevolucion