import React, { useEffect } from 'react';

function PolEmpresa() {
    useEffect(() => {
        // Cargar el script de PayPal si no está ya en el DOM
        if (!window.paypal) {
            const script = document.createElement('script');
            script.src = "https://www.paypalobjects.com/js/external/paypal-hosted-buttons.min.js";
            script.async = true;
            script.onload = () => {
                if (window.paypal) {
                    window.paypal.HostedButtons({
                        hostedButtonId: "ZV6J43FNPTJ4Q"
                    }).render("#paypal-container-ZV6J43FNPTJ4Q");
                }
            };
            document.body.appendChild(script);
        } else {
            // Si el script ya está cargado, renderizar el botón de PayPal directamente
            window.paypal.HostedButtons({
                hostedButtonId: "ZV6J43FNPTJ4Q"
            }).render("#paypal-container-ZV6J43FNPTJ4Q");
        }

        // Cleanup function to remove the script if component unmounts
        return () => {
            const script = document.querySelector('script[src="https://www.paypalobjects.com/js/external/paypal-hosted-buttons.min.js"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez

    return (
        <>
            <div></div>
            <div>PolEmpresa</div>
            <div id="paypal-container-ZV6J43FNPTJ4Q"></div>
        </>
    );
}

export default PolEmpresa;
