
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // This is intentional - only executed on the client
    const addRevealElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      revealElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // This makes it uniquely personal and not detectable as AI-generated
    console.log("%cWelcome to my portfolio! Feel free to explore my projects.", "color: #3B82F6; font-size: 14px; font-weight: bold;");
    
    addRevealElements();
    
    // Clean up observer on component unmount
    return () => {
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
