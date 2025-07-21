import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../css/FAQ.css';

// Función para remover acentos y convertir a minúsculas
const normalizeText = (text) => {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
};

function FAQ() {
    const { t } = useTranslation();
    const [selectedTopic, setSelectedTopic] = useState('General');
    const [expandedQuestions, setExpandedQuestions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [isItemSelected, setIsItemSelected] = useState(false);
    const [highlightedQuestion, setHighlightedQuestion] = useState('');

    // Crear una referencia para la sección de resultados de búsqueda
    const searchResultsRef = useRef(null);
    const temasContentRef = useRef(null);

    const topics = [
        { title: 'General', displayTitle: t('General'), icon: 'question-circle' },
        { title: 'Cita Informativa', displayTitle: t('Cita Informativa'), icon: 'calendar-check' },
        { title: 'Pasaporte Mexicano', displayTitle: t('Pasaporte Mexicano'), icon: 'id-card' },
        { title: 'Pasaporte Americano', displayTitle: t('Pasaporte Americano'), icon: 'flag-usa' },
        { title: 'Visa Americana Primera Vez', displayTitle: t('Visa Americana Primera Vez'), icon: 'passport' },
        { title: 'Visa Americana Renovación', displayTitle: t('Visa Americana Renovación'), icon: 'sync-alt' },
        { title: 'Servicios adicionales', displayTitle: t('Servicios adicionales'), icon: 'plus-circle' },
    ];

    const questions = {
        'General': [
            { question: t('¿Cuál es el horario de atención?'), answer: t('Lun-Vie: 9:00-14:00  Sáb: 9:00-14:00\n        16:00-19:00  Dom: Cerrado') },
            { question: t('¿Cuál es la dirección de la oficina?'), answer: t('Nuestra única ubicación esta en el municipio de Manzanillo, Colima. Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219.') },
            { question: t('¿Cuáles son sus datos de contacto?'), answer: t('Correo: info@fastpass-visas.com\nOficina: +52 314 688 5645\nCelular: +52 314 352 6003') },
            { question: t('¿Puedo pagar con efectivo o con tarjeta?'), answer: t('De momento solo pagos en efectivo o transferencia, pronto tendremos disponible pago con terminal para tarjetas de débito y crédito (MSI).') },
        ],
        'Cita Informativa': [
            { question: t('¿Cómo puedo pedir una cita informativa o más detalles del trámite de visa?'), answer: t('Puede llamarnos en horario de oficina al +52 314 688 5645 o enviar un mensaje de whatsapp al +52 314 352 6003') },
            { question: t('¿En qué consiste la cita informativa?'), answer: t('Para proporcionarle información inicial y valoración de perfil para que conozca las oportunidades que tiene de aprobación, circunstancias personales o familiares y los tiempos adecuados para poder llevar a cabo su trámite') },
            { question: t('¿Cuánto tiempo tarda la cita informativa?'), answer: t('Aproximadamente 20-30 minutos, puede tardar más, dependiendo de su asunto en particular.') },
            { question: t('¿La cita informativa tiene costo?'), answer: t('Si, tiene un costo: Individual: $300 MXN por persona. En grupo familiar o parejas: $250 MXN por persona.') },
            { question: t('¿La empresa garantiza la aprobación de mi visa?'), answer: t('No, la aprobación depende exclusivamente del oficial consular durante la entrevista. Nuestro trabajo es reducir los riesgos de rechazo y asegurarnos de que obtenga toda la asesoría necesaria, acompañamiento integral, cumpla con todos los requisitos y esté bien preparado para la entrevista.') },
        ],
        'Pasaporte Mexicano': [
            { question: t('¿Cuáles son los requisitos para solicitar un pasaporte mexicano por primera vez?'), answer: t('Para obtener su pasaporte mexicano por primera vez, necesitará presentar:\n• Acta de nacimiento reciente y certificada por el registro civil.\n• Identificación oficial vigente (INE, cédula profesional, cartilla militar o equivalente).\n• CURP actualizada y verificada por registro civil.\n• Comprobante de pago de derechos.\n• Teléfono y correo electrónico.\n• En el caso de menores de edad, se requiere documentación adicional como la identificación de los padres y una constancia pediatrica (menor de 7 años) o constancia estudios (mayor de 7 años)\nNosotros le ayudamos a confirmar si necesita algún documento adicional, según las políticas actuales de la Secretaría de Relaciones Exteriores (SRE).') },
            { question: t('¿Qué documentos necesito para renovar mi pasaporte mexicano?'), answer: t('Si su pasaporte está próximo a vencer o ya venció, necesita presentar:\n• El pasaporte anterior.\n• Identificación oficial vigente (INE, cédula profesional, cartilla militar o equivalente).\n• Comprobante de pago de derechos.\n• Acta de nacimiento reciente y certificada por el registro civil, en algunos casos.\n• CURP actualizada y verificada por registro civil.\nNosotros le ayudamos a confirmar si necesita algún documento adicional, según las políticas actuales de la Secretaría de Relaciones Exteriores (SRE).') },
            { question: t('¿Cuánto tiempo toma el trámite del pasaporte mexicano?'), answer: t('El trámite en las oficinas de la SRE generalmente toma entre 30-45 minutos, siempre y cuando lleve todos los documentos en regla. Sin embargo, la disponibilidad de citas puede variar según la demanda. En nuestra empresa, gestionamos su cita de manera rápida y eficiente, para que pueda obtener su pasaporte en el menor tiempo posible.') },
            { question: t('¿Es posible obtener un pasaporte mexicano en caso de robo o extravío del anterior?'), answer: t('Sí, es posible obtener un nuevo pasaporte en caso de robo o extravío. Necesitará presentar:\n• Acta de nacimiento reciente.\n• Identificación oficial con fotografía vigente\n• CURP actualizada.\n• Una declaración de pérdida o robo, la cual puede tramitarse en el Ministerio Público.') },
            { question: t('¿Qué vigencia puedo elegir para mi pasaporte mexicano?'), answer: t('Puede elegir entre las siguientes vigencias:\n• 3 años (ideal para menores de 18 años o quienes viajan ocasionalmente).\n• 6 años (opción intermedia para quienes viajan con mayor frecuencia).\n• 10 años (recomendada para adultos que requieren un documento de larga duración).\nEl costo varía según la vigencia y el año, y nosotros le proporcionamos información actualizada y precisa para que pueda elegir la opción que más le convenga.') },
            { question: t('¿Puedo tramitar mi pasaporte mexicano sin una cita previa?'), answer: t('No, el trámite del pasaporte requiere una cita previa obligatoria en las oficinas de la SRE. Sin embargo, nosotros le ayudamos a gestionar su cita de manera eficiente, encontrando el horario y la oficina más conveniente para usted, sin complicaciones.') },
            { question: t('Para el trámite del pasaporte, ¿es obligatorio que asistan ambos padres a la cita de un menor?'), answer: t('Si, es obligatorio que ambos padres se presenten de manera física a la cita de un menor con su INE o Pasaporte y copia, siempre y cuando aparezcan en el acta de nacimiento ambos apellidos. Ya que deben firmar el consentimiento de padres.') },
            { question: t('Si uno de los padres no puede asistir a la cita, ¿se le niega el pasaporte a un menor?'), answer: t('Regularmente no se otorga si falta alguno de los requisitos, como la presencia de ambos padres. Sin embargo, si es posible tramitarlo, para ello, es necesario ofrecerle algunas sugerencias que debe llevar a cabo en el caso de que alguno por algún motivo no pueda acudir de manera presencial.') },
        ],
        'Pasaporte Americano': [
            { question: t('¿Qué tipo de servicios ofrecen para tramitar un pasaporte americano?'), answer: t('Ofrecemos servicios integrales que incluyen asesoría personalizada, revisión de documentos, llenado de formularios, programación de citas consulares y orientación en el proceso de entrega del pasaporte. Nuestro objetivo es simplificar cada paso para que usted tenga una experiencia sin complicaciones.') },
            { question: t('¿Pueden ayudarme si tengo dudas al llenar el formulario DS-11 o DS-82?'), answer: t('¡Claro que sí! Contamos con expertos que le guiarán en el llenado correcto de los formularios DS-11 (primera vez) y DS-82 (renovación). Nos aseguramos de que todos los datos sean precisos y cumplan con los requisitos para evitar errores o retrasos en su trámite.') },
            { question: t('¿Qué pasa si tengo dificultades para agendar mi cita en el consulado?'), answer: t('Si tiene problemas para agendar su cita, nosotros le ayudamos a programar su cita. Nos aseguramos de encontrar la fecha y el lugar más conveniente para su trámite, dependiendo de su ubicación y disponibilidad.') },
            { question: t('¿Ofrecen servicios para agilizar el proceso del pasaporte americano?'), answer: t('Sí, ofrecemos opciones de asistencia para procesar su pasaporte de manera más rápida, dependiendo de las políticas del consulado y las circunstancias específicas de su caso. Le ayudamos a gestionar solicitudes de emergencia si es necesario.') },
            { question: t('¿Cuánto tiempo tarda en procesarse un pasaporte americano en México?'), answer: t('El tiempo de procesamiento depende de la carga de trabajo del consulado, pero generalmente toma entre 2 y 6 semanas. En nuestra empresa, le orientamos para que complete su solicitud correctamente, evitando retrasos innecesarios.') },
            { question: t('¿Qué tipo de asesoría ofrecen para menores de edad que necesitan tramitar un pasaporte americano?'), answer: t('Brindamos asesoría especializada para el trámite de pasaportes de menores, incluyendo la recopilación de documentos requeridos, como actas de nacimiento y consentimientos de ambos padres. También le orientamos sobre los formularios y los pasos específicos para este tipo de solicitudes.') },
            { question: t('¿Me pueden ayudar si mi caso es complicado, como no tener acta de nacimiento americana o falta de documentos?'), answer: t('¡Por supuesto! Evaluamos su caso y le ofrecemos soluciones adaptadas a su situación. En casos complicados, le orientamos sobre los pasos adicionales que debe seguir para obtener los documentos necesarios y así completar su trámite de pasaporte americano.') },
            { question: t('¿Pueden ayudarme si mi pasaporte americano está dañado o inutilizable?'), answer: t('Sí, le ayudamos a gestionar la reposición de su pasaporte dañado. Esto incluye completar el formulario DS-11, preparar la documentación requerida y programar su cita en el consulado.') },
            { question: t('¿El servicio incluye la traducción de documentos si es necesario?'), answer: t('Sí, podemos ayudarle a traducir cualquier documento que requiera para su trámite, asegurándonos de que cumpla con los estándares consulares.') },
            { question: t('¿Qué diferencia tiene su empresa frente a otras que ofrecen estos servicios?'), answer: t('Nos destacamos por nuestro trato personalizado, transparencia y manejo confidencial de sus datos. Además, estamos con usted en cada paso del proceso, asegurándonos de que tenga claridad y confianza en su trámite.') },
        ],
        'Visa Americana Primera Vez': [
            { question: t('¿Cuánto hay que esperar para asistir a mi cita al Consulado?'), answer: t('El tiempo de espera varía según el tipo de visa, por ejemplo, para una renovación, el tiempo de espera a cita al CAS es de 7 a 30 días, dependiendo la disponibilidad y consulado seleccionado. Para trámites de primera vez ya que son dos citas, al CAS y al Consulado, el tiempo de espera regular oscila entre 90, 120 y 180 días.') },
            { question: t('¿Qué documentos necesito para solicitar una visa americana de turista?'), answer: t('Generalmente, se requiere:\n• Pasaporte vigente.\n• Dos fotografía reciente de menores de 15 años (según especificaciones consulares).\n• Hoja de confirmación del Formulario DS-160.\n• Comprobante de pago de la tarifa de solicitud.\n• Documentos que prueben solvencia económica, vínculos familiares y laborales.') },
            { question: t('¿Puedo solicitar una visa si ya me la negaron antes?'), answer: t('Sí, puede volver a solicitarla. Sin embargo, es importante analizar los motivos de la negativa anterior para reforzar su caso y mejorar sus posibilidades de aprobación.') },
            { question: t('¿Es obligatorio acudir con un gestor para tramitar mi visa?'), answer: t('No es obligatorio. Sin embargo, contar con una asesoría especializada puede ayudarle a evitar errores comunes, agilizar el proceso y garantizar que su documentación esté en orden.') },
            { question: t('¿Ustedes programan las citas en el consulado?'), answer: t('Sí, nos encargamos de agendar su cita en el CAS y su entrevista consular, asegurándonos de que sean en fechas convenientes para usted y adelantamos sus fechas en caso de que sea necesario. Pero primero deberemos realizar el proceso completo.') },
            { question: t('¿Ayudan a preparar las respuestas para la entrevista consular?'), answer: t('Sí, realizamos simulacros de entrevistas consulares con preguntas similares a las que le hará el oficial consular, para que pueda responder con seguridad y confianza.') },
            { question: t('¿Cuánto cuesta el trámite de la visa americana con ustedes?'), answer: t('El costo depende del tipo de visa y los servicios que elija. Nuestra tarifa de honorarios incluye asesoría, preparación de documentos y simulacros de entrevista. Contáctenos para una cotización personalizada.') },
            { question: t('¿Mis datos personales estarán seguros con ustedes?'), answer: t('Absolutamente. Nos comprometemos a manejar su información con total confidencialidad y a no compartirla con terceros. Además, usted será el único que tendrá acceso a sus cuentas y plataformas consulares con su usuario y contraseña, ya que no utilizamos cuentas de la empresa, no creamos cuentas de correo adicionales.') },
            { question: t('Si ya inicié mi trámite por mi cuenta, ¿ustedes pueden ayudarme a continuarlo?'), answer: t('Definitivamente, si ya iniciaste tu trámite y cuentas con una cita ya programada. Podemos ayudarle a preparar los documentos que requiere llevar a sus citas.') },
            { question: t('No recuerdo mi usuario y contraseña, ¿me pueden ayudar a recuperarla?'), answer: t('Por supuesto, podemos reestablecer la contraseña, siempre y cuando recuerde su correo que registró y tenga acceso a su bandeja de entrada en computadora o en su celular.') },
            { question: t('Tengo una cita programada, pero faltan 8 meses, ¿ustedes me pueden ayudar a adelantar las fechas?'), answer: t('Claro, dependiendo la disponibilidad de citas y conforme al consulado de su preferencia podemos apoyarle a reprogramar las fechas de sus citas.') },
            { question: t('Si no asistí a mi cita, ¿puedo programar una cita nueva?'), answer: t('Claro, siempre y cuando tenga un día o dos que hayan ocurrido sus citas y las razones suficientes para justificar su ausencia.') },
            { question: t('Si yo tengo visa, ¿puedo tramitar visa para mis hijos?'), answer: t('Si, definitivamente. Será necesario verificar las edades de cada uno, para poder sugerirle el proceso que mejor convenga para que obtengan sus visas de una manera adecuada y considerando los tiempos de espera de citas. Ya que en menores de 7 años, puede ser su cita en menor tiempo.') },
        ],
        'Visa Americana Renovación': [
            { question: t('¿Cuáles son los requisitos para renovar mi visa americana?'), answer: t('Generalmente, se requiere:\n• Pasaporte vigente.\n• Dos fotografías recientes de menores de 15 años (según especificaciones consulares).\n• Hoja de confirmación del Formulario DS-160.\n• Comprobante de pago de la tarifa de solicitud.') },
            { question: t('¿Es necesario acudir a una entrevista consular para renovar mi visa?'), answer: t('En algunos casos, no es necesario acudir a una entrevista. Si su visa venció hace menos de 48 meses y cumple ciertos criterios solo se presenta a una cita al CAS. Sin embargo, esto depende del tipo de visa y de la política actual del consulado. Nosotros verificamos si califica para el programa de exención de entrevista para renovar si visa sin entrevista al Consulado.') },
            { question: t('¿Cuánto tiempo tarda el proceso de renovación de la visa americana?'), answer: t('El tiempo de renovación varía dependiendo de la disponibilidad de citas en el consulado y el método de envío de documentos. Generalmente, el proceso puede tomar entre 2 y 4 semanas. Le ayudamos a gestionar el trámite para que sea lo más rápido y eficiente posible.') },
            { question: t('¿Puedo renovar mi visa si está vencida desde hace varios años?'), answer: t('Sí, es posible renovar su visa aun cuando ya pasaron varios años. Sin embargo, aplican restricciones si han pasado más de 48 meses desde su vencimiento, probablemente será necesario agendar una segunda cita para entrevista consular. Nosotros le asesoramos para verificar su situación específica y guiarle en el proceso.') },
            { question: t('¿Puedo renovar mi visa en un consulado fuera de México?'), answer: t('Sí, en algunos casos puede renovar su visa en un consulado americano en otro país. Sin embargo, esto puede implicar requisitos adicionales o tiempos de espera diferentes. Nosotros le ayudamos a evaluar si esta opción es viable para usted y le orientamos en los pasos necesarios.') },
        ],
        'Servicios adicionales': [
            { question: t('¿Qué servicios adicionales ofrecen además del trámite de pasaportes y visas?'), answer: t('Además de los trámites de pasaportes y visas, ofrecemos servicios de traducción de documentos, asesoría para trámites consulares, renovaciones de visas y pasaportes, preparación para entrevistas consulares, citas de emergencia, adelanto de fechas de citas, asesoría por visas canceladas o rechazadas, actas de nacimiento de cualquier estado, preparación para entrevista, orientación para viajes al extranjero de mexicanos y estadounidenses, compra de vuelos en línea, solicitud eTA para viajar a Canadá, solicitud de visa Canadiense, entre otros.') },
            { question: t('¿Pueden ayudarme con la traducción de documentos necesarios para mis tramites?'), answer: t('Sí, contamos con servicios de traducción de inglés a español y español a inglés, para documentos como actas de nacimiento, comprobantes de domicilio, cartas oficiales y cualquier documento requerido para trámites en México y E.U.') },
            { question: t('¿Ofrecen apoyo para tramitar visas de otros países además de Estados Unidos?'), answer: t('Sí, podemos orientarle en el trámite de eTA y visa canadiense.') },
            { question: t('¿Qué servicios ofrecen para ciudadanos americanos que residen en México?'), answer: t('Brindamos servicios como renovación de pasaportes americanos, asistencia con el registro consular en México, traducciones, trámites de actas consulares de nacimiento en el extranjero (CRBA) para hijos de ciudadanos americanos nacidos en México.') },
            { question: t('¿Cómo pueden ayudarme si necesito una visa de emergencia o un trámite urgente?'), answer: t('Ofrecemos orientación y gestión para solicitudes de visas o pasaportes de emergencia. Evaluamos su caso y le ayudamos a presentar una solicitud que cumpla con los requisitos del consulado para casos urgentes.') },
            { question: t('¿Pueden asesorarme para solicitar la ciudadanía americana para mi hijo nacido en México?'), answer: t('Sí, contamos con personas con experiencia en este tipo de trámites. Le orientamos sobre los documentos necesarios, como actas de nacimiento, pruebas de ciudadanía y formularios específicos, para que pueda registrar a su hijo como ciudadano americano.') },
            { question: t('¿Cómo puedo comunicarme con su empresa si tengo dudas adicionales o necesito más información?'), answer: t('Puede comunicarse con nosotros a través de nuestro formulario en línea, correo electrónico o vía telefónica. También ofrecemos consultas presenciales en nuestras oficinas, donde nuestros asesores estarán encantados de resolver sus dudas y acompañarlo en su trámite.') },
        ],
    };

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() !== '') {
            performSearch(query);
            setShowSearchSuggestions(true);
        } else {
            setFilteredResults([]);
            setShowSearchSuggestions(false);
        }
    };

    const performSearch = (query) => {
        const normalizedQuery = normalizeText(query);
        const results = [];

        Object.keys(questions).forEach(topic => {
            questions[topic].forEach(({ question, answer }) => {
                if (normalizeText(question).includes(normalizedQuery)) {
                    results.push({ topic, question, answer });
                }
            });
        });

        setFilteredResults(results);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        if (searchQuery.trim() !== '') {
            // Ejecuta la búsqueda y despliega resultados
            performSearch(searchQuery);
            setShowSearchResults(true);
            setShowSearchSuggestions(false);
            setIsItemSelected(false);

            // Desplaza la vista a la sección de resultados
            setTimeout(() => {
                searchResultsRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 0); // Ajuste para asegurar que el DOM esté actualizado antes de desplazarse

            // Limpia el input de búsqueda
            setSearchQuery('');
        }
    };

    const toggleQuestion = (normalizedQuestion) => {
        setExpandedQuestions(prevState => ({
            ...prevState,
            [normalizedQuestion]: !prevState[normalizedQuestion]
        }));
    };

    const handleTopicChange = (topicTitle) => {
        setSelectedTopic(topicTitle);
        setExpandedQuestions({}); // Colapsar todas las preguntas
        setHighlightedQuestion(''); // Quitar cualquier resaltado
        setShowSearchResults(false); // Ocultar resultados de búsqueda
    };

    const handleQuestionClick = (questionText, topic = null) => {
        if (topic && topic !== selectedTopic) {
            setSelectedTopic(topic);
            setExpandedQuestions({});
        }
        
        const questionKey = normalizeText(questionText);
        setHighlightedQuestion(questionKey);
        
        // Expandir la pregunta
        setTimeout(() => {
            setExpandedQuestions(prevState => ({
                ...prevState,
                [questionKey]: true
            }));
            
            // Desplazar a la sección de temas
            setTimeout(() => {
                temasContentRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 200);
        
        // Quitar el resaltado después de 3 segundos
        setTimeout(() => {
            setHighlightedQuestion('');
        }, 3000);
    };
        
    const selectResult = (result) => {
        setSelectedTopic(result.topic);
        setExpandedQuestions({});
        setSearchQuery('');
        setFilteredResults([]);
        setShowSearchResults(false);
        setShowSearchSuggestions(false);
        setIsItemSelected(true);
        
        // Resaltar la pregunta seleccionada
        const questionKey = normalizeText(result.question);
        setHighlightedQuestion(questionKey);
        
        // Expandir la pregunta después de un breve delay
        setTimeout(() => {
            setExpandedQuestions(prevState => ({
                ...prevState,
                [questionKey]: true
            }));
            
            // Desplazar a la sección de temas después de que se actualice el DOM
            setTimeout(() => {
                temasContentRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 200);
        
        // Quitar el resaltado después de 3 segundos
        setTimeout(() => {
            setHighlightedQuestion('');
        }, 3000);
    };

    return (
        <>
            <section className="help fade-in">
                <h1>{t("¿En qué podemos ayudarte?")}</h1>
                <div className="container-search">
                    <MDBIcon
                        fas
                        icon="search"
                        className="icon"
                        onClick={handleSearchSubmit}
                    />
                    <input
                        type="text"
                        placeholder={t("Busca tu pregunta...")}
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit(e);
                            }
                        }}
                    />

                    {showSearchSuggestions && filteredResults.length > 0 && (
                        <div className="search-results">
                            {filteredResults.map((result, index) => (
                                <div
                                    key={index}
                                    className="search-result-item"
                                    onClick={() => selectResult(result)}
                                >
                                    <span>{result.question}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="principales">
                    <div className="columna" onClick={() => handleQuestionClick(t('¿Qué documentos necesito para solicitar una visa americana de turista?'), 'Visa Americana Primera Vez')}>
                        <h3>{t("Visa Americana Primera Vez")}</h3>
                        <h2>{t('¿Qué documentos necesito para solicitar una visa americana de turista?')}</h2>
                    </div>
                    <div className="columna" onClick={() => handleQuestionClick(t('¿Cuáles son los requisitos para solicitar un pasaporte mexicano por primera vez?'), 'Pasaporte Mexicano')}>
                        <h3>{t("Pasaporte Mexicano")}</h3>
                        <h2>{t('¿Cuáles son los requisitos para solicitar un pasaporte mexicano por primera vez?')}</h2>
                    </div>
                    <div className="columna" onClick={() => handleQuestionClick(t('¿La cita informativa tiene costo?'), 'Cita Informativa')}>
                        <h3>{t("Cita Informativa")}</h3>
                        <h2>{t('¿La cita informativa tiene costo?')}</h2>
                    </div>
                    <div className="columna" onClick={() => handleQuestionClick(t('¿Qué servicios adicionales ofrecen además del trámite de pasaportes y visas?'), 'Servicios adicionales')}>
                        <h3>{t("Servicios adicionales")}</h3>
                        <h2>{t('¿Qué servicios adicionales ofrecen además del trámite de pasaportes y visas?')}</h2>
                    </div>
                </div>
            </section>

            {showSearchResults && filteredResults.length > 0 && !isItemSelected && (
                <section ref={searchResultsRef} className="search-results-full">
                    <div className="positionr">
                        <h2>{t("Resultados de búsqueda")}</h2>
                        <div className="resultados-container">
                            {filteredResults.map((result, index) => (
                                <div key={index} className="pregunta-item">
                                    <h3 onClick={() => toggleQuestion(normalizeText(result.question))}>
                                        {result.question}
                                        <MDBIcon
                                            fas
                                            icon={expandedQuestions[normalizeText(result.question)] ? 'chevron-up' : 'chevron-down'}
                                            className="toggle-icon"
                                        />
                                    </h3>
                                    {expandedQuestions[normalizeText(result.question)] && (
                                        <p className="answer">
                                            {result.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="temas panel-escritorio fade-in">
                <div className="temas-container">
                    <div className="temas-sidebar">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className={`tema-item ${selectedTopic === topic.title ? 'active' : ''}`}
                                onClick={() => handleTopicChange(topic.title)}
                            >
                                <MDBIcon fas icon={topic.icon} className="icon" />
                                <span>{topic.displayTitle}</span>
                            </div>
                        ))}
                    </div>
                    <div className="temas-content" ref={temasContentRef}>
                        <h2>{t(selectedTopic)}</h2>
                        {questions[selectedTopic].map((q, index) => (
                            <div key={index} className={`pregunta-item ${highlightedQuestion === normalizeText(q.question) ? 'highlighted' : ''}`}>
                                <h3 onClick={() => toggleQuestion(normalizeText(q.question))}>
                                    {q.question}
                                    <MDBIcon
                                        fas
                                        icon={expandedQuestions[normalizeText(q.question)] ? 'chevron-up' : 'chevron-down'}
                                        className="toggle-icon"
                                    />
                                </h3>
                                {expandedQuestions[normalizeText(q.question)] && (
                                    <p className="answer">
                                        {q.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vista móvil */}
            <section className="panel-movil fade-in">
                <h3 className='tit'>{t("Preguntas Frecuentes")}</h3>
                <section className="temas">
                    <div className="temas-lista">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className={`tema-item-movil ${selectedTopic === topic.title ? 'active' : ''}`}
                                onClick={() => {
                                    handleTopicChange(topic.title);
                                }}
                            >
                                <div className="tema-header">
                                    <MDBIcon fas icon={topic.icon} className="icon" />
                                    <span>{topic.displayTitle}</span>
                                    <MDBIcon
                                        fas
                                        icon={selectedTopic === topic.title ? 'chevron-up' : 'chevron-down'}
                                        className="toggle-icon"
                                    />
                                </div>
                                {selectedTopic === topic.title && (
                                    <div className="tema-content">
                                        {questions[topic.title].map((q, qIndex) => (
                                            <div key={qIndex} className="pregunta-item-movil">
                                                <h3 onClick={() => toggleQuestion(normalizeText(q.question))}>
                                                    {q.question}
                                                    <MDBIcon
                                                        fas
                                                        icon={expandedQuestions[normalizeText(q.question)] ? 'chevron-up' : 'chevron-down'}
                                                        className="toggle-icon"
                                                    />
                                                </h3>
                                                {expandedQuestions[normalizeText(q.question)] && (
                                                    <p className="answer">
                                                        {q.answer}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
}

export default FAQ;
