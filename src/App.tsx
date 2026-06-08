/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import BackgroundPattern from './components/BackgroundPattern';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';

import ServicePage from './pages/ServicePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="relative w-full min-h-screen bg-dark-950 font-sans text-white overflow-x-hidden pt-0 selection:bg-gold-500 selection:text-dark-950 pb-16 lg:pb-0">
        <BackgroundPattern />
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
        </Routes>

        <Footer />
        <MobileStickyFooter />
      </div>
      <Analytics />
    </>
  );
}
