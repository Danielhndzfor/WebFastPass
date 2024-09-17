import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CookieProvider } from './CookieContext';
import CookieBanner from './components/CookieBanner';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './Screens/Home';
import Services from './Screens/Services';
import About from './Screens/About';
import FAQ from './Screens/FAQ';
import Contact from './Screens/Contact';

import CitaInfo from './Screens/Services/CitaInfo';
import ActasNacimiento from './Screens/Services/ActasNacimiento';
import PasaporteAmericano from './Screens/Services/PasaporteAme'
import PasaporteMexicano from './Screens/Services/PasaporteMex'
import VisaAmericana from './Screens/Services/VisaAme'
import VisaRechazada from './Screens/Services/VisaRechaCan'
import CitaEmergenciaVisa from './Screens/Services/CitasEmergencia'
import AdelantarCitas from './Screens/Services/AdelantarCita'
import PreparacionEntrevistas from './Screens/Services/PreparacionEntrevista'
import PoderNotarialMenoresMexico from './Screens/Services/PoderMex';
import PoderNotarialMenoresUSA from './Screens/Services/PoderAme';
import FormatoSAMMenoresMexico from './Screens/Services/SAM';
import TraduccionDocumentos from './Screens/Services/Traduccion';


import TyC from './Screens/Politicas/TyC';
import PolPrivacidad from './Screens/Politicas/PolPrivacidad';
import AviPrivacidad from './Screens/Politicas/AviPrivacidad';
import PolDevolucion from './Screens/Politicas/PolDevolucion';
import AviLegal from './Screens/Politicas/AviLegal';
import PolCookies from './Screens/Politicas/PolCookies';

function App() {
  return (
    <div className="">
      <CookieProvider>
        <Router>
          <NavBar />
          <TitleUpdater />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/services/cita-informativa" element={<CitaInfo />} />
            <Route path="/services/actas-nacimiento" element={<ActasNacimiento />} />
            <Route path="/services/pasaporte-americano" element={<PasaporteAmericano />} />
            <Route path="/services/pasaporte-mexicano" element={<PasaporteMexicano />} />
            <Route path="/services/visa-americana" element={<VisaAmericana />} />
            <Route path="/services/visa-rechazada" element={<VisaRechazada />} />
            <Route path="/services/citas-emergencia" element={<CitaEmergenciaVisa />} />
            <Route path="/services/adelantar-cita" element={<AdelantarCitas />} />
            <Route path="/services/preparacion-entrevista" element={<PreparacionEntrevistas />} />
            <Route path="/services/poder-notarial-mexicano" element={<PoderNotarialMenoresMexico />} />
            <Route path="/services/poder-notarial-americano" element={<PoderNotarialMenoresUSA />} />
            <Route path="/services/formato-sam-menores-mexico" element={<FormatoSAMMenoresMexico />} />
            <Route path="/services/traduccion-documentos" element={<TraduccionDocumentos />} />



            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tyc" element={<TyC />} />

            <Route path="/politica-de-privacidad" element={<PolPrivacidad />} />
            <Route path="/aviso-de-privacidad" element={<AviPrivacidad />} />
            <Route path="/politica-de-devolucion" element={<PolDevolucion />} />
            <Route path="/aviso-legal" element={<AviLegal />} />
            <Route path="/politica-de-cookies" element={<PolCookies />} />
          </Routes>
          <Footer />
        </Router>
        <CookieBanner />
      </CookieProvider>
    </div>
  );
}

// Componente para actualizar el título según la ruta
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Inicio'; // Cambia este texto al título deseado
        break;
      case '/services':
        document.title = 'Servicios'; // Cambia este texto al título deseado
        break;
      case '/about':
        document.title = 'Acerca de'; // Cambia este texto al título deseado
        break;
      case '/faq':
        document.title = 'Preguntas frecuentes'; // Cambia este texto al título deseado
        break;
      case '/contact':
        document.title = 'Contacto'; // Cambia este texto al título deseado
        break;
      case '/tyc':
        document.title = 'Términos y condiciones'; // Cambia este texto al título deseado
        break;
      case '/politica-de-privacidad':
        document.title = 'Política de privacidad'; // Cambia este texto al título deseado
        break;
      case '/aviso-de-privacidad':
        document.title = 'Aviso de privacidad'; // Cambia este texto al título deseado
        break;
      case '/politica-de-devolucion':
        document.title = 'Política de devolución'; // Cambia este texto al título deseado
        break;
      case '/aviso-legal':
        document.title = 'Aviso legal'; // Cambia este texto al título deseado
        break;
      case '/politica-de-cookies':
        document.title = 'Política de cookies'; // Cambia este texto al título deseado
        break
      default:
        document.title = 'Inicio'; // Título por defecto
    }
  }, [location]);

  return null; // Este componente no necesita renderizar nada
}

export default App;
