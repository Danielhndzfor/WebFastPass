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
    const [selectedTopic, setSelectedTopic] = useState('Visa Americana');
    const [expandedQuestions, setExpandedQuestions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [isItemSelected, setIsItemSelected] = useState(false);

    // Crear una referencia para la sección de resultados de búsqueda
    const searchResultsRef = useRef(null);

    const topics = [
        { title: 'Visa Americana', icon: 'passport' },
        { title: 'Pasaporte Mexicano', icon: 'id-card' },
        { title: 'Cita Informativa', icon: 'calendar-alt' },
        { title: 'Actas de Nacimiento', icon: 'file-alt' },
    ];

    const questions = {
        'Visa Americana': [
            { question: '¿Qué requisitos se necesitan para tramitarla?', answer: 'Los requisitos son...' },
            { question: '¿Cuánto tiempo tarda el trámite?', answer: 'El trámite tarda...' },
        ],
        'Pasaporte Mexicano': [
            { question: '¿Cómo tramitarlo?', answer: 'Para tramitarlo necesitas...' },
            { question: '¿Qué documentos son necesarios?', answer: 'Necesitarás...' },
        ],
        'Cita Informativa': [
            { question: '¿Qué costo tiene la primer cita?', answer: 'El costo es...' },
            { question: '¿Qué incluye la cita informativa?', answer: 'La cita incluye...' },
        ],
        'Actas de Nacimiento': [
            { question: '¿Qué se necesita para tramitarla?', answer: 'Para tramitarla...' },
            { question: '¿Dónde puedo solicitarla?', answer: 'Puedes solicitarla en...' },
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
            <section className="help">
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

            <section className="temas panel-escritorio">
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
            <section className="panel-movil">
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
