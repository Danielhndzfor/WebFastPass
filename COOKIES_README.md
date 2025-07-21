# 🍪 Guía de Implementación de Cookies - WebFastPass

## 🎯 Resumen del Problema

**ANTES**: Las cookies solo guardaban preferencias pero no hacían tracking real.
**AHORA**: Sistema completo que controla Google Analytics según las preferencias del usuario.

## 🚀 Configuración Completada

### ✅ Google Analytics - YA CONFIGURADO

- **ID configurado**: `G-DZQ5MC0EM3`
- **Estado**: ✅ Listo para usar
- **Scripts**: Se cargan/descargan automáticamente según preferencias

## 📊 **¿Cómo Ver Estadísticas de Visitantes?**

### 🔥 **Google Analytics (Automático)**
Con tu configuración actual ya tienes acceso a:

1. **Ve a [Google Analytics](https://analytics.google.com/)**
2. **Tiempo Real** → Ver visitantes actuales en vivo
3. **Informes → Participación** → Páginas más visitadas
4. **Informes → Audiencia** → Datos demográficos y ubicación

### 📈 **Nuevas Funciones Implementadas**

**Tracking automático:**
- ✅ **Tiempo en cada página** (se mide automáticamente)
- ✅ **Profundidad de scroll** (25%, 50%, 75%, 100%)
- ✅ **Interacciones con elementos**
- ✅ **Descargas de archivos**

**Funciones manuales disponibles:**
```javascript
import { 
    trackEvent, 
    trackElementClick, 
    trackFileDownload, 
    trackTimeOnPage 
} from '../hooks/useTracking';

// Trackear clicks específicos
trackElementClick('boton_contacto', 'cta_button');

// Trackear descargas
trackFileDownload('guia-visa.pdf', 'pdf');

// Evento personalizado
trackEvent('formulario_completado', {
    tipo: 'contacto',
    tiempo_completado: 45
});
```

## ✅ Qué Hace Ahora el Sistema

### Automático:
- **Carga/descarga Google Analytics** según preferencias del usuario
- **Tracking de páginas visitadas** automáticamente
- **Respeta las preferencias** guardadas en localStorage
- **Sin Facebook Pixel** (eliminado por solicitud)

### Manual (para eventos específicos):
```javascript
import { trackEvent } from '../hooks/useTracking';

// Tracking de click en botón
const handleContactClick = () => {
    trackEvent('contact_button_click', {
        page: 'home',
        section: 'hero'
    });
};

// Tracking de envío de formulario
const handleFormSubmit = (data) => {
    trackEvent('form_submit', {
        form_type: 'contact',
        has_phone: !!data.phone
    });
};
```

## 🔧 Archivos Modificados

1. **`src/hooks/useTracking.js`** - Solo Google Analytics (G-DZQ5MC0EM3)
2. **`src/App.jsx`** - Integración del tracking
3. **`src/CookieContext.jsx`** - Eliminada opción de marketing
4. **`src/components/CookieBanner.jsx`** - Solo analytics y funcionales
5. **`src/components/CookieSettings.jsx`** - Panel simplificado

## 🧪 Cómo Probar

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña Network
3. Acepta cookies de analíticas
4. Deberías ver requests a `googletagmanager.com/gtag/js?id=G-DZQ5MC0EM3`
5. Deshabilita cookies y los requests deberían detenerse

## 📊 Tipos de Eventos que Puedes Trackear

```javascript
// Clics en servicios
trackElementClick('visa_americana', 'service_card');

// Descargas de documentos  
trackFileDownload('guia-visa.pdf', 'pdf');

// Envío de formularios
trackEvent('form_submit', { 
    form_type: 'contact',
    completion_time: 120 
});

// Scroll profundo (automático)
// Se trackea automáticamente: 25%, 50%, 75%, 100%

// Tiempo en página (automático)
// Se mide automáticamente cuando el usuario sale de la página
```

## 🔍 **Estadísticas Disponibles en Google Analytics**

Una vez que tengas datos (24-48 horas después), podrás ver:

### **Tiempo Real:**
- 👥 **Usuarios activos ahora**
- 📄 **Páginas que están viendo**
- 🌍 **De qué países/ciudades**
- 📱 **Qué dispositivos usan**

### **Informes Detallados:**
- 📊 **Páginas más populares**
- ⏱️ **Tiempo promedio en sitio**
- 🔄 **Tasa de rebote**
- 📈 **Crecimiento de visitantes**
- 🎯 **Conversiones y objetivos**

### **Eventos Personalizados:**
- 🖱️ **Clicks en botones específicos**
- 📄 **Descargas de archivos**
- 📝 **Formularios completados**
- 📊 **Profundidad de scroll**

## 🛠️ **Opciones Adicionales**

### **Ver Stats en Desarrollo (Opcional):**
```javascript
// En App.jsx, descomenta:
import LiveStats from './components/LiveStats';

// Y en el JSX:
<LiveStats /> // Solo se muestra en desarrollo
```

## 📊 Tipos de Eventos que Puedes Trackear (Ejemplos Específicos)

## ⚖️ Cumplimiento Legal

✅ **Banner de cookies** - Aparece la primera vez
✅ **Configuración granular** - Analytics vs Funcionales
✅ **Respeto a preferencias** - No carga GA si no acepta
✅ **Persistencia** - Guarda preferencias del usuario
✅ **Política clara** - Página de política de cookies

## 🐛 Debugging

Para ver si funciona:
1. Consola del navegador: `window.gtag` debe existir si analytics está activado
2. Network tab: Buscar requests a `googletagmanager.com`
3. LocalStorage: `cookie-preferences` debe tener `{"analytics": true, "functional": true}`

## ✅ Sistema Listo

🎉 **¡Las cookies ya están completamente funcionales!**
- Google Analytics configurado con tu ID real
- Sin Facebook Pixel (eliminado)
- Sistema respeta preferencias del usuario
- Cumple con normativas de privacidad
