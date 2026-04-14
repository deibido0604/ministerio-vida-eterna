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

declare const process: {
  env: {
    REACT_APP_PAYPAL_CLIENT_ID?: string;
  };
};

interface ScrollToHashProps {}

const ScrollToHash: React.FC<ScrollToHashProps> = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          requestAnimationFrame(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleHashScroll();
  }, [location]);

  return null;
};

const HomePage: React.FC = () => {
  return (
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
};

const App: React.FC = () => {
  const clientId = (process as any).env?.REACT_APP_PAYPAL_CLIENT_ID || 'sb';
  const paypalOptions = {
    clientId,
    currency: 'USD',
    intent: 'capture',
    commit: true,
    components: 'paypal-payments,card-fields',
    pageType: 'checkout',
    'enable-funding': 'paypal,card',
    'disable-funding': 'venmo,paylater',
    locale: 'es_HN',
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