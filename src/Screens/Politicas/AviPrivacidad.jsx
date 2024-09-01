import React from 'react'
import '../../css/TyC.css'

function AviPrivacidad() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-content">
                    <p>Conoce el aviso de privacidad de nuestro sitio web y servicios.</p>
                </div>
            </div>

            <div className="terms-container">
                <div className="terms-header">
                    <h1>Aviso de Privacidad de las solicitudes de trámites, servicios o asesorías de Fastpass Visa</h1>
                    <span className="update-date">Última Actualización: 06/Agosto/2024</span>
                </div>
                <div className="terms-content">
                    <h2>Identidad y domicilio del responsable</h2>
                    <p>Los datos personales que usted nos proporcione serán tratados por FastPass Visa. (“FastPass”), Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima, México, y con el sitio web <a href="/">https://www.fastpass-visas.com</a>.</p>

                    <h2>Datos personales sujetos a tratamiento</h2>
                    <p>FastPass Visa para cumplir con las finalidades señaladas en el presente Aviso recabará y tratará datos personales de identificación, datos personales de contacto, datos personales laborales, datos personales académicos, datos personales patrimoniales y/o financieros y datos personales relacionados con sus familiares. Al proporcionar los datos personales relacionados con sus familiares usted reconoce tener el consentimiento de éstos para FastPass Visa trate sus datos personales necesarios para las finalidades señaladas en el presente aviso de privacidad.</p>

                    <p>Asimismo, le informamos que para cumplir con las finalidades descritas en este aviso se tratarán datos personales sensibles. Le informamos que su consentimiento para el tratamiento de dichos datos es necesario por lo cual será necesario que usted autorice su tratamiento.</p>

                    <h2>Finalidades primarias:</h2>
                    <p>FastPass Visa tratará sus datos personales necesarios para las siguientes finalidades primarias y necesarias:</p>
                    <ul className='restriction-list'>
                        <li>Para identificarle.</li>
                        <li>Para contactarle.</li>
                        <li>Gestiones de actas de nacimiento o de adscripción, defunción, matrimonio, divorcio, etc. ante oficinas del registro municipal de cualquier entidad federativa o en línea.</li>
                        <li>Gestiones de actas de nacimiento o de adscripción, defunción, matrimonio, divorcio, etc. ante oficinas de Secretaría del Condado y/o Departamento del Estado de Servicios de Salud en cualquier entidad estado de Estados Unidos de América o en línea.</li>
                        <li>Gestión y trámite de constancias de identidad ante autoridad municipal</li>
                        <li>Para brindarle asesoría en el llenado de formatos y agenda de citas.</li>
                        <li>Asesoría, orientación y gestión para tramitar su solicitud de visa de turismo, negocios, tratamiento médico, empleada doméstica, niñera, tripulante, estudiante, intercambio cultural, religioso, prometido(a), humanitaria o renovación de la misma.</li>
                        <li>Asesoría y gestión a migrantes en temas familiar, laboral, civil, administrativos.</li>
                        <li>Para dar seguimiento en el proceso de visado.</li>
                        <li>Para la obtención de citas con personal de Relaciones Exteriores o Embajada mexicana en el extranjero.</li>
                        <li>Para la obtención de citas con personal de Homeland Departament o cualquier Consulado Americano en México.</li>
                        <li>Para la obtención de citas con personal de Immigration, Refugees and Citizenship Canada o cualquier Consulado Canadiense en México.</li>
                    </ul>

                    <h2>Datos personales recabados</h2>
                    <p>
                        Para las finalidades antes señaladas se solicitarán los siguientes datos personales:
                    </p>
                    <table summary='Datos personales recabados' className='styled-table' >
                        <thead>
                            <tr>
                                <th scope='col'>Categoría</th>
                                <th scope='col'>Tipo de Datos Personales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope='row' className="tema-table" >Datos de identificación</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Nombre completo del solicitante</li>
                                        <li>- Lugar de residencia (Domicilio y código postal).</li>
                                        <li>- Localidad de Residencia (ciudad, municipio, entidad federativa)</li>
                                        <li>- Localidad de nacimiento (ciudad, municipio, entidad federativa)</li>
                                        <li>- Estado Civil</li>
                                        <li>- CURP</li>
                                        <li>- Firma</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de padres, hijos y/o de cónyuge</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Nombre completo de ambos.</li>
                                        <li>- Fechas de Nacimiento de ambos.</li>
                                        <li>- Lugar de residencia de ambos.</li>
                                        <li>- Fecha de matrimonio, cuando aplica.</li>
                                        <li>- Fecha de separación y/o divorcio, cuando aplica.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de contacto en E.U.A.</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Nombre completo de la persona o lugar.</li>
                                        <li>- Domicilio y código postal.</li>
                                        <li>- Ciudad, Estado y Código de Estado.</li>
                                        <li>- Teléfono</li>
                                        <li>- Correo</li>
                                        <li>- Parentesco.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos telefónicos y electrónicos</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Teléfono principal o de casa.</li>
                                        <li>- Teléfono secundario o celular (actual y/o anteriores).</li>
                                        <li>- Correo(s) electrónico(s) (De 5 años a la fecha).</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos laborales actuales y/o anteriores</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Ocupación</li>
                                        <li>- Nombre del lugar de trabajo</li>
                                        <li>- Puesto</li>
                                        <li>- Sueldo</li>
                                        <li>- Actividades</li>
                                        <li>- Nombre de jefe inmediato</li>
                                        <li>- Fecha Inicio y/o término</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de tránsito y movimientos migratorios</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Número de deportaciones</li>
                                        <li>- Lugar de residencia fuera del Estado</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de salud</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Resumen clínico de familiar enfermo</li>
                                        <li>- Causas de fallecimiento</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos sobre procedimientos administrativos</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Datos de la detención (declaración escrita y/o verbal)</li>
                                        <li>- Datos de la deportación</li>
                                        <li>- Datos de apelación y/o de castigo.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de viajes previos</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Fechas de ultimas visitas a Estados Unidos.</li>
                                        <li>- Días que permaneció en Estados Unidos</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos del pasaporte vigente o vencido</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Número</li>
                                        <li>- Lugar de emisión (ciudad y entidad federativa)</li>
                                        <li>- Fecha de emisión</li>
                                        <li>- Fecha de vencimiento</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td scope='row' className="tema-table" >Datos de visa vigente o vencida</td>
                                <td>
                                    <ul className='table-list'>
                                        <li>- Número</li>
                                        <li>- Tipo de Visa</li>
                                        <li>- Lugar de emisión (ciudad y entidad federativa)</li>
                                        <li>- Fecha de emisión</li>
                                        <li>- Fecha de vencimiento</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Fundamento Legal</h2>
                    <p>FastPass Visa con domicilio en Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima, México, y portal de internet <a href="/">https://www.fastpass-visas.com</a> trata los datos personales con fundamento en los artículos 6 Apartado A y 16 de la Constitución Política de los Estados Unidos Mexicanos y hace de su conocimiento que se considera información confidencial aquella que se encuentra contemplada en el artículo 3, fracciones IX y X de Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, 122 y 123 de la Ley de Transparencia y Acceso a la Información Pública del estado de Colima, así mismo se consideran datos personales y datos personales sensibles los contemplados respectivamente en el artículo 4, fracciones VII y VIII de la Ley de Protección de Datos Personales y en Posesión de Sujetos Obligados para el estado de Colima.</p>

                    <p>La información recabada siempre es tratada con base a en los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad en términos de la legislación aplicable.</p>

                    <h2>Transferencias</h2>
                    <p>FastPass Visa para cumplir las finalidades necesarias anteriormente descritas u otras aquellas exigidas legalmente o por las autoridades competentes informa que no realizarán transferencias que requieran su consentimiento, salvo aquellas que sean necesarias para atender requerimientos de información de dicha autoridad competente, debidamente fundados y motivados.</p>

                    <table summary='Destinatario de los datos personales' className='styled-table' >
                        <thead>
                            <tr>
                                <th scope='col'>Destinatario de los datos personales</th>
                                <th scope='col'>País</th>
                                <th scope='col'>Finalidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope='row'>
                                    <ul className="table-list mlist">
                                        <li>- Dependencias y Entidades de la Administración Pública Federal, Estatal y Municipal</li>
                                        <li>- Órganos constitucionales autónomos, Poderes Judicial, Federal y Local</li>
                                        <li>- Poder Legislativo Federal y Local, Representaciones Diplomáticas y Organismos Internacionales acreditados en México</li>
                                        <li>- Personas Físicas o Morales</li>
                                        <li>- Embajadas o Consulados de Estados Unidos</li>
                                        <li>- Embajadas o Consulados de Canadá</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="table-list mlist">
                                        <li>- México</li>
                                        <li>- Estados Unidos de América</li>
                                        <li>- Canadá</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul className="table-list mlist">
                                        <li>Canalizar, gestionar y dar respuesta a las peticiones que por su naturaleza requieren la atención de diversas instancias nacionales e internacionales.</li>
                                        <li>Asesorar, orientar y gestionar su solicitud de visa de turismo, negocios, tratamiento médico, empleada doméstica, niñera, tripulante, estudiante, intercambio cultural, religioso, prometido(a), humanitaria o renovación de la misma y dar seguimiento a su proceso de visado.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Si usted no desea que FastPass Visa transfiera sus datos personales para aquellas transferencias para las cuales es necesario su consentimiento le pedimos que envíe un correo electrónico a la dirección <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a>, en donde se le atenderá en tiempo y forma.
                    </p>

                    <h2>Derechos ARCO y/o revocación del consentimiento</h2>
                    <p>
                        Usted tiene derecho a conocer qué datos personales se tienen de usted, para qué se utilizan y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); pedir que la eliminemos de nuestros registros o base de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la ley (Cancelación), así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                    </p>

                    <p>
                        Usted o su representante legal podrá ejercer cualquiera de los derechos de acceso, rectificación, cancelación u oposición (en lo sucesivo “derechos Arco”), así como revocar su consentimiento para el tratamiento de sus datos personales enviando un correo electrónico al Responsable de Protección de Datos de FastPass a la dirección electrónica <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a>. En este sentido, puede informarse sobre los procedimientos, requisitos y plazos para el ejercicio de sus Derechos ARCO y/o revocación del consentimiento en nuestra página de internet <a href="/">https://www.fastpass-visas.com</a>
                    </p>

                    <h2>Limitación y/o Divulgación de sus datos</h2>
                    <p>
                        Usted podrá limitar el uso o divulgación de sus datos personales enviando su solicitud a la dirección <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com </a>. En caso de que su Solicitud sea procedente se le registrará en el listado de exclusión propio de Fastpass Visa. Para mayor información favor de contactar a nuestro Responsable de Protección de Datos de FastPass Visa. Si usted no desea que FastPass Visa transfiera sus datos personales para aquellas transferencias para las cuales es necesario su consentimiento le pedimos que envíe un correo electrónico a la dirección <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a> en donde se le atenderá en tiempo y forma.
                    </p>

                    <p>
                        Los requisitos que debe cumplir el escrito son los siguientes:
                    </p>
                    <ul className='restriction-list'>
                        <li>Indicar el nombre del titular y su domicilio o cualquier otro medio para recibir notificaciones;</li>
                        <li>Presentar los documentos que acrediten la identidad del titular y, en su caso, la personalidad e identidad de su representante;</li>
                        <li>De ser posible, indicar el área responsable que trata los datos personales;</li>
                        <li>Describir de manera clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO, salvo que se trate del derecho de acceso;</li>
                        <li>Especificar el derecho ARCO que se pretende ejercer, o bien lo que solicita el titular;</li>
                        <li>Incluir cualquier otro elemento o documento que facilite la localización de los datos personales, en su caso.</li>
                    </ul>

                    <p>
                        En caso de solicitar la rectificación, adicionalmente debe indicar las modificaciones a realizarse y aportar la documentación oficial necesaria que sustente su petición. Para ejercer el derecho de cancelación debe expresar las causas que motivan la eliminación. En el caso del derecho de oposición, es necesario señalar los motivos que justifican se finalice el tratamiento de los datos personales y el daño o perjuicio que le causaría; o bien, si la oposición es parcial, indicar las finalidades específicas con las que no está de acuerdo, siempre que no sea un requisito obligatorio.
                    </p>

                    <h2>Derechos ARCO y/o revocación del consentimiento</h2>
                    <p>
                        Usted o su representante legal podrá ejercer cualquiera de los derechos de acceso, rectificación, cancelación u oposición (en lo sucesivo “derechos Arco”), así como revocar su consentimiento para el tratamiento de sus datos personales enviando un correo electrónico al Responsable de Protección de Datos de FastPass Visa a la dirección electrónica <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com </a>. En este sentido, puede informarse sobre los procedimientos, requisitos y plazos para el ejercicio de sus Derechos ARCO y/o revocación del consentimiento en nuestra página de internet <a href="/">https://www.fastpass-visas.com</a>
                    </p>

                    <h2>Limitación y/o Divulgación de sus datos</h2>
                    <p>
                        Usted podrá limitar el uso o divulgación de sus datos personales enviando su solicitud a la dirección <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a> En caso de que su Solicitud sea procedente se le registrará en el listado de exclusión propio de FastPass Visa. Para mayor información favor de contactar a nuestro Responsable de Protección de Datos de FastPass Visa.
                    </p>

                    <h2>Cambios al Aviso de Privacidad</h2>
                    <p>
                        FastPass Visa le notificará de cualquier cambio a su aviso de privacidad a través de nuestra página de internet <a href="/">https://www.fastpass-visas.com</a> por lo cual le pedimos revise la misma de manera periódica.
                    </p>
                </div>
            </div >
        </>
    )
}

export default AviPrivacidad