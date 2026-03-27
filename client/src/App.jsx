import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-neonPurple/30 font-sans">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center bg-black/40 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6">
          <p className="text-gray-400 text-sm mb-4">
            Designed & Developed by <span className="text-white font-bold tracking-widest">TANVI SHREYA</span>
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
