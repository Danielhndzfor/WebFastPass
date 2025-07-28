// src/utils/seoData.js
export const seoPages = {
    home: {
        title: 'Visas en Manzanillo y Trámite para Visa Americana | FastPass Visa',
        description: '¿Buscas visas en Manzanillo? Somos expertos en trámite para visa americana en Manzanillo, Colima. Más de 10 años ayudando a familias a cumplir sus sueños migratorios. Consultoría líder en trámites de visas americanas, pasaportes mexicanos y americanos.',
        keywords: 'visas en Manzanillo, trámite para visa americana en Manzanillo, visa americana, pasaporte mexicano, pasaporte americano, trámites migratorios, Manzanillo, Colima, consultoría, FastPass Visa, citas consulado',
        url: 'https://www.fastpass-visas.com',
        image: '/logoP.webp',
        type: 'website'
    },
    
    services: {
        title: 'Trámite para Visa Americana en Manzanillo y Servicios Migratorios | FastPass Visa',
        description: 'Especialistas en trámite para visa americana en Manzanillo. Ofrecemos servicios completos de visas, pasaportes, actas de nacimiento, poderes notariales y más. Consultoría migratoria en Manzanillo, Colima.',
        keywords: 'trámite para visa americana en Manzanillo, visas en Manzanillo, servicios migratorios, visa americana, pasaporte, actas nacimiento, poder notarial, SAM, traducción documentos, Manzanillo',
        url: 'https://www.fastpass-visas.com/services',
        structuredData: {
            "@type": "Service",
            "serviceType": "Consultoría Migratoria"
        }
    },

    visaAmericana: {
        title: 'Trámite para Visa Americana en Manzanillo | FastPass Visa',
        description: '¿Necesitas trámite para visa americana en Manzanillo? Te ayudamos con el formulario DS-160, cita en consulado, preparación de entrevista y documentos. Experiencia comprobada en visas en Manzanillo.',
        keywords: 'trámite para visa americana en Manzanillo, visas en Manzanillo, visa americana, DS-160, cita consulado, entrevista visa, trámite visa USA, Manzanillo, Colima, consultoría migratoria',
        url: 'https://www.fastpass-visas.com/services/visa-americana',
        structuredData: {
            "@type": "Service",
            "name": "Trámite de Visa Americana",
            "description": "Servicio completo para obtener visa americana incluyendo DS-160, cita y preparación"
        }
    },

    pasaporteMexicano: {
        title: 'Pasaporte Mexicano - Renovación y Primera Vez | FastPass Visa Manzanillo',
        description: 'Obtén o renueva tu pasaporte mexicano sin complicaciones. Te ayudamos con citas SRE, documentos necesarios y todo el proceso en Manzanillo, Colima.',
        keywords: 'pasaporte mexicano, renovación pasaporte, primera vez, SRE, cita pasaporte, Manzanillo, Colima, documentos',
        url: 'https://www.fastpass-visas.com/services/pasaporte-mexicano',
        structuredData: {
            "@type": "Service",
            "name": "Trámite de Pasaporte Mexicano",
            "description": "Gestión completa para obtener o renovar pasaporte mexicano"
        }
    },

    pasaporteAmericano: {
        title: 'Pasaporte Americano - Trámite y Renovación | FastPass Visa Manzanillo',
        description: 'Tramita tu pasaporte americano o renuévalo. Te asesoramos en todo el proceso, documentos necesarios y citas. Servicio especializado en Manzanillo.',
        keywords: 'pasaporte americano, renovación, primera vez, consulado americano, ciudadania americana, Manzanillo',
        url: 'https://www.fastpass-visas.com/services/pasaporte-americano'
    },

    citasEmergencia: {
        title: 'Citas de Emergencia Visa Americana - Servicio Urgente | FastPass Visa',
        description: 'Obtén cita de emergencia para visa americana por motivos médicos, funerales o urgencias. Servicio especializado con alta tasa de éxito.',
        keywords: 'cita emergencia, visa americana urgente, emergencia médica, funeral, cita urgente consulado',
        url: 'https://www.fastpass-visas.com/services/citas-emergencia'
    },

    about: {
        title: 'Acerca de FastPass Visa - Tu Consultoría de Confianza en Manzanillo',
        description: 'Conoce la historia de FastPass Visa, consultoría líder en trámites migratorios en Manzanillo, Colima. Más de 10 años de experiencia y miles de casos exitosos.',
        keywords: 'FastPass Visa, consultoría migratoria, Manzanillo, experiencia, casos exitosos, equipo profesional',
        url: 'https://www.fastpass-visas.com/about',
        structuredData: {
            "@type": "AboutPage"
        }
    },

    contact: {
        title: 'Contacto - FastPass Visa Manzanillo, Colima | Consultoría Migratoria',
        description: 'Contáctanos para iniciar tu trámite migratorio. Ubicados en Manzanillo, Colima. Teléfono: +52-314-688-5645. Atención personalizada.',
        keywords: 'contacto, FastPass Visa, Manzanillo, Colima, teléfono, dirección, consultoría migratoria',
        url: 'https://www.fastpass-visas.com/contact',
        structuredData: {
            "@type": "ContactPage"
        }
    },

    faq: {
        title: 'Preguntas Frecuentes - Trámites Migratorios | FastPass Visa Manzanillo',
        description: 'Resuelve tus dudas sobre trámites de visas, pasaportes y documentos migratorios. Preguntas frecuentes con respuestas de expertos.',
        keywords: 'preguntas frecuentes, FAQ, dudas visa, pasaporte, trámites migratorios, ayuda',
        url: 'https://www.fastpass-visas.com/faq',
        structuredData: {
            "@type": "FAQPage"
        }
    },

    card: {
        title: 'Angel I. López Rivera - Asesor de Pasaportes y Visa Americana | FastPass Visa',
        description: 'Tarjeta digital de Angel I. López Rivera, asesor especializado en trámites de pasaportes y visas americanas. Contacto directo para consultoría migratoria.',
        keywords: 'Angel López Rivera, asesor migratorio, visa americana, pasaporte, consultor, Manzanillo, Colima, tarjeta digital',
        url: 'https://www.fastpass-visas.com/card',
        image: '/logoP.webp',
        type: 'profile',
        structuredData: {
            "@type": "Person",
            "name": "Angel I. López Rivera",
            "jobTitle": "Asesor pasaportes y visa americana",
            "worksFor": {
                "@type": "Organization",
                "name": "FastPass Visa"
            }
        }
    }
};

// Función para obtener datos SEO por ruta
export const getSEOData = (pathname) => {
    const routeMap = {
        '/': 'home',
        '/services': 'services',
        '/services/visa-americana': 'visaAmericana',
        '/services/pasaporte-mexicano': 'pasaporteMexicano',
        '/services/pasaporte-americano': 'pasaporteAmericano',
        '/services/citas-emergencia': 'citasEmergencia',
        '/about': 'about',
        '/contact': 'contact',
        '/faq': 'faq',
        '/card': 'card'
    };

    const key = routeMap[pathname] || 'home';
    return seoPages[key];
};
