import React from 'react'
import { useState } from 'react'
import CookieSettings from '../../components/CookieSettings'
function PolCookies() {
    const [showSettings, setShowSettings] = useState(false);

    const handleCustomize = () => {
        setShowSettings(true);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
        setShowBanner(false);
    };

    return (
        <>
        <CookieSettings isOpen={showSettings} onClose={handleCloseSettings} />
            <div className="hero-container">
                <div className="hero-content">
                    <p>Conoce la política de cookies de uso de nuestro sitio web y servicios.</p>
                </div>
            </div>

            <div className="terms-container">
                <div className="terms-header">
                    <h1>Política de Cookies</h1>
                    <span className="update-date">Última Actualización: 06/Agosto/2024</span>
                </div>
                <div className="terms-content">
                    <p>
                        En FastPass Visa, con domicilio en Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima, México, y con el sitio web <a href="/">https://www.fastpass-visas.com</a>, utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y cómo puede gestionar su uso.
                    </p>

                    <h2>1. ¿Qué son las Cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, teléfono móvil, tablet, etc.) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus preferencias y acciones durante un período de tiempo, facilitando una experiencia de navegación más personalizada.
                    </p>

                    <h2>2. Tipos de Cookies que Utilizamos</h2>
                    <p>
                        Utilizamos los siguientes tipos de cookies en nuestro sitio web:
                    </p>
                    <ul className="restriction-list">
                        <li>Cookies Estríctamente Necesarias: Estas cookies son esenciales para el funcionamiento del sitio web y le permiten navegar y utilizar sus funciones, como acceder a áreas seguras.</li>
                        <li>Cookies de Rendimiento: Estas cookies recopilan información sobre cómo los usuarios utilizan el sitio web, como las páginas que visitan y los errores que encuentran. Estas cookies nos ayudan a mejorar el rendimiento del sitio web.</li>
                        <li>Cookies de Funcionalidad: Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su nombre de usuario, idioma o región) para ofrecer una experiencia más personalizada.</li>
                        <li>Cookies de Publicidad: Estas cookies se utilizan para mostrarle anuncios que sean relevantes para usted y sus intereses. También se utilizan para limitar la cantidad de veces que ve un anuncio y medir la efectividad de las campañas publicitarias.</li>
                        <li>Cookies de Redes Sociales: Estas cookies permiten que usted comparta contenido del sitio web en redes sociales y facilite la interacción con otras personas. Estas cookies son gestionadas por terceros y pueden estar sujetas a sus propias políticas de privacidad.</li>
                    </ul>

                    <h2>3. ¿Cómo Utilizamos las Cookies?</h2>
                    <p>
                        Las cookies en nuestro sitio web se utilizan para:
                    </p>
                    <ul className="restriction-list">
                        <li>Mejorar la Experiencia del Usuario: Recordar sus preferencias y configuraciones para ofrecer una experiencia de navegación personalizada.</li>
                        <li>Analizar el Rendimiento del Sitio Web: Evaluar cómo interactúan los usuarios con nuestro sitio web para identificar áreas de mejora.</li>
                        <li>Proporcionar Publicidad Relevante: Mostrar anuncios que sean relevantes para sus intereses y medir la eficacia de nuestras campañas publicitarias.</li>
                        <li>Facilitar la Interacción en Redes Sociales: Permitir compartir contenido y facilitar la interacción con redes sociales.</li>
                    </ul>

                    <h2>4. Gestión de Cookies</h2>
                    <p>
                        Usted puede controlar y gestionar las cookies de varias maneras:
                    </p>
                    <ul className="restriction-list">
                        <li>Configuración del Navegador: La mayoría de los navegadores le permiten gestionar las cookies a través de sus configuraciones. Puede bloquear, eliminar o permitir cookies según sus preferencias. Tenga en cuenta que bloquear todas las cookies puede afectar la funcionalidad del sitio web.</li>
                        <li>Cookies de Terceros: Algunos servicios de publicidad y análisis de terceros también ofrecen herramientas para gestionar sus cookies. Consulte las políticas de privacidad y cookies de estos terceros para obtener más información.</li>
                        <li>Opciones de Configuración del Sitio Web: En nuestro sitio web, puede ajustar sus preferencias de cookies utilizando el panel de configuración de cookies disponible en <a className='settings2' onClick={handleCustomize}>Cambiar Preferencias</a>.</li>
                    </ul>

                    <h2>5. Cambios en la Política de Cookies</h2>
                    <p>
                        Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas o en las leyes aplicables. Cualquier cambio será publicado en esta página con la fecha de la última actualización.
                    </p>

                    <h2>12. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta o inquietud sobre nuestra Política de Cookies, puede contactarnos en:
                    </p>
                    <ul className="restriction-list">
                        <li>Correo Electrónico: <a href="mailto:info@fastpass-visas.com">info@fastpass-visas.com</a></li>
                        <li>Dirección: Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima</li>
                        <li>Teléfono: <a href="tel:+523146885645">+ 52 314 688 5645</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PolCookies