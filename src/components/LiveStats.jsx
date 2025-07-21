// src/components/LiveStats.jsx
import React, { useState, useEffect } from 'react';

// Componente opcional para mostrar estadísticas básicas
// Solo para desarrollo o panel de admin
const LiveStats = ({ showInProduction = false }) => {
    const [stats, setStats] = useState({
        currentVisitors: 0,
        pageViews: 0,
        timeOnSite: 0
    });

    useEffect(() => {
        // Solo mostrar en desarrollo o si está explícitamente habilitado
        if (process.env.NODE_ENV === 'production' && !showInProduction) {
            return;
        }

        // Simular estadísticas básicas desde localStorage
        const updateStats = () => {
            const visits = localStorage.getItem('page-visits') || '0';
            const startTime = localStorage.getItem('session-start') || Date.now();
            const timeOnSite = Math.round((Date.now() - parseInt(startTime)) / 1000);

            setStats({
                currentVisitors: 1, // Usuario actual
                pageViews: parseInt(visits),
                timeOnSite: timeOnSite
            });
        };

        // Incrementar contador de visitas
        const currentVisits = parseInt(localStorage.getItem('page-visits') || '0');
        localStorage.setItem('page-visits', (currentVisits + 1).toString());
        
        // Guardar inicio de sesión si no existe
        if (!localStorage.getItem('session-start')) {
            localStorage.setItem('session-start', Date.now().toString());
        }

        updateStats();
        const interval = setInterval(updateStats, 5000); // Actualizar cada 5 segundos

        return () => clearInterval(interval);
    }, [showInProduction]);

    // No mostrar en producción a menos que esté habilitado
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '12px',
            zIndex: 9999
        }}>
            <div><strong>Estadísticas en vivo</strong></div>
            <div>Visitantes actuales: {stats.currentVisitors}</div>
            <div>Páginas vistas: {stats.pageViews}</div>
            <div>Tiempo en sitio: {Math.floor(stats.timeOnSite / 60)}m {stats.timeOnSite % 60}s</div>
            <div style={{ fontSize: '10px', opacity: 0.7 }}>
                Ver más en Google Analytics
            </div>
        </div>
    );
};

export default LiveStats;
