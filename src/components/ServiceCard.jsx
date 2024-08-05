// components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ServiceCard.css';

const ServiceCard = ({ image, title, description, link }) => {
    return (
        <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className="service-card-btn">Conocer Más</Link>
            </div>
        </div>
    );
};

export default ServiceCard;


