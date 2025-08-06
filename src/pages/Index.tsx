import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
