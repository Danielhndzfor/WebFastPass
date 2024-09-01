import React from 'react'
import '../../css/TyC.css'

function TyC() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-content">
                    <p>Conoce los términos y condiciones de uso de nuestro sitio web y servicios.</p>
                </div>
            </div>

            <div className="terms-container">
                <div className="terms-header">
                    <h1>Términos y Condiciones</h1>
                    <span className="update-date">Última Actualización: 06/Agosto/2024</span>
                </div>
                <div className="terms-content">
                    <h2>1. Aceptación de Términos</h2>
                    <p>
                        Bienvenido al sitio web de FastPass Visa (en adelante, "nosotros", "nuestro" o "la Empresa"). Al acceder y utilizar nuestro sitio web https://www.fastpass-visas.com (en adelante, "el Sitio") y nuestros servicios, usted acepta cumplir y estar sujeto a los presentes Términos y Condiciones (en adelante, "Términos"). Estos Términos constituyen un acuerdo legal entre usted y la Empresa. ...
                    </p>

                    <h2>2. Descripción del Servicio</h2>
                    <p>
                        FastPass Visa ofrece servicios de asesoría y gestión de visas para clientes que desean viajar a Estados Unidos y otros países. Nuestros servicios incluyen, pero no se limitan a: ...
                    </p>

                    <ul className="service-list">
                        <li>Asesoramiento personalizado sobre requisitos, costos de derechos y procedimientos de solicitud de pasaportes mexicanos y americanos.</li>
                        <li>Asesoramiento personalizado sobre tipos de visas y procedimientos de solicitud.</li>
                        <li>Evaluación de elegibilidad para visas.</li>
                        <li>Preparación y recopilación de documentación necesaria para las solicitudes de visa.</li>
                        {/* Añade más elementos según lo requieras */}
                    </ul>

                    <h2>3. Uso del Sitio</h2>
                    <h3>3.1. Elegibilidad</h3>
                    <p>Para utilizar el Sitio y nuestros servicios, usted debe:...</p>

                    <h3>3.2. Restricciones de Uso</h3>
                    <ul className="restriction-list">
                        <li>Utilizar el Sitio para cualquier propósito ilegal o no autorizado.</li>
                        <li>Modificar, copiar, distribuir cualquier información sin autorización.</li>
                        <li>Usar el Sitio para difundir spam o software malicioso.</li>
                    </ul>

                    <h2>4. Registro y Cuentas de Usuario</h2>
                    <h3>4.1. Creación de Cuenta</h3>
                    <p>
                        Para acceder a ciertos servicios, es posible que se le solicite crear una cuenta con nosotros. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y acepta la responsabilidad de todas las actividades que ocurran bajo su cuenta.
                    </p>

                    <h3>4.2. Información de la Cuenta</h3>
                    <p>
                        Usted se compromete a proporcionar y mantener información precisa, actualizada y completa en su cuenta. La Empresa se reserva el derecho de suspender o cancelar cuentas que contengan información inexacta, fraudulenta o desactualizada.
                    </p>

                    <h2>5. Pagos y Tarifas</h2>
                    <h3>5.1. Tarifas de Servicios</h3>
                    <p>
                        FastPass Visa cobra tarifas por sus servicios de asesoría y gestión de visas. Las tarifas específicas se detallan en nuestro Sitio y están sujetas a cambios sin previo aviso.
                    </p>

                    <h3>5.2. Métodos de Pago</h3>
                    <p>
                        Aceptamos varios métodos de pago, incluidos, pero no limitados a, tarjetas de crédito y débito. Al proporcionar información de pago, usted garantiza que está autorizado a utilizar el método de pago designado y nos autoriza a cargar el monto total a dicho método.
                    </p>

                    <h3>5.3. Reembolsos</h3>
                    <p>
                        No se emitirán reembolsos una vez que los servicios hayan sido prestados, excepto cuando lo requiera la ley aplicable. Si tiene alguna pregunta sobre los reembolsos, comuníquese con nosotros a <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a>.
                    </p>

                    <h2>6. Propiedad Intelectual</h2>
                    <h3>6.1. Derechos de Autor</h3>
                    <p>
                        Todo el contenido del Sitio, incluidos, entre otros, texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de FastPass Visa o sus proveedores de contenido y está protegido por las leyes de derechos de autor de México e internacionales.
                    </p>

                    <h3>6.2. Marcas Registradas</h3>
                    <p>
                        Las marcas, logotipos y marcas de servicio que aparecen en el Sitio son marcas registradas y no registradas de FastPass Visa y otros. No se otorga ninguna licencia ni derecho de uso de ninguna de estas marcas sin el permiso previo por escrito del propietario de la marca correspondiente.
                    </p>

                    <h2>7. Enlaces a Terceros</h2>
                    <p>
                        Nuestro Sitio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por FastPass Visa. No tenemos control sobre, y no asumimos responsabilidad por, el contenido, las políticas de privacidad o las prácticas de sitios web de terceros. Usted reconoce y acepta que no seremos responsables, directa o indirectamente, por cualquier daño o pérdida causados o supuestamente causados por el uso de o la confianza en dicho contenido, bienes o servicios disponibles en dichos sitios.
                    </p>

                    <h2>8. Limitación de Responsabilidad</h2>
                    <h3>8.1. Exclusión de Garantías</h3>
                    <p>
                        EL SITIO Y LOS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD", SIN GARANTÍAS DE NINGÚN TIPO, YA SEA EXPRESA O IMPLÍCITA, INCLUYENDO, PERO NO LIMITADO A, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR O NO INFRACCIÓN. FASTPASS VISA NO GARANTIZA QUE EL SITIO O LOS SERVICIOS CUMPLAN CON SUS REQUISITOS, O QUE EL ACCESO AL SITIO O A LOS SERVICIOS SEA ININTERRUMPIDO, OPORTUNO, SEGURO O LIBRE DE ERRORES.
                    </p>

                    <h3>8.2. Limitación de Daños</h3>
                    <p>
                        EN NINGÚN CASO FASTPASS VISA, SUS DIRECTORES, EMPLEADOS O AGENTES SERÁN RESPONSABLES DE NINGÚN DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE O PUNITIVO QUE SURJA DE O EN RELACIÓN CON SU ACCESO O USO, O SU INCAPACIDAD PARA ACCEDER O UTILIZAR EL SITIO O LOS SERVICIOS. ESTA LIMITACIÓN DE RESPONSABILIDAD SE APLICARÁ HASTA EL MÁXIMO PERMITIDO POR LA LEY.
                    </p>

                    <h3>8.3. Responsabilidad por Contenidos de Terceros</h3>
                    <p>
                        FastPass Visa no se hace responsable por el contenido generado por los usuarios o terceros en el Sitio, ni por las decisiones tomadas por las autoridades consulares, incluidas las relacionadas con la aprobación o rechazo de visas.
                    </p>

                    <h2>9. Indemnización</h2>
                    <p>
                        Usted acepta indemnizar, defender y mantener indemne a FastPass Visa, sus directores, empleados, agentes, licenciantes y proveedores de y contra todas las pérdidas, gastos, daños y costos, incluidos los honorarios razonables de abogados, que resulten de cualquier violación de estos Términos o cualquier actividad relacionada con su cuenta (incluida la conducta negligente o ilícita) por usted o cualquier otra persona que acceda al Sitio utilizando su cuenta.
                    </p>

                    <h2>10. Modificaciones y Terminación</h2>
                    <h3>10.1. Cambios en los Términos</h3>
                    <p>
                        FastPass Visa se reserva el derecho, a su exclusivo criterio, de modificar o reemplazar estos Términos en cualquier momento. Cualquier cambio material se notificará a través del Sitio o por otros medios razonables. Su uso continuado del Sitio después de la publicación de los cambios constituye su aceptación de dichos cambios.
                    </p>

                    <h3>10.2. Terminación</h3>
                    <p>
                        Podemos suspender o terminar su acceso al Sitio y a nuestros servicios en cualquier momento, sin previo aviso ni responsabilidad, si usted incumple estos Términos o por cualquier otro motivo a nuestra discreción.
                    </p>

                    <h2>11. Ley Aplicable y Jurisdicción</h2>
                    <h3>11.1. Ley Aplicable</h3>
                    <p>
                        Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos, específicamente las leyes civiles, comerciales y de protección al consumidor vigentes.
                    </p>

                    <h3>11.2. Jurisdicción</h3>
                    <p>
                        Usted acepta someterse a la jurisdicción exclusiva de los tribunales competentes de la ciudad de Colima, Colima, México para la resolución de cualquier disputa que surja de o en relación con estos Términos o el uso del Sitio.
                    </p>

                    <h2>12. Derechos del Consumidor</h2>
                    <h3>12.1. Derechos del Consumidor</h3>
                    <p>
                        FastPass Visa reconoce los derechos del consumidor según lo dispuesto por la Ley Federal de Protección al Consumidor. Usted tiene derecho a recibir información veraz, clara y completa sobre nuestros servicios, así como a obtener una atención y trato digno y equitativo.
                    </p>

                    <h3>12.2. Procedimiento de Quejas</h3>
                    <p>
                        Si tiene alguna queja o inquietud sobre nuestros servicios, le invitamos a ponerse en contacto con nosotros a través del correo electrónico <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a>. Nos comprometemos a resolver cualquier queja de manera rápida y eficiente.
                    </p>

                    <h2>13. Protección de Datos Personales</h2>
                    <p>
                        FastPass Visa se compromete a proteger su privacidad y datos personales de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Para más información, por favor, consulte nuestra Política de Privacidad en <a href="/politica-de-privacidad">
                            https://www.fastpass-visas.com/politica_de_privacidad
                        </a>.
                    </p>

                    <h2>14. Divisibilidad</h2>
                    <p>
                        Si alguna disposición de estos Términos se considera inválida o inaplicable por un tribunal competente, las disposiciones restantes seguirán siendo válidas y aplicables en la máxima medida permitida por la ley.
                    </p>

                    <h2>15. Renuncia</h2>
                    <p>
                        La falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos por parte de FastPass Visa no constituirá una renuncia a dicho derecho o disposición.
                    </p>

                    <h2>16. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre estos Términos, por favor, póngase en contacto con nosotros a través de:
                    </p>
                    <ul className="restriction-list">
                        <li>Correo Electrónico: <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a></li>
                        <li>Dirección: <a href="https://maps.app.goo.gl/tostpFRhyjGWeZLr6"> Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima</a></li>
                        <li>Teléfono: <a href="tel:+523146885645">+ 52 314 688 5645</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default TyC