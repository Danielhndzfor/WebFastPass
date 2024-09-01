import React, { useEffect, useState, useRef } from 'react';

function Contador({ end, duration, id, texto, icon, icon1 }) {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const increment = end / (duration / 10);

                    const updateCounter = () => {
                        start += increment;
                        if (start > end) {
                            setCount(end);
                        } else {
                            setCount(Math.ceil(start));
                            setTimeout(updateCounter, 10);
                        }
                    };

                    updateCounter();
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div className="contador" ref={elementRef}>
            <p className="contador-texto">{texto}</p>
            <h3 id={id}>{icon1}{count}{icon}</h3>
        </div>
    );
}

export default Contador;


