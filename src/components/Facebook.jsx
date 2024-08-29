import React, { useEffect } from 'react';
import '../css/Facebook.css';

const FacebookIframe = () => {
    useEffect(() => {
        const fbIframe = document.querySelector('.faceEscritorio');
        if (fbIframe) {
            fbIframe.onload = () => {
                console.log('Facebook iFrame loaded successfully');
            };
        }
    }, []);

    return (
        <>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisasmanzanillo%3Fmibextid%3DdGKdO6&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="faceEscritorio"
                width="500"
                height="700"
                style={{ border: 'none', borderRadius: '20px', overflow: 'hidden' }}
                seamless
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>

            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisasmanzanillo%3Fmibextid%3DdGKdO6&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="faceMovil"
                width="300"
                height="400"
                style={{ border: 'none', borderRadius: '20px', overflow: 'hidden' }}
                seamless
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </>
    );
};

export default FacebookIframe;
