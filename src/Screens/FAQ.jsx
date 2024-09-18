import React, { useState, useRef } from 'react';
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
    const [selectedTopic, setSelectedTopic] = useState('General');
    const [expandedQuestions, setExpandedQuestions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [isItemSelected, setIsItemSelected] = useState(false);

    // Crear una referencia para la sección de resultados de búsqueda
    const searchResultsRef = useRef(null);

    const topics = [
        // Preguntas Generales
        { title: 'General', icon: 'question-circle' },
        // Preguntas sobre Consulta Informativa
        { title: 'Consulta Informativa', icon: 'calendar-alt' },
        // Preguntas sobre Visas
        { title: 'Visa Americana', icon: 'passport' },
        // Preguntas sobre Pasaportes Mexicano
        { title: 'Pasaporte Mexicano', icon: 'id-card' },
        // Preguntas sobre Pasaporte Americano
        { title: 'Pasaporte Americano', icon: 'passport' },
        // Preguntas sobre Actas de Nacimiento
        { title: 'Actas de Nacimiento', icon: 'file-alt' },
        // Preguntas sobre Visas Rechazadas/Canceladas
        { title: 'Visas Rechazadas/Canceladas', icon: 'ban' },
        // Preguntas sobre Citas de Emergencia
        { title: 'Citas de Emergencia', icon: 'calendar-alt' },
        // Preguntas sobre Adelantar Cita
        { title: 'Adelantar Cita', icon: 'calendar-alt' },
        // Preguntas sobre Preparación para Entrevista
        { title: 'Preparación para Entrevista', icon: 'user-tie' },
        // Preguntas sobre Traduccion de Documentos
        { title: 'Traducción de Documentos', icon: 'file-signature' },
        // Preguntas sobre Poder Notarial para mexicanos
        { title: 'Poder Notarial para mexicanos', icon: 'file-signature' },
        // Preguntas sobre Poder Notarial para americanos
        { title: 'Poder Notarial para americanos', icon: 'file-signature' },
        // Preguntas sonre Formato SAM
        { title: 'Formato SAM', icon: 'file-alt' },
    ];

    const questions = {
        'General': [
            { question: '¿Cuál es el horario de atención?', answer: 'Nuestro horario de atención son Lunes - Martes : 9 a.m - 7 p.m  Miércoles - Jueves : 2 p.m - 7 p.m   Viernes : 9 a.m - 2 p.m  Sabado : 9 a.m - 2 p.m' },
            { question: '¿Cuál es la dirección de la oficina?', answer: 'Nuestra única ubicación esta en el municipio de Manzanillo, Colima. Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219.' },
            { question: '¿Cuál es el teléfono de contacto?', answer: 'Puedes comunicarte al teléfono...' },
            { question: '¿Cuál es el correo de contacto?', answer: 'Puedes escribirnos a...' },
            { question: '¿Puedo pagar con efectivo o con tarjeta?', answer: 'De momento solo pagos en efectivo o transferencia, pronto tendremos disponible pago con terminal para tarjetas de débito y crédito (MSI).' },
        ],
        'Consulta Informativa': [
            { question: '¿Qué costo tiene la primer cita?', answer: 'El costo es...' },
            { question: '¿Puedo pedir una cita con ustedes para informarme acerca del proceso de trámite de visa?', answer: 'Claro, con gusto le atenderemos para proporcionarle información inicial y valoración de perfil para que conozca las oportunidades que tiene de aprobación, circunstancias personales o familiares y los tiempos adecuados para poder llevar a cabo su trámite.' },
            { question: '¿A mi cita informativa puedo llevar más gente conmigo?', answer: 'Por supuesto, pueden asistir de manera individual, pareja o familia. Incluso mas miembros de familia que deseen realizar sus trámites. Nuestra intención siempre será mantener informados de manera clara e incluyente.' },
        ],
        'Visa Americana': [
            { question: '¿Qué necesito para iniciar mi trámite de visa con ustedes?', answer: 'Principalmente requiere su pasaporte vigente, datos personales, familiares y laborales. Así como un domicilio en EU y una razón clara de motivo de su viaje, entre otros.' },
            { question: '¿Con ustedes es más fácil que me aprueben mi visa?', answer: 'Siempre le atenderemos de manera que agilicemos los procesos de solicitud, y facilitemos la comunicación para que tenga noción de lo que esta realizando. De igual manera le daremos todas las facilidades y recursos argumentativos y de evidencias para poder presentar o contestar correctamente en su entrevista. Sin embargo, la decisión final siempre será del oficial consular.' },
        ],
        'Pasaporte Mexicano': [
            { question: '¿Cómo tramitarlo?', answer: 'Para tramitarlo necesitas...' },
            { question: '¿Qué documentos son necesarios?', answer: 'Necesitarás...' },
        ],
        'Pasaporte Americano': [
            { question: '¿Qué se necesita para tramitarlo?', answer: 'Para tramitarlo...' },
            { question: '¿Dónde puedo solicitarlo?', answer: 'Puedes solicitarlo en...' },
        ],
        'Actas de Nacimiento': [
            { question: '¿Qué se necesita para tramitarla?', answer: 'Para tramitarla...' },
            { question: '¿Dónde puedo solicitarla?', answer: 'Puedes solicitarla en...' },
        ],
        'Visas Rechazadas/Canceladas': [
            { question: '¿Si me negaron mi visa, puedo tramitar nuevamente?', answer: 'Por supuesto, es importante analizar su situación y conocer las circunstancias de su negación para ofrecerle las mejores opciones o alternativas que le permitan tener un mejor proceso y mayores probabilidades de aprobación.' },
            { question: '¿Qué documentos necesito?', answer: 'Necesitarás...' },
        ],
        'Citas de Emergencia': [
            { question: '¿Cómo puedo agendar una cita de emergencia?', answer: 'Para agendar una cita de emergencia...' },
            { question: '¿Cuál es el costo de la cita de emergencia?', answer: 'El costo es...' },
        ],
        'Adelantar Cita': [
            { question: '¿Es posible adelantar mi cita?', answer: 'Sí, puedes adelantar tu cita...' },
            { question: '¿Qué requisitos se necesitan?', answer: 'Los requisitos son...' },
        ],
        'Preparación para Entrevista': [
            { question: '¿Cómo me preparo para la entrevista?', answer: 'Para prepararte...' },
            { question: '¿Qué preguntas me harán?', answer: 'Durante la entrevista...' },
        ],
        'Traducción de Documentos': [
            { question: '¿Qué tipo de documentos traducen?', answer: 'Traducimos...' },
            { question: '¿Cuál es el tiempo de entrega?', answer: 'El tiempo de entrega es...' },   
        ],
        'Poder Notarial para mexicanos': [
            { question: '¿Qué es un poder notarial?', answer: 'Un poder notarial es...' },
            { question: '¿Cómo puedo obtener un poder notarial?', answer: 'Para obtener un poder notarial...' },
        ],
        'Poder Notarial para americanos': [
            { question: '¿Qué es un poder notarial?', answer: 'Un poder notarial es...' },
            { question: '¿Cómo puedo obtener un poder notarial?', answer: 'Para obtener un poder notarial...' },
        ],
        'Formato SAM': [
            { question: '¿Qué es el Formato SAM?', answer: 'El Formato SAM es...' },
            { question: '¿Dónde puedo obtenerlo?', answer: 'Puedes obtenerlo...' },
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

    const selectResult = (result) => {
        setSelectedTopic(result.topic);
        setExpandedQuestions(prevState => ({
            ...prevState,
            [normalizeText(result.question)]: true
        }));
        setSearchQuery('');
        setFilteredResults([]);
        setShowSearchResults(false);
        setShowSearchSuggestions(false);
        setIsItemSelected(true);
        // Desplazar la vista a la sección de resultados de búsqueda
        searchResultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className="help fade-in">
                <h1>¿En qué podemos ayudarte?</h1>
                <div className="container-search">
                    <MDBIcon
                        fas
                        icon="search"
                        className="icon"
                        onClick={handleSearchSubmit}
                    />
                    <input
                        type="text"
                        placeholder="Busca tu pregunta..."
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
                    <div className="columna">
                        <h3>Visa Americana</h3>
                        <h2>¿Qué requisitos se necesitan para tramitarla?</h2>
                    </div>
                    <div className="columna">
                        <h3>Pasaporte Mexicano</h3>
                        <h2>¿Cómo tramitarlo?</h2>
                    </div>
                    <div className="columna">
                        <h3>Cita Informativa</h3>
                        <h2>¿Qué costo tiene la primer cita?</h2>
                    </div>
                    <div className="columna">
                        <h3>Actas de Nacimiento</h3>
                        <h2>¿Qué se necesita para tramitarla?</h2>
                    </div>
                </div>
            </section>

            {showSearchResults && filteredResults.length > 0 && !isItemSelected && (
                <section ref={searchResultsRef} className="search-results-full">
                    <div className="positionr">
                        <h2>Resultados de búsqueda</h2>
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
                                onClick={() => setSelectedTopic(topic.title)}
                            >
                                <MDBIcon fas icon={topic.icon} className="icon" />
                                <span>{topic.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="temas-content">
                        <h2>{selectedTopic}</h2>
                        {questions[selectedTopic].map((q, index) => (
                            <div key={index} className="pregunta-item">
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
                <h3 className='tit'>Preguntas Frecuentes</h3>
                <section className="temas">
                    <div className="temas-lista">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className={`tema-item-movil ${selectedTopic === topic.title ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedTopic(topic.title);
                                }}
                            >
                                <div className="tema-header">
                                    <MDBIcon fas icon={topic.icon} className="icon" />
                                    <span>{topic.title}</span>
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
                                                <h3 onClick={() => toggleQuestion(qIndex)}>
                                                    {q.question}
                                                    <MDBIcon
                                                        fas
                                                        icon={expandedQuestions[qIndex] ? 'chevron-up' : 'chevron-down'}
                                                        className="toggle-icon"
                                                    />
                                                </h3>
                                                {expandedQuestions[qIndex] && (
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
