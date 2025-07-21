// src/hooks/usePageAnalytics.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackTimeOnPage, trackScrollDepth } from './useTracking';

export const usePageAnalytics = () => {
    const location = useLocation();
    const startTimeRef = useRef(Date.now());
    const maxScrollRef = useRef(0);
    const scrollTrackedRef = useRef(new Set());

    useEffect(() => {
        // Resetear tiempo cuando cambia la página
        startTimeRef.current = Date.now();
        maxScrollRef.current = 0;
        scrollTrackedRef.current = new Set();

        // Función para trackear scroll
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);
            
            if (scrollPercent > maxScrollRef.current) {
                maxScrollRef.current = scrollPercent;
            }

            // Trackear milestones de scroll (25%, 50%, 75%, 100%)
            const milestones = [25, 50, 75, 100];
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !scrollTrackedRef.current.has(milestone)) {
                    scrollTrackedRef.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        // Función para trackear tiempo cuando el usuario sale de la página
        const handleBeforeUnload = () => {
            const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
            if (timeSpent > 5) { // Solo trackear si estuvo más de 5 segundos
                trackTimeOnPage(location.pathname, timeSpent);
            }
        };

        // Función para trackear tiempo cuando cambia de página (SPA)
        const handlePageChange = () => {
            const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
            if (timeSpent > 5) {
                trackTimeOnPage(location.pathname, timeSpent);
            }
        };

        // Agregar event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup function
        return () => {
            handlePageChange(); // Trackear tiempo al cambiar de página
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [location.pathname]);

    // Función para trackear manualmente eventos de interacción
    const trackInteraction = (interactionType, details = {}) => {
        const timeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
        
        window.gtag && window.gtag('event', 'user_interaction', {
            interaction_type: interactionType,
            time_on_page: timeOnPage,
            page_path: location.pathname,
            ...details
        });
    };

    return { trackInteraction };
};
