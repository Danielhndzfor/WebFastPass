import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css'; // Asegúrate de crear y ajustar el archivo CSS

function Card({ image, title, description, link }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <Link to={link} className="card-button">Saber Más</Link>
            </div>
        </div>
    );
}

export default Card;
