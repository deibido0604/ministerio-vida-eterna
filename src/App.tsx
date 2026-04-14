// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Trips from './components/Trips';
import Ministries from './components/Ministries';
import Donations from './components/Donations';
import Contact from './components/Contact';
import History from 'components/History';
import Projects from 'components/Projects';

const ScrollToHash: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Header />
    <Hero />
    <History />
    <Trips />
    <Projects />
    <Ministries />
    <Donations />
    <Contact />
  </>
);

const App: React.FC = () => {
  // **IMPORTANTE:** Prueba primero con 'sb' (sandbox público)
  // Si funciona, cambia a tu clientId real, pero ten en cuenta que necesitarás permisos para tarjetas.
  const clientId = 'sb';  // <--- CAMBIA TEMPORALMENTE A 'sb' PARA PROBAR

  const paypalOptions = {
    clientId,
    currency: 'USD',
    intent: 'capture',
    // Deshabilitamos explícitamente los componentes de tarjeta embebidos
    components: 'paypal-payments',   // Solo botón de PayPal, sin card-fields
    'disable-funding': 'card',       // Oculta el botón de "pagar con tarjeta" directo
    'enable-funding': 'paypal',      // Solo PayPal (y dentro de él, el usuario puede pagar como invitado con tarjeta)
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </PayPalScriptProvider>
  );
};

export default App;