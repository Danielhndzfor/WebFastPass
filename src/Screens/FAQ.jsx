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
        // Preguntas sobre Visas
        { title: 'Visa Americana', icon: 'passport' },
        // Preguntas sobre Pasaportes
        { title: 'Pasaporte', icon: 'id-card' },
    ];

    const questions = {
        'General': [
            { question: '¿Cuál es el horario de atención?', answer: 'Nuestro horario de atención son Lunes - Martes : 9 a.m - 7 p.m  Miércoles - Jueves : 2 p.m - 7 p.m   Viernes : 9 a.m - 2 p.m  Sabado : 9 a.m - 2 p.m' },
            { question: '¿Cuál es la dirección de la oficina?', answer: 'Nuestra única ubicación esta en el municipio de Manzanillo, Colima. Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219.' },
            { question: '¿Cuál es el teléfono de contacto?', answer: 'Puedes comunicarte al teléfono +52 314 688 5645' },
            { question: '¿Cuál es el correo de contacto?', answer: 'Puedes escribirnos a info@fastpass-visas.com' },
            { question: '¿Puedo pagar con efectivo o con tarjeta?', answer: 'De momento solo pagos en efectivo o transferencia, pronto tendremos disponible pago con terminal para tarjetas de débito y crédito (MSI).' },
        ],
        'Visa Americana': [
            { question: '¿Qué es una visa?', answer: 'Los ciudadanos estadounidenses y los residentes permanentes legales no necesitan obtener una visa para entrar en los Estados Unidos. En general, un ciudadano de un país extranjero que pretenda entrar en los Estados Unidos debe obtener primero una visa estadounidense. Algunos viajeros internacionales pueden entrar en los Estados Unidos sin visa, siempre que cumplan los requisitos del Programa de Exención de Visa de los EE. UU.' },
            { question: '¿Qué necesito para iniciar mi trámite de visa con ustedes?', answer: 'Principalmente requiere su pasaporte vigente, datos personales, familiares y laborales. Así como un domicilio en EU y una razón clara de motivo de su viaje, entre otros.' },
            { question: '¿Qué tipos de visas existen?', answer: 'Existen varios tipos de visas para no inmigrantes que permiten viajes temporales a los Estados Unidos. El tipo de visa que necesita depende del propósito de su viaje.' },
            { question: '¿Con ustedes es más fácil que me aprueben mi visa?', answer: 'Siempre le atenderemos de manera que agilicemos los procesos de solicitud, y facilitemos la comunicación para que tenga noción de lo que esta realizando. De igual manera le daremos todas las facilidades y recursos argumentativos y de evidencias para poder presentar o contestar correctamente en su entrevista. Sin embargo, la decisión final siempre será del oficial consular.' },
            { question: '¿Deberia hacer las reservaciones para mi viaje antes de la entrevista?', answer: 'Se recomienda a los solicitantes no hacer reservaciones para viajar hasta recibir su pasaporte y su visa.' },
            { question: 'Mi nombre cambio. ¿Sigue siendo válido mi visado de los EE.UU donde figura mi nombre anterior?', answer: 'Si su cambio de nombre obedece a un motivo legal como casamiento, divorcio u orden judicial, tendrá que sacar un pasaporte nuevo. Una vez que tenga un pasaporte nuevo, el Departamento de Estado recomienda que solicite un nuevo visado estadounidense para que le resulte más fácil viajar hacia y desde los Estados Unidos.' },
            { question: 'Después de obtener mi visa, ¿podré ingresar a los Estados Unidos?', answer: 'Un visado no garantiza el ingreso a los Estados Unidos, pero permite a un ciudadano extranjero viajar hasta un puerto de entrada a los EE.UU. y pedir permiso para entrar a los Estados Unidos. Los funcionarios de Aduana y Protección de Fronteras (CBP) de EE.UU. del Departamento de Seguridad Interior están autorizados a permitir o denegar la entrada a los Estados Unidos.' },
        ],
        'Pasaporte': [
            { question: '¿Cómo tramitarlo?', answer: 'Para tramitarlo necesitas...' },
            { question: '¿Qué documentos son necesarios?', answer: 'Necesitarás...' },
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
