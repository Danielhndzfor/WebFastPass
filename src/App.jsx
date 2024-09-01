import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

import PolPrivacidad from './Screens/Politicas/PolPrivacidad';
import TyC from './Screens/Politicas/TyC';
import AviPrivacidad from './Screens/Politicas/AviPrivacidad';

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cita-informativa" element={<CitaInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politica-de-privacidad" element={<PolPrivacidad />} />
          <Route path="/tyc" element={<TyC />} />
          <Route path="/aviso-de-privacidad" element={<AviPrivacidad />} />
        </Routes>
        <Footer />
      </Router>
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
      default:
        document.title = 'Inicio'; // Título por defecto
    }
  }, [location]);

  return null; // Este componente no necesita renderizar nada
}

export default App;
