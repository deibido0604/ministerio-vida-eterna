import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;