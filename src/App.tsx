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
  const clientId = 'AYPvlPM3pFY86JZQOGkLCsvd49DsP7CwTXjdaeUqbPtrRRZqw6D96H5IDndpKP1yY5muToB_bY5RWPpu';  // <--- CAMBIA TEMPORALMENTE A 'sb' PARA PROBAR

  const paypalOptions = {
    clientId,
    currency: 'USD',
    intent: 'capture',
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