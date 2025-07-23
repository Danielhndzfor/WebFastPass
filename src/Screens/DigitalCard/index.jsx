import React, { useState } from 'react';
import CardPresentation from './CardPresentation';
import ServicesSection from './ServicesSection';

function DigitalCard() {
    const [currentView, setCurrentView] = useState('card'); // 'card' o 'services'

    const showServices = () => {
        setCurrentView('services');
    };

    const showCard = () => {
        setCurrentView('card');
    };

    return (
        <div className="digital-card-container">
            {currentView === 'card' ? (
                <CardPresentation onShowServices={showServices} />
            ) : (
                <ServicesSection onBack={showCard} />
            )}
        </div>
    );
}

export default DigitalCard;
