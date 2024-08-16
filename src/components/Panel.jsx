import React, { useState, useEffect, useRef } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../css/Panel.css'; // Asegúrate de ajustar el archivo CSS

function Panel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabIndicatorRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        if (tabIndicatorRef.current) {
            tabIndicatorRef.current.style.top = `calc(45px + ${activeIndex * 50}px)`;
        }
    }, [activeIndex]);

    return (
        <div className="tabs">
            <div className="tab-header">
                <div className={activeIndex === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
                    <MDBIcon fas icon="search" className="iconH" /> <span>Paso 1</span>
                </div>
                <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
                    <MDBIcon fas icon="user-edit" className="iconH" /> <span>Paso 2</span>
                </div>
                <div className={activeIndex === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
                    <MDBIcon fas icon="check-circle" className="iconH" /> <span>Paso 3</span>
                </div>
                <div className={activeIndex === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
                    <MDBIcon fas icon="user-check" className="iconH" /> <span>Paso 4</span>
                </div>
                <div className={activeIndex === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>
                    <MDBIcon fab icon="wpforms" className="iconH" /> <span>Paso 5</span>
                </div>
                <div className={activeIndex === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>
                    <MDBIcon fas icon="money-bill-alt" className="iconH" /> <span>Paso 6</span>
                </div>
                <div className={activeIndex === 6 ? 'active' : ''} onClick={() => handleTabClick(6)}>
                    <MDBIcon fas icon="calendar-check" className="iconH" /> <span>Paso 7</span>
                </div>
                <div className={activeIndex === 7 ? 'active' : ''} onClick={() => handleTabClick(7)}>
                    <MDBIcon fas icon="file-alt" className="iconH" /> <span>Paso 8</span>
                </div>
                <div className={activeIndex === 8 ? 'active' : ''} onClick={() => handleTabClick(8)}>
                    <MDBIcon fas icon="chalkboard-teacher" className="iconH" /> <span>Paso 9</span>
                </div>
                <div className={activeIndex === 9 ? 'active' : ''} onClick={() => handleTabClick(9)}>
                    <MDBIcon fas icon="truck" className="iconH" /> <span>Paso 10</span>
                </div>
                
                

            </div>
            <div className="tab-indicator" ref={tabIndicatorRef}></div>
            <div className="tab-content">
                <div className={activeIndex === 0 ? 'active' : ''}>
                    <MDBIcon fas icon="search" className='iconT' />
                    <h2>Paso 1</h2>
                    <p>Recabar información para genera un borrador de la declaración.</p>
                </div>
                <div className={activeIndex === 1 ? 'active' : ''}>
                    <MDBIcon fas icon="passport" className='iconT' />
                    <h2>Visa section</h2>
                    <p>Some text about visa section.</p>
                </div>
                <div className={activeIndex === 2 ? 'active' : ''}>
                    <MDBIcon fas icon="plane" className='iconT' />
                    <h2>Fly section</h2>
                    <p>Some text about fly section.</p>
                </div>
                <div className={activeIndex === 3 ? 'active' : ''}>
                    <MDBIcon fas icon="home" className='iconT' />
                    <h2>Home section</h2>
                    <p>Some text about home section.</p>
                </div>
            </div>
        </div>
    );
}

export default Panel;
