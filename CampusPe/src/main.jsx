import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import Resume from './components/Resume';
import Employers from './components/Employers';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';
import { Modal, SignupForm } from './components/Common';
import './styles.css';

function App() {
  const [modal, setModal] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll(
      '.opportunities-copy, .feed-wrap, .resume-section, .employers-section, .showcase-heading, .download-row, .partners'
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header onSignup={setModal} />
      <main>
        <Hero onSignup={setModal} />
        <Opportunities onSignup={setModal} />
        <Resume />
        <Employers onSignup={setModal} />
        <AppShowcase />
      </main>
      <Footer onSignup={setModal} />
      <Modal open={Boolean(modal)} onClose={() => setModal('')} title={modal}>
        <SignupForm
          key={modal}
          mode={modal.toLowerCase().includes('waitlist') ? 'waitlist' : 'signup'}
        />
      </Modal>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
